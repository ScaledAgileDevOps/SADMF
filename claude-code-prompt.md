# Claude Code Prompt: Hugo Open Badges 3.0 Issuance System

Paste this entire prompt into Claude Code at the root of your Hugo repository.

---

## How to use this prompt

This prompt is designed for incremental, one-scenario-at-a-time delivery with a clean context between scenarios.

**Starting a new session:**

1. Read `scripts/PROGRESS.md` to find the next incomplete scenario.
2. Read only the files relevant to that scenario (the feature file, the test file, and any source files it touches).
3. Complete the Red-Green-Refactor cycle for that scenario only.
4. Commit all changes.
5. Update `scripts/PROGRESS.md` to mark the scenario complete.
6. Use `/compact` or start a new Claude Code session for the next scenario.

**Never implement more than one scenario per session.** If a scenario requires creating a new module, create only what that scenario needs — do not pre-build infrastructure for future scenarios.

**Resuming after a context reset:** Claude Code will read `PROGRESS.md` and the relevant committed files from git. The git history is the source of truth for what has been built.

---

I need to build an automated Open Badges 3.0 issuance system for a Hugo site deployed on Netlify. Badge issuance should be triggered automatically by a GitHub Actions workflow when recipient YAML files are updated and pushed to the main branch.

## Project context

- Hugo static site with standard Hugo directory structure
- Deployed to Netlify from a GitHub repository
- Badges must be compliant with the Open Badges 3.0 specification (1EdTech / IMS Global)
- Signed credentials should be stored in the repo so Hugo can render them as static pages
- Single-maintainer project — one person adds recipients by editing YAML files
- There are three badge levels representing a progression: **Practitioner**, **Fellow**, and **Accredited Facilitator**. A person may hold multiple levels simultaneously.

---

## Development methodology: ATDD with BDD

Follow Acceptance Test-Driven Development using Behaviour-Driven Development practices. Work **one scenario at a time** in strict Red-Green-Refactor cycles:

1. **Read `scripts/PROGRESS.md`** — identify the next incomplete scenario. Work only on that scenario this session.
2. **Write the Gherkin scenario** (if not already written) — the scenario is the executable specification.
3. **Write one failing vitest test** — translate the scenario into a vitest `it` block. Run `npm test` and confirm it fails before writing any implementation.
4. **Write the minimum code to make the test pass** — implement only what the failing test requires. Do not anticipate future scenarios.
5. **Refactor** — clean up production code and the test while keeping all tests green.
6. **Commit** — `git add` and `git commit` with the scenario name as the commit message subject.
7. **Update `scripts/PROGRESS.md`** — mark the scenario complete with the commit hash.
8. **Stop** — signal to the user that this scenario is done and the context should be cleared before the next one.

Do not write implementation code before you have a failing test. Do not implement more than one scenario per session. If a scenario cannot be tested, stop and note the gap.

---

## Domain model (Domain-Driven Design)

The domain is **Badge Credential Issuance**. Model it with the following structure before writing any code:

**Entities**
- `Credential` — an issued Open Badges 3.0 OpenBadgeCredential. Has identity: its `id` URL. Mutable only through issuance; never mutated after signing.

**Value Objects**
- `RecipientIdentity` — an email address hashed with a random salt. Immutable. Encapsulates the SHA-256 hashing logic and the `IdentityObject` JSON-LD structure.
- `BadgeDefinition` — parsed from a YAML file. Immutable. Encapsulates badge metadata (id, name, description, criteria, image, recipients list).
- `IssuanceDate` — an ISO 8601 date string validated at construction.

**Domain Services**
- `CredentialBuilder` — constructs a `Credential` value from a `BadgeDefinition`, `RecipientIdentity`, and issuer configuration. Contains no I/O.
- `CredentialSigner` — signs a `Credential` using EdDSA (Ed25519). Returns a signed credential. Contains no I/O.

**Application Service**
- `BadgeIssuer` — orchestrates the full issuance flow. Reads badge definitions, checks for existing credentials, invokes domain services for new recipients, and delegates persistence to infrastructure ports.

**Infrastructure (adapters)**
- `YamlBadgeDefinitionLoader` — loads `BadgeDefinition` objects from YAML files (implements a `BadgeDefinitionPort`)
- `FileCredentialStore` — reads and writes credential JSON files (implements a `CredentialStorePort`)
- `JoseCredentialSigner` — implements `CredentialSigner` using the `jose` npm library

