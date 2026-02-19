import { describe, it } from 'vitest'

// Scenarios from scripts/features/recipient-privacy.feature
// Implement one scenario at a time. Read PROGRESS.md to find the next one.

describe('Recipient email privacy', () => {
  it.todo('Email address is never stored in plaintext in a credential file')
  it.todo('Each credential produces a unique identity token even for the same email address')
  it.todo('Two independently created identities for the same email produce different hashes')
  it.todo('Credential filename matches the identity hash used inside the credential')
})
