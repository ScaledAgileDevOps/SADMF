# Badge Issuance — Scenario Progress

Work scenarios in order. After completing each one, replace `- [ ]` with `- [x] (commit: <short-hash>)`.

## recipient-privacy.feature
- [x] Email address is never stored in plaintext in a credential file (commit: cd99563)
- [x] Email is hashed with a per-credential random salt (commit: 75f7484)
- [x] Two independently created identities for the same email produce different hashes (commit: 04927e2)
- [x] Credential filename matches the identity hash used inside the credential (commit: c39b159)

## credential-structure.feature
- [x] Credential includes required JSON-LD contexts (commit: edb84a9)
- [x] Credential declares required types (commit: edb84a9)
- [x] Credential id is a resolvable URL derived from badge id and email hash (commit: edb84a9)
- [x] Credential subject achievement references the correct achievement URL (commit: edb84a9)
- [x] Credential issuer references the issuer profile URL (commit: edb84a9)
- [x] Credential issuance date matches the YAML issued field (commit: edb84a9)

## credential-issuance.feature
- [x] Issue a credential to a new recipient (commit: 0f7e3c4)
- [x] Skip a recipient who already has a credential (commit: 0f7e3c4)
- [x] Issue credentials for multiple badge levels independently (commit: 0f7e3c4)
- [x] Fail visibly when a credential cannot be signed (commit: 0f7e3c4)

## key-signing.feature
- [x] A signed credential contains a compact JWS proof (commit: 0ed3d89)
- [x] The JWS proof can be verified with the corresponding public key (commit: 0ed3d89)
- [x] Signing fails when BADGE_SIGNING_KEY is absent (commit: 0ed3d89)
- [x] Signing fails when BADGE_SIGNING_KEY is not a valid Ed25519 JWK (commit: 0ed3d89)

## Session log

| Session | Scenario | Commit |
|---------|----------|--------|
| Bootstrap | Directory structure, YAMLs, feature files | 09f3b7a |
| 1 | Email address is never stored in plaintext in a credential file | cd99563 |
| 2 | Email is hashed with a per-credential random salt | 75f7484 |
| 3 | Two independently created identities produce different hashes | 04927e2 |
| 4 | Credential filename matches the identity hash | c39b159 |
| 5–10 | All credential-structure scenarios | edb84a9 |
| 11–14 | All key-signing scenarios | 0ed3d89 |
| 15–18 | All credential-issuance scenarios | 0f7e3c4 |