**Ports (interfaces documented as JSDoc)**
- `BadgeDefinitionPort` — `loadAll(): Promise<BadgeDefinition[]>`
- `CredentialStorePort` — `exists(badgeId, hash): boolean`, `write(badgeId, hash, credential): void`

---

## Directory structure

Create the following structure. Add a `.gitkeep` file to empty directories so they are tracked by git:

```
data/
  badges/               # Badge definition YAML files (one per badge type)
  issued/               # Output: signed JSON-LD credentials, gitkeep only
static/
  badges/
    issuer.json         # OB 3.0 issuer profile (JSON-LD)
    keys/
      signing-key.json  # Public key document (JSON-LD)
    achievements/       # BadgeClass definition JSON-LD files, one per badge
    images/             # Badge PNG images (placeholder only)
    issued/             # Copy destination for serving credentials via Hugo/Netlify
scripts/
  domain/
    credential.js           # Credential value object and CredentialBuilder
    recipient-identity.js   # RecipientIdentity value object (email hashing)
    badge-definition.js     # BadgeDefinition value object
  application/
    badge-issuer.js         # BadgeIssuer application service (orchestration)
  infrastructure/
    yaml-badge-loader.js    # YamlBadgeDefinitionLoader (implements BadgeDefinitionPort)
    file-credential-store.js # FileCredentialStore (implements CredentialStorePort)
    jose-signer.js          # JoseCredentialSigner (implements CredentialSigner)
  features/
    credential-issuance.feature
    credential-structure.feature
    recipient-privacy.feature
    key-signing.feature
  tests/
    credential-issuance.test.js
    credential-structure.test.js
    recipient-privacy.test.js
    key-signing.test.js
    helpers/
      fixtures.js           # Shared test fixtures and factories
  issue-badges.js           # CLI entry point — thin wrapper over BadgeIssuer
  generate-keys.js          # One-time key pair generation utility
  generate-achievement.js   # One-time achievement JSON-LD generator
  package.json
  vitest.config.js
.github/
  workflows/
    issue-badges.yml
```

---

## Step 1: Write Gherkin feature files

Write all four feature files before writing any test or implementation code. These files are the authoritative specification.

### `scripts/features/credential-issuance.feature`

```gherkin
Feature: Badge credential issuance
  As a badge issuer
  I want to issue Open Badges 3.0 credentials to recipients listed in badge YAML files
  So that recipients have verifiable, cryptographically signed proof of their achievement

  Scenario: Issue a credential to a new recipient
    Given a badge definition for "Practitioner" with a recipient "jane@example.com" issued on "2026-02-19"
    And no credential has been previously issued for "jane@example.com" under "practitioner"
    When the badge issuer runs
    Then a signed credential file is written under "data/issued/practitioner/"
    And the credential is copied to "static/badges/issued/practitioner/"
    And the run exits with code 0

  Scenario: Skip a recipient who already has a credential
    Given a badge definition for "Practitioner" with a recipient "jane@example.com" issued on "2026-02-19"
    And a credential already exists for "jane@example.com" under "practitioner"
    When the badge issuer runs
    Then no new credential file is written
    And a skip message is logged for "jane@example.com"
    And the run exits with code 0

  Scenario: Issue credentials for multiple badge levels independently
    Given "jane@example.com" holds both "Practitioner" and "Fellow" badges
    And no credentials have been previously issued
    When the badge issuer runs
    Then a credential is written under "data/issued/practitioner/"
    And a credential is written under "data/issued/fellow/"

  Scenario: Fail visibly when a credential cannot be signed
    Given a badge definition for "Practitioner" with a recipient "jane@example.com" issued on "2026-02-19"
    And the BADGE_SIGNING_KEY environment variable is not set
    When the badge issuer runs
    Then an error is logged
    And the run exits with a non-zero code
```

### `scripts/features/credential-structure.feature`

