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

    this.#writeHtmlPage(badgeId, hash, credential)
  }

  writeHtmlPage(badgeId, hash, credential) {
    mkdirSync(join(this.#staticRoot, badgeId), { recursive: true })
    this.#writeHtmlPage(badgeId, hash, credential)
  }

  #writeHtmlPage(badgeId, hash, credential) {
    const badgeName = credential.credentialSubject.achievement.name
    const issuerName = credential.issuer.name
    const issuerUrl = new URL(credential.id).origin
    const pageUrl = `${issuerUrl}/badges/issued/${badgeId}/${hash}.html`
    const imageUrl = `${issuerUrl}/badges/images/${badgeId}.png`
    const credentialUrl = `${issuerUrl}/badges/issued/${badgeId}/${hash}.json`
    const title = `SADMF v3 ${badgeName} Credential`
    const description = `${issuerName} — verifiable SADMF v3 ${badgeName} credential`
    const liShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}&source=SADMF`

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${title}</title>
  <meta property="og:type" content="website">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:image" content="${imageUrl}">
  <meta property="og:url" content="${pageUrl}">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${imageUrl}">
</head>
<body style="font-family:sans-serif;color:#242627;max-width:600px;margin:0 auto;padding:24px">
  <img src="${imageUrl}" alt="${badgeName} badge" width="160" height="160"
       style="display:block;margin:0 auto 24px">
  <h1 style="color:#a23b72;text-align:center">${title}</h1>
  <p style="text-align:center">Issued by <strong>${issuerName}</strong></p>
  <p style="text-align:center">
    <a href="${liShareUrl}"
       style="display:inline-block;background:#0077b5;color:#fff;text-decoration:none;padding:10px 20px;border-radius:4px;font-weight:bold">
      Share on LinkedIn
    </a>
  </p>
  <p style="text-align:center;font-size:0.9em">
    <a href="${credentialUrl}" style="color:#a23b72">Download signed JSON credential</a>
    &nbsp;|&nbsp;
    <a href="${imageUrl}" style="color:#a23b72">Download badge PNG</a>
  </p>
</body>
</html>
`
    writeFileSync(join(this.#staticRoot, badgeId, `${hash}.html`), html)
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
