#!/usr/bin/env node
// One-time script: generates a static/badges/achievements/{badge-id}.json
// Open Badges 3.0 Achievement JSON-LD file from a badge YAML definition.
//
// Usage:
//   node scripts/generate-achievement.js data/badges/practitioner.yaml
//   node scripts/generate-achievement.js data/badges/fellow.yaml
//   node scripts/generate-achievement.js data/badges/accredited-facilitator.yaml
//
// Run once per badge type and commit the output before issuing any credentials.
// Issued credentials reference these achievement URLs, so they must be deployed first.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { load } from 'js-yaml'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = join(__dirname, '..')

const yamlPath = process.argv[2]
if (!yamlPath) {
  console.error('Usage: node scripts/generate-achievement.js <path-to-badge-yaml>')
  process.exit(1)
}

// ISSUER_URL must be replaced with the live site URL before deployment,
// or substituted at build time via an environment variable.
const ISSUER_URL = process.env.BADGE_ISSUER_URL ?? 'ISSUER_URL'

const badge = load(readFileSync(join(repoRoot, yamlPath), 'utf8'))

const achievement = {
  '@context': [
    'https://www.w3.org/2018/credentials/v1',
    'https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json',
  ],
  id: `${ISSUER_URL}/badges/achievements/${badge.badge_id}.json`,
  type: 'Achievement',
  name: badge.name,
  description: badge.description,
  criteria: {
    narrative: badge.criteria,
  },
  image: {
    id: `${ISSUER_URL}${badge.image}`,
    type: 'Image',
  },
}

const outDir = join(repoRoot, 'static', 'badges', 'achievements')
mkdirSync(outDir, { recursive: true })
const outPath = join(outDir, `${badge.badge_id}.json`)
writeFileSync(outPath, JSON.stringify(achievement, null, 2) + '\n')
console.log(`Written: ${outPath}`)