```gherkin
Feature: Open Badges 3.0 credential structure
  As a badge verifier
  I want issued credentials to conform to the OB 3.0 specification
  So that any OB 3.0-compliant verifier can process them

  Scenario: Credential includes required JSON-LD contexts
    Given a newly built credential for the "Practitioner" badge
    Then the @context array includes "https://www.w3.org/2018/credentials/v1"
    And the @context array includes "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json"

  Scenario: Credential declares required types
    Given a newly built credential for the "Practitioner" badge
    Then the type array includes "VerifiableCredential"
    And the type array includes "OpenBadgeCredential"

  Scenario: Credential id is a resolvable URL derived from badge id and email hash
    Given a newly built credential for the "Practitioner" badge with recipient hash "abc123"
    Then the credential id equals "{ISSUER_URL}/badges/issued/practitioner/abc123.json"

  Scenario: Credential subject achievement references the correct achievement URL
    Given a newly built credential for the "Practitioner" badge
    Then the credentialSubject achievement id equals "{ISSUER_URL}/badges/achievements/practitioner.json"
    And the achievement type is "Achievement"
    And the achievement name equals "Practitioner"

  Scenario: Credential issuer references the issuer profile URL
    Given a newly built credential
    Then the issuer id equals "{ISSUER_URL}/badges/issuer.json"
    And the issuer type is "Profile"

  Scenario: Credential issuance date matches the YAML issued field
    Given a badge definition with recipient issued on "2026-02-19"
    And a newly built credential for that recipient
    Then the issuanceDate equals "2026-02-19"
```

### `scripts/features/recipient-privacy.feature`

```gherkin
Feature: Recipient email privacy
  As a recipient
  I want my email address protected in all public credential files
  So that my identity is not exposed without my consent

  Scenario: Email address is never stored in plaintext in a credential file
    Given a recipient with email "jane@example.com"
    When a credential is issued for that recipient
    Then the credential file contains no plaintext occurrence of "jane@example.com"

  Scenario: Email is hashed with a per-credential random salt
    Given a recipient with email "jane@example.com"
    When a RecipientIdentity is created
    Then the identity object includes a "salt" field with a random hex value
    And the identity field is "sha256$" followed by the hex-encoded SHA-256 of (salt + email)

  Scenario: Two independently created identities for the same email produce different hashes
    Given a recipient with email "jane@example.com"
    When two RecipientIdentity objects are created independently
    Then their identity hashes differ

  Scenario: Credential filename matches the identity hash used inside the credential
    Given a recipient with email "jane@example.com"
    When a credential is issued
    Then the output filename (without extension) matches the identity hash field in the credential
```

### `scripts/features/key-signing.feature`

```gherkin
Feature: EdDSA credential signing
  As a badge verifier
  I want credentials signed with EdDSA (Ed25519)
  So that I can verify authenticity without trusting a central authority

  Scenario: A signed credential contains a compact JWS proof
    Given a valid Ed25519 signing key pair
    And a constructed credential object
    When the credential is signed
    Then the proof field is a compact JWS string (three dot-separated base64url segments)

  Scenario: The JWS proof can be verified with the corresponding public key
    Given a valid Ed25519 key pair
    And a credential signed with the private key
    When the proof is verified using the public key
    Then verification succeeds without error

  Scenario: Signing fails when BADGE_SIGNING_KEY is absent
    Given the BADGE_SIGNING_KEY environment variable is not set
    When the signer is initialised
    Then an error is thrown with a message indicating the missing key

  Scenario: Signing fails when BADGE_SIGNING_KEY is not a valid Ed25519 JWK
    Given BADGE_SIGNING_KEY is set to an invalid base64 string
    When the signer is initialised
    Then an error is thrown
```

---

## Step 2: Write failing vitest acceptance tests

Translate every Gherkin scenario into a vitest test in the corresponding `tests/*.test.js` file. Use `describe` blocks named after the Feature, and `it` blocks named after the Scenario. Use Given/When/Then as comments inside each test.

Run the tests immediately after writing them and confirm they all fail:

```bash
cd scripts && npm test
```

Do not proceed to Step 3 until every test is confirmed failing.

Use the helper module `tests/helpers/fixtures.js` for shared factories:
- `fixtures.badgeDefinition(overrides)` — returns a `BadgeDefinition`-shaped object
- `fixtures.recipient(overrides)` — returns a recipient object `{ name, email, issued }`
- `fixtures.signingKeyPair()` — generates a real Ed25519 key pair for tests (using `jose`)

Tests must use **real cryptography** (real `jose` calls, real SHA-256) — do not mock crypto primitives. Mock only I/O: file reads, file writes, environment variable access.

---

## Step 3: Badge definition YAML files

Create the following three files. These are the data source; they are not part of the domain model code.

`data/badges/practitioner.yaml`:

```yaml
badge_id: practitioner
name: Practitioner
description: Awarded to those who have demonstrated foundational knowledge and practice.
criteria: Complete the practitioner assessment with a passing score.
image: /badges/images/practitioner.png
recipients:
  - name: Jane Smith
    email: jane@example.com
    issued: 2026-02-19
```

