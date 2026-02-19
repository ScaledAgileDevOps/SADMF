import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { load } from 'js-yaml'

// Implements BadgeDefinitionPort (see ports.js).
// Reads all .yaml files from data/badges/ relative to the repo root.
export class YamlBadgeDefinitionLoader {
  #badgesDir

  constructor(repoRoot = join(import.meta.dirname, '..', '..')) {
    this.#badgesDir = join(repoRoot, 'data', 'badges')
  }

  loadAll() {
    const files = readdirSync(this.#badgesDir).filter(f => f.endsWith('.yaml'))
    return Promise.resolve(
      files.map(file => load(readFileSync(join(this.#badgesDir, file), 'utf8')))
    )
  }
}
