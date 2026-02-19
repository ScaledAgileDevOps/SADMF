import { RecipientIdentity } from '../domain/recipient-identity.js'
import { buildCredential } from '../domain/credential.js'
import { toIdentityObject } from './identity-mapper.js'

/**
 * Application service: orchestrates badge credential issuance.
 * Depends on injected ports — no direct file I/O or signing logic here.
 *
 * @param {object} deps
 * @param {import('../infrastructure/ports.js').BadgeDefinitionPort} deps.loader
 * @param {import('../infrastructure/ports.js').CredentialStorePort} deps.store
 * @param {import('../infrastructure/ports.js').CredentialSigner} deps.signer
 * @param {string} deps.issuerUrl
 * @param {string} deps.issuerName
 * @param {import('../infrastructure/ports.js').NotifierPort|null} [deps.notifier]
 */
export class BadgeIssuer {
  #loader
  #store
  #signer
  #issuerUrl
  #issuerName
  #notifier

  constructor({ loader, store, signer, issuerUrl, issuerName, notifier = null }) {
    this.#loader = loader
    this.#store = store
    this.#signer = signer
    this.#issuerUrl = issuerUrl
    this.#issuerName = issuerName
    this.#notifier = notifier
  }

  async run() {
    const badges = await this.#loader.loadAll()
    const counts = { issued: 0, skipped: 0, errors: 0 }

    for (const badge of badges) {
      for (const recipient of badge.recipients ?? []) {
        await this.#issueOne(badge, recipient, counts)
      }
    }

    if (counts.errors > 0) throw new Error(`${counts.errors} credential(s) failed to issue`)
    return counts
  }

  async #issueOne(badge, recipient, counts) {
    try {
      const identity = new RecipientIdentity(recipient.email)

      if (this.#store.exists(badge.badge_id, identity.hash)) {
        console.log(`[SKIP] ${badge.badge_id} / ${recipient.email}`)
        counts.skipped++
        return
      }

      const credential = buildCredential({
        badgeId: badge.badge_id,
        badgeName: badge.name,
        recipientHash: identity.hash,
        recipientIdentityObject: toIdentityObject(identity),
        issuerUrl: this.#issuerUrl,
        issuerName: this.#issuerName,
        issuanceDate: recipient.issued,
      })

      const proof = await this.#signer.sign(credential)
      this.#store.write(badge.badge_id, identity.hash, { ...credential, proof })
      console.log(`[ISSUED] ${badge.badge_id} / ${recipient.email}`)
      counts.issued++
      if (this.#notifier) {
        try {
          this.#notifier.notify(recipient.name, recipient.email,
            badge.name, badge.badge_id, identity.hash, this.#issuerUrl)
        } catch (notifyErr) {
          console.error(`[NOTIFY ERROR] ${badge.badge_id} / ${recipient.email}: ${notifyErr.message}`)
        }
      }
    } catch (err) {
      console.error(`[ERROR] ${badge.badge_id} / ${recipient.email}: ${err.message}`, err)
      counts.errors++
    }
  }
}
