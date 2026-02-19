#!/usr/bin/env node
// One-off migration: reads Supporters_list CSV and populates
// data/recipients/practitioner.yaml and data/recipients/fellow.yaml.
//
// Rules:
//   price < 20  → practitioner
//   price >= 20 → fellow (regardless of other payments)
//
// Deduplication: one entry per email per badge tier, using the earliest
// qualifying support date as the issued date.
//
// Usage:
//   node scripts/migrate-supporters.js ~/Downloads/Supporters_list_2026-02-19.csv

import { readFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const csvPath = process.argv[2]
if (!csvPath) {
  console.error('Usage: node migrate-supporters.js <path-to-csv>')
  process.exit(1)
}

// Parse M/D/YY → YYYY-MM-DD
function parseDate(str) {
  const [m, d, yy] = str.trim().split('/')
  const year = 2000 + parseInt(yy, 10)
  return `${year}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`
}

const lines = readFileSync(csvPath, 'utf8').trim().split('\n')
const header = lines[0].split(',')

const emailIdx  = header.findIndex(h => h.trim() === 'Supporter Email')
const nameIdx   = header.findIndex(h => h.trim() === 'Supporter Name')
const priceIdx  = header.findIndex(h => h.trim() === 'Coffee Price')
const dateIdx   = header.findIndex(h => h.trim() === 'Supported On')

// email → { name, maxPrice, earliestDate }
const byEmail = new Map()

for (const line of lines.slice(1)) {
  if (!line.trim()) continue
  const cols = line.split(',')
  const email = cols[emailIdx].trim().toLowerCase()
  const name  = cols[nameIdx].trim()
  const price = parseFloat(cols[priceIdx].trim())
  const date  = parseDate(cols[dateIdx])

  if (!byEmail.has(email)) {
    byEmail.set(email, { name, maxPrice: price, earliestDate: date })
  } else {
    const entry = byEmail.get(email)
    if (price > entry.maxPrice) entry.maxPrice = price
    if (date < entry.earliestDate) entry.earliestDate = date
    // Keep the name from the first occurrence
  }
}

const practitioners = []
const fellows = []

for (const [email, { name, maxPrice, earliestDate }] of byEmail) {
  const entry = { name, email, issued: earliestDate }
  if (maxPrice >= 20) fellows.push(entry)
  else practitioners.push(entry)
}

// Sort alphabetically by name for readability
practitioners.sort((a, b) => a.name.localeCompare(b.name))
fellows.sort((a, b) => a.name.localeCompare(b.name))

function toYaml(badgeId, recipients) {
  if (recipients.length === 0) return `badge_id: ${badgeId}\nrecipients: []\n`
  const entries = recipients.map(r =>
    `  - name: ${r.name}\n    email: ${r.email}\n    issued: ${r.issued}`
  ).join('\n')
  return `badge_id: ${badgeId}\nrecipients:\n${entries}\n`
}

const practitionerPath = join(__dirname, '..', 'data', 'recipients', 'practitioner.yaml')
const fellowPath       = join(__dirname, '..', 'data', 'recipients', 'fellow.yaml')

writeFileSync(practitionerPath, toYaml('practitioner', practitioners))
writeFileSync(fellowPath,       toYaml('fellow', fellows))

console.log(`Practitioners: ${practitioners.length}`)
for (const p of practitioners) console.log(`  ${p.issued}  ${p.email}  (${p.name})`)
console.log(`Fellows: ${fellows.length}`)
for (const f of fellows) console.log(`  ${f.issued}  ${f.email}  (${f.name})`)
