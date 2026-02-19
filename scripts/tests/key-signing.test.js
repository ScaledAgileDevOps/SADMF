import { describe, it } from 'vitest'

// Scenarios from scripts/features/key-signing.feature
// Implement one scenario at a time. Read PROGRESS.md to find the next one.

describe('EdDSA credential signing', () => {
  it.todo('A signed credential contains a verifiable cryptographic proof')
  it.todo('The JWS proof can be verified with the corresponding public key')
  it.todo('Signing fails when BADGE_SIGNING_KEY is absent')
  it.todo('Signing fails when the signing key is malformed or unrecognised')
})
