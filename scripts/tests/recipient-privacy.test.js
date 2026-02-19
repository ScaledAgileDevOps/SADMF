import { describe, it, expect } from 'vitest'
import { RecipientIdentity } from '../domain/recipient-identity.js'
import { toIdentityObject } from '../application/identity-mapper.js'

// Scenarios from scripts/features/recipient-privacy.feature
// Implement one scenario at a time. Read PROGRESS.md to find the next one.

describe('Recipient email privacy', () => {
  it('Email address is never stored in plaintext in a credential file', () => {
    // Given a recipient with email "jane@example.com"
    const email = 'jane@example.com'

    // When a RecipientIdentity is created and mapped to the credential wire format
    const identity = new RecipientIdentity(email)
    const identityObject = toIdentityObject(identity)

    // Then the serialised identity (as it appears in a credential file) contains no plaintext email
    expect(JSON.stringify(identityObject)).not.toContain(email)

    // And the identity field is present and non-empty — the identity is obscured, not absent
    expect(identityObject).toHaveProperty('identity')
    expect(identityObject.identity).toBeTruthy()
  })

  it('Each credential produces a unique identity token even for the same email address', () => {
    // Given a recipient with email "jane@example.com"
    const email = 'jane@example.com'

    // When two credentials are issued for the same email (two separate RecipientIdentity instances)
    const a = new RecipientIdentity(email)
    const b = new RecipientIdentity(email)

    const objectA = toIdentityObject(a)
    const objectB = toIdentityObject(b)

    // Then each has a salt field containing a hex string
    expect(objectA.salt).toMatch(/^[0-9a-f]+$/)
    expect(objectB.salt).toMatch(/^[0-9a-f]+$/)

    // And the two salts differ (each credential gets its own random salt)
    expect(objectA.salt).not.toBe(objectB.salt)

    // And the identity tokens differ (unique per credential, not per email)
    expect(objectA.identity).not.toBe(objectB.identity)

    // And each identity token is "sha256$" followed by a hex-encoded hash
    expect(objectA.identity).toMatch(/^sha256\$[0-9a-f]{64}$/)
    expect(objectB.identity).toMatch(/^sha256\$[0-9a-f]{64}$/)
  })
  it.todo('Two independently created identities for the same email produce different hashes')
  it.todo('Credential filename matches the identity hash used inside the credential')
})
