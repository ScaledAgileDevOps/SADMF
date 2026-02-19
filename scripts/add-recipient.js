#!/usr/bin/env node
// Add a new recipient to the private recipients repo and trigger badge issuance.
//
// Usage:
//   node scripts/add-recipient.js <badge-id> <name> <email> [issued-date]
//
// Arguments:
//   badge-id      One of: accredited-facilitator, fellow, master, practitioner, depressed
//   name          Recipient's full name (quote if it contains spaces)
//   email         Recipient's email address
//   issued-date   ISO date the badge was earned, e.g. 2026-02-19 (defaults to today)
//
// Requirements:
//   - SADMF_DISPATCH_TOKEN in .env (PAT with repo scope for the private recipients repo)
//   - git and gh CLI available
//
// Load .env: node --env-file=../.env add-recipient.js ...
//
// What it does:
//   1. Clones the private recipients repo to a temp directory
//   2. Appends the new recipient to <badge-id>.yaml
//   3. Commits and pushes to the private repo
//   4. Dispatches recipients-updated to the public repo to trigger issuance

import { execSync } from 'node:child_process'
import { mkdtempSync, readFileSync, writeFileSync, existsSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { load } from 'js-yaml'

const VALID_BADGE_IDS = ['accredited-facilitator', 'fellow', 'master', 'practitioner', 'depressed']
const PRIVATE_REPO = 'ScaledAgileDevOps/sadmf_recipents'
const PUBLIC_REPO = 'ScaledAgileDevOps/SADMF'

const [badgeId, name, email, issuedArg] = process.argv.slice(2)

if (!badgeId || !name || !email) {
  console.error('Usage: node add-recipient.js <badge-id> <name> <email> [issued-date]')
  console.error('')
  console.error('Badge IDs:', VALID_BADGE_IDS.join(', '))
  console.error('Example:')
  console.error('  node add-recipient.js accredited-facilitator "Jane Smith" jane@example.com 2026-02-19')
  process.exit(1)
}

if (!VALID_BADGE_IDS.includes(badgeId)) {
  console.error(`Unknown badge ID "${badgeId}". Valid IDs: ${VALID_BADGE_IDS.join(', ')}`)
  process.exit(1)
}

const issued = issuedArg ?? new Date().toISOString().slice(0, 10)

// Validate date format
if (!/^\d{4}-\d{2}-\d{2}$/.test(issued)) {
  console.error(`Invalid date "${issued}". Use ISO format: YYYY-MM-DD`)
  process.exit(1)
}

// Clone private repo to a temp directory
const tmpDir = mkdtempSync(join(tmpdir(), 'sadmf-recipients-'))
console.log(`Cloning ${PRIVATE_REPO}...`)

try {
  const token = process.env.SADMF_DISPATCH_TOKEN
  const cloneUrl = token
    ? `https://${token}@github.com/${PRIVATE_REPO}.git`
    : `https://github.com/${PRIVATE_REPO}.git`
  execSync(`git clone --quiet "${cloneUrl}" "${tmpDir}"`, { stdio: 'inherit' })
} catch {
  console.error(`Failed to clone ${PRIVATE_REPO}. Check SADMF_DISPATCH_TOKEN or gh auth.`)
  rmSync(tmpDir, { recursive: true })
  process.exit(1)
}

const recipientsDir = join(tmpDir, 'recipients')
const yamlPath = join(recipientsDir, `${badgeId}.yaml`)

// Check if recipient already exists
if (existsSync(yamlPath)) {
  const existing = load(readFileSync(yamlPath, 'utf8'))
  const duplicate = existing?.recipients?.find(r => r.email === email)
  if (duplicate) {
    console.error(`${email} is already listed under ${badgeId} (issued: ${duplicate.issued})`)
    rmSync(tmpDir, { recursive: true })
    process.exit(1)
  }
}

// Append recipient entry to the YAML file
const entry = `  - name: ${name}\n    email: ${email}\n    issued: ${issued}\n`

if (existsSync(yamlPath)) {
  const current = readFileSync(yamlPath, 'utf8')
  writeFileSync(yamlPath, current.trimEnd() + '\n' + entry)
} else {
  writeFileSync(yamlPath, `badge_id: ${badgeId}\nrecipients:\n${entry}`)
}

console.log(`Added ${name} <${email}> to ${badgeId} (issued: ${issued})`)

// Commit and push to the private repo
try {
  execSync(`git -C "${tmpDir}" config user.name "Badge Admin"`)
  execSync(`git -C "${tmpDir}" config user.email "badge-bot@users.noreply.github.com"`)
  execSync(`git -C "${tmpDir}" add recipients/${badgeId}.yaml`)
  execSync(`git -C "${tmpDir}" commit -m "Add ${name} to ${badgeId}"`)
  execSync(`git -C "${tmpDir}" push`, { stdio: 'inherit' })
  console.log('Pushed to private recipients repo.')
} catch (err) {
  console.error('Failed to commit/push to private repo:', err.message)
  rmSync(tmpDir, { recursive: true })
  process.exit(1)
} finally {
  rmSync(tmpDir, { recursive: true })
}

// Trigger badge issuance
console.log('Triggering badge issuance workflow...')
try {
  execSync(
    `gh api repos/${PUBLIC_REPO}/dispatches -f event_type=recipients-updated`,
    { stdio: 'inherit' }
  )
  console.log('Done. Watch progress at: https://github.com/ScaledAgileDevOps/SADMF/actions')
} catch {
  console.error('Warning: failed to trigger workflow. Run manually:')
  console.error(`  gh api repos/${PUBLIC_REPO}/dispatches -f event_type=recipients-updated`)
}
