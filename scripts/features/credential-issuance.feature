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
