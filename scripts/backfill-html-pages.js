#!/usr/bin/env node
// One-off script: generates HTML landing pages for existing issued credentials.
// Run once after deploying the #writeHtmlPage feature.

import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, basename } from 'node:path'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { FileCredentialStore } from './infrastructure/file-credential-store.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const staticIssuedRoot = join(__dirname, '..', 'static', 'badges', 'issued')

const store = new FileCredentialStore()

let count = 0
for (const badgeId of readdirSync(staticIssuedRoot)) {
  const dir = join(staticIssuedRoot, badgeId)
  if (!statSync(dir).isDirectory()) continue
  for (const file of readdirSync(dir)) {
    if (!file.endsWith('.json')) continue
    const hash = basename(file, '.json')
    const credential = JSON.parse(readFileSync(join(dir, file), 'utf8'))
    store.writeHtmlPage(badgeId, hash, credential)
    console.log(`[BACKFILL] ${badgeId}/${hash}.html`)
    count++
  }
}

console.log(`[BACKFILL] Done — ${count} HTML page(s) written.`)
