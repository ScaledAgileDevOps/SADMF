import { createHash } from 'node:crypto'
import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'

// Implements CredentialStorePort (see ports.js).
// Writes signed credentials to data/issued/{badgeId}/{hash}.json
// and copies them to static/badges/issued/{badgeId}/{hash}.json so Hugo serves them.
//
// Deduplication index: data/issued/{badgeId}/.index.json
//   Maps sha256(email) → credential hash so exists() is deterministic across runs.
//   The raw email is never stored; only its SHA-256 digest is used as a key.
export class FileCredentialStore {
  #dataRoot
  #staticRoot

  constructor(repoRoot = join(import.meta.dirname, '..', '..')) {
    this.#dataRoot = join(repoRoot, 'data', 'issued')
    this.#staticRoot = join(repoRoot, 'static', 'badges', 'issued')
  }

  exists(badgeId, email) {
    const index = this.#loadIndex(badgeId)
    return this.#emailKey(email) in index
  }

  write(badgeId, hash, email, credential) {
    const dataPath = this.#dataPath(badgeId, hash)
    const staticPath = this.#staticPath(badgeId, hash)

    mkdirSync(dirname(dataPath), { recursive: true })
    mkdirSync(dirname(staticPath), { recursive: true })

    const json = JSON.stringify(credential, null, 2) + '\n'
    writeFileSync(dataPath, json)
    writeFileSync(staticPath, json)

    const index = this.#loadIndex(badgeId)
    index[this.#emailKey(email)] = hash
    writeFileSync(this.#indexPath(badgeId), JSON.stringify(index, null, 2) + '\n')
  }

  #emailKey(email) {
    return createHash('sha256').update(email.toLowerCase().trim()).digest('hex')
  }

  #loadIndex(badgeId) {
    try {
      return JSON.parse(readFileSync(this.#indexPath(badgeId), 'utf8'))
    } catch {
      return {}
    }
  }

  #indexPath(badgeId) {
    return join(this.#dataRoot, badgeId, '.index.json')
  }

  #dataPath(badgeId, hash) {
    return join(this.#dataRoot, badgeId, `${hash}.json`)
  }

  #staticPath(badgeId, hash) {
    return join(this.#staticRoot, badgeId, `${hash}.json`)
  }
}
