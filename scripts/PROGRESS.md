# Badge Issuance — Scenario Progress

Work scenarios in order. After completing each one, replace `- [ ]` with `- [x] (commit: <short-hash>)`.

## recipient-privacy.feature
- [x] Email address is never stored in plaintext in a credential file (commit: cd99563)
- [ ] Email is hashed with a per-credential random salt
- [ ] Two independently created identities for the same email produce different hashes
- [ ] Credential filename matches the identity hash used inside the credential

## credential-structure.feature
- [ ] Credential includes required JSON-LD contexts
- [ ] Credential declares required types
- [ ] Credential id is a resolvable URL derived from badge id and email hash
- [ ] Credential subject achievement references the correct achievement URL
- [ ] Credential issuer references the issuer profile URL
- [ ] Credential issuance date matches the YAML issued field

## credential-issuance.feature
- [ ] Issue a credential to a new recipient
- [ ] Skip a recipient who already has a credential
- [ ] Issue credentials for multiple badge levels independently
- [ ] Fail visibly when a credential cannot be signed

## key-signing.feature
- [ ] A signed credential contains a compact JWS proof
- [ ] The JWS proof can be verified with the corresponding public key
- [ ] Signing fails when BADGE_SIGNING_KEY is absent
- [ ] Signing fails when BADGE_SIGNING_KEY is not a valid Ed25519 JWK

## Session log

| Session | Scenario | Commit |
|---------|----------|--------|
| Bootstrap | Directory structure, YAMLs, feature files | 09f3b7a |
| 1 | Email address is never stored in plaintext in a credential file | cd99563 |
