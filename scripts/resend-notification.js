#!/usr/bin/env node
// Resend a badge notification email to a single recipient.
//
// Usage:
//   node scripts/resend-notification.js <badge-id> <hash> <email> [name]
//
// Arguments:
//   badge-id  Badge identifier, e.g. "accredited-facilitator"
//   hash      Credential hash (the filename without .json), e.g. "sha256$abc123..."
//             Find it under static/badges/issued/<badge-id>/
//   email     Recipient's email address
//   name      Recipient's display name (optional, defaults to email)
//
// SMTP credentials are read from environment variables (same as send-notifications.js).
// Load from .env: node --env-file=../.env resend-notification.js ...

import { readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createTransport } from 'nodemailer'
import { buildEmailHtml } from './send-notifications.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const [badgeId, hash, email, recipientName] = process.argv.slice(2)

if (!badgeId || !hash || !email) {
  console.error('Usage: node resend-notification.js <badge-id> <hash> <email> [name]')
  console.error('')
  console.error('Find the hash under static/badges/issued/<badge-id>/ (filename without .json)')
  console.error('Example:')
  console.error('  node resend-notification.js accredited-facilitator sha256$abc123 jane@example.com "Jane Smith"')
  process.exit(1)
}

// Load badge name from badge definition YAML
let badgeName = badgeId
try {
  const { load } = await import('js-yaml')
  const yaml = load(readFileSync(join(__dirname, '..', 'data', 'badges', `${badgeId}.yaml`), 'utf8'))
  badgeName = yaml.name ?? badgeId
} catch {
  // Fall back to badge ID if YAML not found
}

const issuerUrl = process.env.BADGE_ISSUER_URL ?? 'https://scaledagiledevops.com'
const displayName = recipientName ?? email

// Read badge image for inline attachment
let imageBuffer
try {
  imageBuffer = readFileSync(join(__dirname, '..', 'static', 'badges', 'images', `${badgeId}.png`))
} catch {
  // Fall back to external URL in email if image not found locally
}

const transport = createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 587),
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
})

const badgeImageSrc = imageBuffer ? 'cid:badge-image' : undefined

try {
  await transport.sendMail({
    from: process.env.SMTP_FROM,
    to: email,
    subject: `Your SADMF v3 ${badgeName} credential has been issued`,
    html: buildEmailHtml({ recipientName: displayName, badgeName, badgeId, hash, issuerUrl, badgeImageSrc }),
    attachments: imageBuffer
      ? [{ filename: `${badgeId}.png`, content: imageBuffer, cid: 'badge-image' }]
      : [],
  })
  console.log(`[NOTIFY] Resent ${badgeName} notification to ${email}`)
} catch (err) {
  console.error(`[NOTIFY ERROR] Failed: ${err.message}`)
  process.exit(1)
}
