import { describe, it, expect } from 'vitest'
import { compactVerify, generateKeyPair, exportJWK } from 'jose'
import { JoseCredentialSigner } from '../infrastructure/jose-signer.js'

// Scenarios from scripts/features/key-signing.feature

describe('EdDSA credential signing', () => {
  async function makeSignerWithKey() {
    const { privateKey, publicKey } = await generateKeyPair('EdDSA', { crv: 'Ed25519' })
    const privateJwk = await exportJWK(privateKey)
    process.env.BADGE_SIGNING_KEY = Buffer.from(JSON.stringify(privateJwk)).toString('base64')
    return { signer: await JoseCredentialSigner.create(), publicKey }
  }

  it('A signed credential contains a verifiable cryptographic proof', async () => {
    // Given a valid Ed25519 signing key pair
    const { signer } = await makeSignerWithKey()
    const credential = { id: 'https://example.com/test', type: ['VerifiableCredential'] }

    // When the credential is signed
    const proof = await signer.sign(credential)

    // Then the proof is a compact JWS string (three dot-separated base64url segments)
    const parts = proof.split('.')
    expect(parts).toHaveLength(3)
    parts.forEach(part => expect(part).toMatch(/^[A-Za-z0-9_-]+$/))
  })

  it('The JWS proof can be verified with the corresponding public key', async () => {
    // Given a valid Ed25519 key pair and a signed credential
    const { signer, publicKey } = await makeSignerWithKey()
    const credential = { id: 'https://example.com/test', type: ['VerifiableCredential'] }
    const proof = await signer.sign(credential)

    // When the proof is verified using the public key — then verification succeeds
    await expect(compactVerify(proof, publicKey)).resolves.toBeDefined()
  })

  it('Signing fails when BADGE_SIGNING_KEY is absent', async () => {
    // Given the BADGE_SIGNING_KEY environment variable is not set
    const saved = process.env.BADGE_SIGNING_KEY
    delete process.env.BADGE_SIGNING_KEY

    try {
      // When the signer is created — then an error is thrown naming the missing variable
      await expect(JoseCredentialSigner.create()).rejects.toThrow(/BADGE_SIGNING_KEY/)
    } finally {
      if (saved !== undefined) process.env.BADGE_SIGNING_KEY = saved
    }
  })

  it('Signing fails when the signing key is malformed or unrecognised', async () => {
    // Given BADGE_SIGNING_KEY is set to an invalid base64 string
    const saved = process.env.BADGE_SIGNING_KEY
    process.env.BADGE_SIGNING_KEY = 'not-valid-base64!@#'

    try {
      // When the signer is created — then an error is thrown
      await expect(JoseCredentialSigner.create()).rejects.toThrow()
    } finally {
      if (saved !== undefined) process.env.BADGE_SIGNING_KEY = saved
      else delete process.env.BADGE_SIGNING_KEY
    }
  })
})
