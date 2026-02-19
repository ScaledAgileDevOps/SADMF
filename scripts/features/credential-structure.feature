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
