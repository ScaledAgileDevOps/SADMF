import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { load } from 'js-yaml'

// Implements BadgeDefinitionPort (see ports.js).
//
// Reads badge definitions from data/badges/ (public repo — no PII).
// Reads recipient lists from a separate recipients directory (private repo).
//
// The recipients directory is set via the BADGE_RECIPIENTS_DIR environment
// variable. In CI the private repo is checked out and this variable points
// to it. Locally, use a git-ignored data/recipients/ directory.
//
// Recipient files must be named to match the badge YAML filename
// (e.g. practitioner.yaml) and contain only: badge_id and recipients[].
export class YamlBadgeDefinitionLoader {
  #badgesDir
  #recipientsDir

  constructor(repoRoot = join(import.meta.dirname, '..', '..')) {
    this.#badgesDir = join(repoRoot, 'data', 'badges')
    this.#recipientsDir = process.env.BADGE_RECIPIENTS_DIR
      ?? join(repoRoot, 'data', 'recipients')
  }

  loadAll() {
    const recipients = this.#loadRecipients()
    const files = readdirSync(this.#badgesDir).filter(f => f.endsWith('.yaml'))

    const badges = files.map(file => {
      const def = load(readFileSync(join(this.#badgesDir, file), 'utf8'))
      def.recipients = recipients[def.badge_id] ?? []
      return def
    })

    return Promise.resolve(badges)
  }

  // Returns a map of badge_id -> recipients array loaded from the private dir.
  // If the recipients directory does not exist, returns an empty map and logs a warning.
  #loadRecipients() {
    if (!existsSync(this.#recipientsDir)) {
      console.warn(`[WARN] Recipients directory not found: ${this.#recipientsDir}`)
      console.warn('[WARN] Set BADGE_RECIPIENTS_DIR or create data/recipients/ locally.')
      return {}
    }

    const map = {}
    const files = readdirSync(this.#recipientsDir).filter(f => f.endsWith('.yaml'))
    for (const file of files) {
      const data = load(readFileSync(join(this.#recipientsDir, file), 'utf8'))
      if (data?.badge_id && Array.isArray(data.recipients)) {
        map[data.badge_id] = data.recipients
      }
    }
    return map
  }
}
