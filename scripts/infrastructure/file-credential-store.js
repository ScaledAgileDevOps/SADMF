import { existsSync, writeFileSync, mkdirSync, copyFileSync } from 'node:fs'
import { join, dirname } from 'node:path'

// Implements CredentialStorePort (see ports.js).
// Writes signed credentials to data/issued/{badgeId}/{hash}.json
// and copies them to static/badges/issued/{badgeId}/{hash}.json so Hugo serves them.
export class FileCredentialStore {
  #dataRoot
  #staticRoot

  constructor(repoRoot = join(import.meta.dirname, '..', '..')) {
    this.#dataRoot = join(repoRoot, 'data', 'issued')
    this.#staticRoot = join(repoRoot, 'static', 'badges', 'issued')
  }

  exists(badgeId, hash) {
    return existsSync(this.#dataPath(badgeId, hash))
  }

  write(badgeId, hash, credential) {
    const dataPath = this.#dataPath(badgeId, hash)
    const staticPath = this.#staticPath(badgeId, hash)

    mkdirSync(dirname(dataPath), { recursive: true })
    mkdirSync(dirname(staticPath), { recursive: true })

    const json = JSON.stringify(credential, null, 2) + '\n'
    writeFileSync(dataPath, json)
    writeFileSync(staticPath, json)
  }

  #dataPath(badgeId, hash) {
    return join(this.#dataRoot, badgeId, `${hash}.json`)
  }

  #staticPath(badgeId, hash) {
    return join(this.#staticRoot, badgeId, `${hash}.json`)
  }
}
