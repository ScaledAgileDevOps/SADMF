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

  it.todo('Each credential produces a unique identity token even for the same email address')
  it.todo('Two independently created identities for the same email produce different hashes')
  it.todo('Credential filename matches the identity hash used inside the credential')
})
