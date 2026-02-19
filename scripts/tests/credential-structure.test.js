import { describe, it, expect } from 'vitest'
import { buildCredential } from '../domain/credential.js'
import { fixtures } from './helpers/fixtures.js'

// Scenarios from scripts/features/credential-structure.feature
// Implement one scenario at a time. Read PROGRESS.md to find the next one.

describe('Open Badges 3.0 credential structure', () => {
  it('Credential includes required JSON-LD contexts', () => {
    // Given a newly built credential for the "Practitioner" badge
    const credential = buildCredential({
      badgeId: 'practitioner',
      badgeName: 'Practitioner',
      recipientHash: 'abc123',
      recipientIdentityObject: { type: 'IdentityObject', hashed: true, identity: 'sha256$abc123' },
      issuerUrl: 'https://example.com',
      issuerName: 'Test Issuer',
      issuanceDate: '2026-02-19',
    })

    // Then the @context array includes both required OB 3.0 context URLs
    expect(credential['@context']).toContain('https://www.w3.org/2018/credentials/v1')
    expect(credential['@context']).toContain('https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json')
  })

  it('Credential declares required types', () => {
    // Given a newly built credential
    const credential = buildCredential({
      badgeId: 'practitioner',
      badgeName: 'Practitioner',
      recipientHash: 'abc123',
      recipientIdentityObject: { type: 'IdentityObject', hashed: true, identity: 'sha256$abc123' },
      issuerUrl: 'https://example.com',
      issuerName: 'Test Issuer',
      issuanceDate: '2026-02-19',
    })

    // Then the type array includes both required OB 3.0 types
    expect(credential.type).toContain('VerifiableCredential')
    expect(credential.type).toContain('OpenBadgeCredential')
  })

  it('Credential id is a unique, resolvable URL that identifies the issued credential', () => {
    // Given a badge definition and a known recipient hash
    // When a credential is built with that hash
    const credential = buildCredential({
      badgeId: 'practitioner',
      badgeName: 'Practitioner',
      recipientHash: 'abc123',
      recipientIdentityObject: { type: 'IdentityObject', hashed: true, identity: 'sha256$abc123' },
      issuerUrl: 'https://example.com',
      issuerName: 'Test Issuer',
      issuanceDate: '2026-02-19',
    })

    // Then the credential id is the expected URL
    expect(credential.id).toBe('https://example.com/badges/issued/practitioner/abc123.json')
  })

  it('Credential subject achievement references the correct achievement URL', () => {
    // Given a badge definition for "Practitioner"
    const credential = buildCredential({
      badgeId: 'practitioner',
      badgeName: 'Practitioner',
      recipientHash: 'abc123',
      recipientIdentityObject: { type: 'IdentityObject', hashed: true, identity: 'sha256$abc123' },
      issuerUrl: 'https://example.com',
      issuerName: 'Test Issuer',
      issuanceDate: '2026-02-19',
    })

    // Then the achievement references the correct URL, type, and name
    expect(credential.credentialSubject.achievement.id).toBe('https://example.com/badges/achievements/practitioner.json')
    expect(credential.credentialSubject.achievement.type).toBe('Achievement')
    expect(credential.credentialSubject.achievement.name).toBe('Practitioner')
  })

  it('Credential issuer references the issuer profile URL', () => {
    // Given a known issuer URL and name
    const credential = buildCredential({
      badgeId: 'practitioner',
      badgeName: 'Practitioner',
      recipientHash: 'abc123',
      recipientIdentityObject: { type: 'IdentityObject', hashed: true, identity: 'sha256$abc123' },
      issuerUrl: 'https://example.com',
      issuerName: 'Test Issuer',
      issuanceDate: '2026-02-19',
    })

    // Then the issuer block points to the issuer profile
    expect(credential.issuer.id).toBe('https://example.com/badges/issuer.json')
    expect(credential.issuer.type).toBe('Profile')
  })

  it('Credential issuance date reflects the date the badge was awarded', () => {
    // Given a badge awarded on a specific date
    const credential = buildCredential({
      badgeId: 'practitioner',
      badgeName: 'Practitioner',
      recipientHash: 'abc123',
      recipientIdentityObject: { type: 'IdentityObject', hashed: true, identity: 'sha256$abc123' },
      issuerUrl: 'https://example.com',
      issuerName: 'Test Issuer',
      issuanceDate: '2026-02-19',
    })

    // Then the credential records that exact date
    expect(credential.issuanceDate).toBe('2026-02-19')
  })
})
