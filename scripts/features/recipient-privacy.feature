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