`data/badges/fellow.yaml`:

```yaml
badge_id: fellow
name: Fellow
description: Awarded to those who have demonstrated advanced expertise and contribution.
criteria: Complete the fellow programme and peer review process.
image: /badges/images/fellow.png
recipients: []
```

`data/badges/accredited-facilitator.yaml`:

```yaml
badge_id: accredited-facilitator
name: Accredited Facilitator
description: Awarded to those who are accredited to deliver the programme to others.
criteria: Complete facilitator training and deliver at least one observed session.
image: /badges/images/accredited-facilitator.png
recipients: []
```

---

## Step 4: Implement domain and infrastructure (Red → Green)

Implement the domain model and infrastructure adapters one scenario at a time, in this order:

1. `domain/recipient-identity.js` — make `recipient-privacy.feature` tests pass first
2. `domain/badge-definition.js` — make `credential-structure.feature` (achievement/issuer fields) pass
3. `domain/credential.js` + `CredentialBuilder` — make `credential-structure.feature` tests pass
4. `infrastructure/jose-signer.js` — make `key-signing.feature` tests pass
5. `application/badge-issuer.js` + `infrastructure/file-credential-store.js` + `infrastructure/yaml-badge-loader.js` — make `credential-issuance.feature` tests pass

After each scenario turns green, run the full test suite to confirm no regressions.

### `domain/recipient-identity.js`

Export a `RecipientIdentity` class:
- Constructor takes `email` string
- Generates a random 16-byte hex salt on construction
- Computes `sha256(salt + email)` as a hex string (`identity`)
- Exposes `toIdentityObject()` returning the `IdentityObject` JSON-LD structure with `hashed: true`, `salt`, `identity: "sha256$<hash>"`, `identityType: "emailAddress"`, `type: "IdentityObject"`
- Exposes `hash` getter returning the hex hash (used as filename stem)
- Never exposes the raw email after construction

### `domain/badge-definition.js`

Export a `BadgeDefinition` class:
- Constructor takes the parsed YAML object
- Validates required fields: `badge_id`, `name`, `description`, `criteria`, `image`
- Exposes: `id`, `name`, `description`, `criteria`, `image`, `recipients` (array, default empty)
- `recipients` is an array of `{ name, email, issued }` plain objects

### `domain/credential.js`

Export a `CredentialBuilder` function (or class) that takes:
- `badgeDefinition: BadgeDefinition`
- `recipientIdentity: RecipientIdentity`
- `issuerUrl: string`
- `issuerName: string`

Returns a plain credential object conforming to the JSON-LD structure specified in Step 5.

Do not include any signing logic here — that belongs in `infrastructure/jose-signer.js`.

### `infrastructure/jose-signer.js`

Export a `JoseCredentialSigner` class:
- Constructor reads `BADGE_SIGNING_KEY` from `process.env`. Throws immediately if absent or unparseable.
- `sign(credential): Promise<string>` — signs the credential object as a compact JWS using `jose`'s `SignJWT` or `CompactSign`, algorithm `EdDSA`
- Returns the compact JWS string (the proof value)

### `infrastructure/file-credential-store.js`

Export a `FileCredentialStore` class implementing `CredentialStorePort`:
- `exists(badgeId, hash): boolean` — checks `data/issued/{badgeId}/{hash}.json`
- `write(badgeId, hash, credential): void` — writes to `data/issued/{badgeId}/{hash}.json` and copies to `static/badges/issued/{badgeId}/{hash}.json`, creating directories as needed

### `infrastructure/yaml-badge-loader.js`

Export a `YamlBadgeDefinitionLoader` class implementing `BadgeDefinitionPort`:
- `loadAll(): Promise<BadgeDefinition[]>` — reads all `.yaml` files from `data/badges/`, parses them with `js-yaml`, and returns an array of `BadgeDefinition` objects

### `application/badge-issuer.js`

Export a `BadgeIssuer` class:
- Constructor takes `{ loader, store, signer, issuerUrl, issuerName }`
- `run(): Promise<{ issued: number, skipped: number, errors: number }>` — orchestrates the full flow
- Logs clearly: `[SKIP]`, `[ISSUED]`, `[ERROR]` prefixes on each line
- Collects all errors and re-throws after processing all recipients if any errors occurred

### `issue-badges.js` (CLI entry point)

Thin wrapper only:

