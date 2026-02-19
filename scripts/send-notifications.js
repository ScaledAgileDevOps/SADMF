#!/usr/bin/env node
// Standalone script: reads tmp/notifications.json and sends one email per record.
// Deletes the file when done. Exits 0 if nothing to send, 1 if any delivery fails.

import { readFileSync, unlinkSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createTransport } from 'nodemailer'

const __dirname = dirname(fileURLToPath(import.meta.url))

const NOTIFICATIONS_FILE = 'tmp/notifications.json'

/**
 * Builds the HTML body for a badge notification email.
 * Pure function — no I/O, fully testable in isolation.
 *
 * @param {object} params
 * @param {string} params.recipientName
 * @param {string} params.badgeName
 * @param {string} params.badgeId
 * @param {string} params.hash
 * @param {string} params.issuerUrl
 * @param {string} params.badgeImageSrc - Either a `cid:` reference (inline) or an external URL (fallback)
 * @returns {string} HTML string
 */
export function buildEmailHtml({ recipientName, badgeName, badgeId, hash, issuerUrl, badgeImageSrc }) {
  const badgeImageUrl = `${issuerUrl}/badges/images/${badgeId}.png`
  const credentialUrl = `${issuerUrl}/badges/issued/${badgeId}/${hash}.json`
  const imgSrc = badgeImageSrc ?? badgeImageUrl

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:sans-serif;color:#242627;max-width:600px;margin:0 auto;padding:24px">
  <img src="${imgSrc}" alt="${badgeName} badge" width="160" height="160"
       style="display:block;margin:0 auto 24px">
  <h1 style="color:#a23b72;text-align:center">Congratulations, ${recipientName}!</h1>
  <p>Your <strong>${badgeName}</strong> credential has been issued and is now verifiable on the
  Scaled Agile DevOps Maturity Framework certification registry.</p>
  <p>Use the links below to download your credential and badge image:</p>
  <ul>
    <li><a href="${credentialUrl}" style="color:#a23b72">Download signed JSON credential</a></li>
    <li><a href="${badgeImageUrl}" style="color:#a23b72">Download badge PNG image</a></li>
  </ul>
  <p style="font-size:0.85em;color:#666">
    This credential is cryptographically signed and can be verified at any time using the URL above.
  </p>
</body>
</html>`
}

function loadRecords() {
  try {
    const raw = readFileSync(NOTIFICATIONS_FILE, 'utf8')
    const records = JSON.parse(raw)
    return Array.isArray(records) ? records : []
  } catch {
    return []
  }
}

function buildTransport() {
  return createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

function readBadgeImage(badgeId) {
  try {
    return readFileSync(join(__dirname, '..', 'static', 'badges', 'images', `${badgeId}.png`))
  } catch {
    return null
  }
}

async function sendAll(records, transport) {
  let failed = 0

  for (const record of records) {
    const { recipientName, recipientEmail, badgeName, badgeId, hash, issuerUrl } = record
    try {
      const imageBuffer = readBadgeImage(badgeId)
      const badgeImageSrc = imageBuffer ? 'cid:badge-image' : undefined
      await transport.sendMail({
        from: process.env.SMTP_FROM,
        to: recipientEmail,
        subject: `Your ${badgeName} credential has been issued`,
        html: buildEmailHtml({ recipientName, badgeName, badgeId, hash, issuerUrl, badgeImageSrc }),
        attachments: imageBuffer ? [{ filename: `${badgeId}.png`, content: imageBuffer, cid: 'badge-image' }] : [],
      })
      console.log(`[NOTIFY] Sent to ${recipientEmail} (${badgeName})`)
    } catch (err) {
      console.error(`[NOTIFY ERROR] Failed to send to ${recipientEmail}: ${err.message}`)
      failed++
    }
  }

  return failed
}

// Only execute when run directly, not when imported by resend-notification.js
if (import.meta.url === new URL(process.argv[1], 'file://').href) {
  const records = loadRecords()

  if (records.length === 0) {
    console.log('[NOTIFY] No notifications to send.')
    process.exit(0)
  }

  const transport = buildTransport()
  const failed = await sendAll(records, transport)

  try {
    unlinkSync(NOTIFICATIONS_FILE)
  } catch {
    // Non-fatal — file may have already been cleaned up
  }

  if (failed > 0) {
    console.error(`[NOTIFY] ${failed} notification(s) failed.`)
    process.exit(1)
  }

  console.log(`[NOTIFY] All ${records.length} notification(s) sent successfully.`)
}
