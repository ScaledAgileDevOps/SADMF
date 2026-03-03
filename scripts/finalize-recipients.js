#!/usr/bin/env node
// Commit, push, and dispatch badge issuance for a pre-populated recipients workdir.
// Used after a batch of add-recipient.js --no-push calls.
//
// Usage:
//   node scripts/finalize-recipients.js --workdir <dir> [--message <msg>]
//
// Load .env: node --env-file=../.env finalize-recipients.js ...

import { execSync } from 'node:child_process'
import { rmSync } from 'node:fs'

const args = process.argv.slice(2)
let workdir = null
let message = 'Add batch recipients'

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--workdir' && args[i + 1]) {
    workdir = args[++i]
  } else if (args[i] === '--message' && args[i + 1]) {
    message = args[++i]
  }
}

if (!workdir) {
  console.error('Usage: node finalize-recipients.js --workdir <dir> [--message <msg>]')
  process.exit(1)
}

try {
  execSync(`git -C "${workdir}" config user.name "Badge Admin"`)
  execSync(`git -C "${workdir}" config user.email "badge-bot@users.noreply.github.com"`)
  execSync(`git -C "${workdir}" commit -m "${message}"`)
  execSync(`git -C "${workdir}" push`, { stdio: 'inherit' })
  console.log('Pushed to private recipients repo.')
} catch (err) {
  console.error('Failed to commit/push to private repo:', err.message)
  rmSync(workdir, { recursive: true })
  process.exit(1)
} finally {
  rmSync(workdir, { recursive: true })
}

// Badge issuance is triggered automatically by the private repo's
// trigger-issuance.yml workflow when it detects the push above.
console.log('Done. The private repo will trigger issuance automatically.')
console.log('Watch progress at: https://github.com/ScaledAgileDevOps/SADMF/actions')
