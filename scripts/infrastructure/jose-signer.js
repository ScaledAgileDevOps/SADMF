import { importJWK, CompactSign } from 'jose'

/**
 * Infrastructure adapter implementing CredentialSigner (see ports.js).
 * Uses the jose library with EdDSA (Ed25519) algorithm.
 *
 * Use the async factory: `const signer = await JoseCredentialSigner.create()`
 * Reading BADGE_SIGNING_KEY and importing the key both happen in create(),
 * so by the time sign() is called the key is ready and validated.
 */
export class JoseCredentialSigner {
  #privateKey // CryptoKey — imported once at creation, reused on every sign()

  constructor(importedKey) {
    this.#privateKey = importedKey
  }

  /**
   * Reads BADGE_SIGNING_KEY from the environment, parses and imports the key,
   * and returns a ready-to-use signer. Throws immediately on any misconfiguration.
   * @returns {Promise<JoseCredentialSigner>}
   */
  static async create() {
    const raw = process.env.BADGE_SIGNING_KEY
    if (!raw) throw new Error('BADGE_SIGNING_KEY environment variable is not set')

    let jwk
    try {
      jwk = JSON.parse(Buffer.from(raw, 'base64').toString('utf8'))
    } catch {
      throw new Error('BADGE_SIGNING_KEY is not a valid base64-encoded JWK')
    }

    const importedKey = await importJWK(jwk, 'EdDSA')
    return new JoseCredentialSigner(importedKey)
  }

  /**
   * Signs a plain credential object and returns a compact JWS string.
   * @param {object} credential - JSON-serializable credential object.
   * @returns {Promise<string>} Compact JWS per RFC 7515 §7.1.
   */
  async sign(credential) {
    const payload = new TextEncoder().encode(JSON.stringify(credential))
    return new CompactSign(payload)
      .setProtectedHeader({ alg: 'EdDSA' })
      .sign(this.#privateKey)
  }
}