```js
import { YamlBadgeDefinitionLoader } from './infrastructure/yaml-badge-loader.js'
import { FileCredentialStore } from './infrastructure/file-credential-store.js'
import { JoseCredentialSigner } from './infrastructure/jose-signer.js'
import { BadgeIssuer } from './application/badge-issuer.js'

const issuer = new BadgeIssuer({
  loader: new YamlBadgeDefinitionLoader(),
  store: new FileCredentialStore(),
  signer: new JoseCredentialSigner(),
  issuerUrl: process.env.BADGE_ISSUER_URL,
  issuerName: process.env.BADGE_ISSUER_NAME,
})

issuer.run().catch(() => process.exit(1))
```

The credential JSON-LD structure must be:

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json"
  ],
  "type": ["VerifiableCredential", "OpenBadgeCredential"],
  "id": "{ISSUER_URL}/badges/issued/{badge-id}/{email-hash}.json",
  "issuer": {
    "id": "{ISSUER_URL}/badges/issuer.json",
    "type": "Profile",
    "name": "..."
  },
  "issuanceDate": "ISO 8601 date from YAML",
  "credentialSubject": {
    "type": "AchievementSubject",
    "identifier": {
      "type": "IdentityObject",
      "identityType": "emailAddress",
      "hashed": true,
      "salt": "random hex salt",
      "identity": "sha256${salted hash}"
    },
    "achievement": {
      "id": "{ISSUER_URL}/badges/achievements/{badge-id}.json",
      "type": "Achievement",
      "name": "badge name from YAML"
    }
  }
}
```

Read the following values from environment variables:
- `BADGE_SIGNING_KEY` — base64-encoded Ed25519 private key in JWK format
- `BADGE_ISSUER_URL` — the live Netlify site URL (e.g. `https://yoursite.netlify.app`)
- `BADGE_ISSUER_NAME` — the display name of the issuing organisation

---

## Step 5: Refactor

After all tests are green, refactor for clarity and clean code. Keep all tests green throughout.

- Each module should have a single responsibility
- No function should exceed 20 lines
- No module should import from another module at the same layer (domain must not import infrastructure)
- Remove any duplication between test helpers
- Ensure error messages are descriptive and actionable

---

## Step 6: Issuer profile

Create `static/badges/issuer.json` as a valid Open Badges 3.0 Profile JSON-LD document. Use `ISSUER_URL` as a placeholder string wherever the live site URL is needed (add a comment explaining this must be replaced before deployment or substituted at build time). Include:

- `@context` with the OB 3.0 context URL
- `id` pointing to `ISSUER_URL/badges/issuer.json`
- `type: "Profile"`
- `name`, `url`, `email` placeholder fields
- `publicKey` referencing `ISSUER_URL/badges/keys/signing-key.json`

---

## Step 7: Achievement definition generation

Create `scripts/generate-achievement.js` that reads a badge YAML file and writes a corresponding `static/badges/achievements/{badge-id}.json` file in valid OB 3.0 Achievement JSON-LD format. This script is run manually once per badge type, not as part of the automated workflow.

After creating the script, run it immediately for all three badge levels:

```bash
node scripts/generate-achievement.js data/badges/practitioner.yaml
node scripts/generate-achievement.js data/badges/fellow.yaml
node scripts/generate-achievement.js data/badges/accredited-facilitator.yaml
```

This produces:
- `static/badges/achievements/practitioner.json`
- `static/badges/achievements/fellow.json`
- `static/badges/achievements/accredited-facilitator.json`

All three files must be committed and deployed to Netlify before any credentials can be issued.

---

## Step 8: Key generation script

Create `scripts/generate-keys.js` that:

- Generates an Ed25519 key pair using the `jose` library (`generateKeyPair('EdDSA')`)
- Outputs the **private key** as a base64-encoded JWK string, with clear instructions to store this in a GitHub Secret named `BADGE_SIGNING_KEY` and in a local `.env` file for development — never commit it
- Outputs the **public key** as a complete JSON-LD document ready to save at `static/badges/keys/signing-key.json`, including `@context`, `id`, `type: "CryptographicKey"`, and the JWK public key material
- Prints a numbered checklist of next steps after running the script

---

## Step 9: GitHub Actions workflow

Create `.github/workflows/issue-badges.yml`:

