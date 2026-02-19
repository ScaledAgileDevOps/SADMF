// Shared test fixtures and factories.
// Import these in test files to avoid duplicating setup logic.

export const fixtures = {
  badgeDefinition(overrides = {}) {
    return {
      badge_id: 'practitioner',
      name: 'Practitioner',
      description: 'Awarded to those who have demonstrated foundational knowledge and practice.',
      criteria: 'Complete the practitioner assessment with a passing score.',
      image: '/badges/images/practitioner.png',
      recipients: [],
      ...overrides,
    }
  },

  recipient(overrides = {}) {
    return {
      name: 'Jane Smith',
      email: 'jane@example.com',
      issued: '2026-02-19',
      ...overrides,
    }
  },

  // Returns a real Ed25519 key pair for use in signing tests.
  // Requires jose to be installed. Returns { privateKey, publicKey } as JWK objects.
  async signingKeyPair() {
    const { generateKeyPair } = await import('jose')
    return generateKeyPair('EdDSA', { crv: 'Ed25519' })
  },
}
