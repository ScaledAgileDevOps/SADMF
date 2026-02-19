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