```yaml
name: Issue Badges

on:
  push:
    branches: [main]
    paths:
      - 'data/badges/**.yaml'

jobs:
  issue:
    runs-on: ubuntu-latest
    permissions:
      contents: write

    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 2

      - uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        working-directory: scripts
        run: npm install

      - name: Run tests
        working-directory: scripts
        run: npm test

      - name: Issue new badges
        env:
          BADGE_SIGNING_KEY: ${{ secrets.BADGE_SIGNING_KEY }}
          BADGE_ISSUER_URL: ${{ secrets.BADGE_ISSUER_URL }}
          BADGE_ISSUER_NAME: ${{ secrets.BADGE_ISSUER_NAME }}
        run: node scripts/issue-badges.js

      - name: Commit issued credentials
        run: |
          git config user.name "Badge Bot"
          git config user.email "badge-bot@users.noreply.github.com"
          git add data/issued/ static/badges/issued/
          git diff --staged --quiet || git commit -m "Issue badges [skip ci]"
          git push
```

---

## Step 10: scripts/package.json

```json
{
  "name": "badge-issuer",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest",
    "test:coverage": "vitest run --coverage"
  },
  "dependencies": {
    "js-yaml": "^4.1.0",
    "jose": "^5.0.0"
  },
  "devDependencies": {
    "vitest": "^2.0.0"
  }
}
```

---

## Step 11: vitest.config.js

```js
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: false,
    environment: 'node',
    include: ['tests/**/*.test.js'],
  },
})
```

---

## Step 12: Hugo badge list template

Create `layouts/badges/list.html` that:

- Displays badges in a fixed progression order: **Practitioner** first, then **Fellow**, then **Accredited Facilitator** — not in the order `site.Data.issued` returns them. Hardcode this display order in the template.
- For each level, iterates over `site.Data.issued` to list all recipients who hold that badge
- For display name: reads the original badge YAML from `site.Data.badges` to look up recipient names by matching the email hash — include a comment explaining this lookup approach and its limitation (names must still be in the YAML)
- Shows for each recipient: their name, issuance date, and a "Verify" link pointing to the credential's hosted URL at `/badges/issued/{badge-id}/{email-hash}.json`
- Includes the badge image for each level, sourced from the badge YAML `image` field
- A person may appear under multiple levels if they hold more than one — this is expected and correct, do not deduplicate across levels

Also create `content/badges/_index.md` with front matter `title: "Badges"` and `layout: "list"` so Hugo generates the page.

---

## Step 13: .gitignore additions

Append the following to the project's `.gitignore`:

```
# Badge issuance
.env
scripts/node_modules/
```

---

## Technical constraints

- Private key must only be read from the `BADGE_SIGNING_KEY` environment variable — never hardcoded or logged
- All credential `id` URLs must resolve to real hosted files after Netlify deploys (they are written to `static/badges/issued/` which Netlify serves)
- The issuance script must be idempotent — safe to run multiple times without duplicating credentials
- Domain modules must not import infrastructure modules — dependency flows inward only
- `[skip ci]` in the bot commit message prevents the workflow from triggering itself infinitely

---

## Session 0: Bootstrap (run once before any scenario work)

In the first session only, do the following setup tasks. These are not scenarios — they have no failing tests. Commit after each task.

1. Create the directory structure (all directories, `.gitkeep` files)
2. Create the three badge YAML files (`data/badges/*.yaml`)
3. Create `scripts/package.json` and `scripts/vitest.config.js`
4. Run `npm install` in `scripts/`
5. Create all four Gherkin feature files in `scripts/features/`
6. Create empty test stubs in `scripts/tests/` — one `describe` block per feature file, no `it` blocks yet
7. Create `scripts/PROGRESS.md` (see format below)
8. Commit everything: `git commit -m "Bootstrap: directory structure, YAML data, feature files"`
9. Stop — do not implement any scenarios in this session

### `scripts/PROGRESS.md` format

```markdown
# Badge Issuance — Scenario Progress

## recipient-privacy.feature
- [ ] Email address is never stored in plaintext in a credential file
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
```

Work scenarios in the order listed above. After completing a scenario, replace `- [ ]` with `- [x] (commit: <short-hash>)`.

---

## Deliverables (per scenario session)

After completing each scenario session, output:

1. The scenario name and feature file
2. The failing test output (before implementation)
3. The passing test output (after implementation)
4. Every file created or modified, and which DDD layer it belongs to
5. The updated `PROGRESS.md` content
6. Confirmation that `git commit` succeeded and the commit hash

After all scenarios in all features are complete, additionally output:

1. The exact commands to run `generate-keys.js` and where to store each output
2. Confirmation that all three achievement definition files were generated
3. Any manual steps remaining before the first badge can be issued
