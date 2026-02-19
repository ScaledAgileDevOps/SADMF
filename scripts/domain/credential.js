// Builds an Open Badges 3.0 OpenBadgeCredential plain object.
// Pure function — no I/O, no signing. Takes explicit inputs; returns a credential object.
// issuanceDate must be an ISO 8601 date string (e.g. "2026-02-19").
export function buildCredential({ badgeId, badgeName, recipientHash, recipientIdentityObject, issuerUrl, issuerName, issuanceDate }) {
  return {
    '@context': [
      'https://www.w3.org/2018/credentials/v1',
      'https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json',
    ],
    type: ['VerifiableCredential', 'OpenBadgeCredential'],
    id: `${issuerUrl}/badges/issued/${badgeId}/${recipientHash}.json`,
    issuer: {
      id: `${issuerUrl}/badges/issuer.json`,
      type: 'Profile',
      name: issuerName,
    },
    issuanceDate,
    credentialSubject: {
      type: 'AchievementSubject',
      identifier: recipientIdentityObject,
      achievement: {
        id: `${issuerUrl}/badges/achievements/${badgeId}.json`,
        type: 'Achievement',
        name: badgeName,
      },
    },
  }
}
