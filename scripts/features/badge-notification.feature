Feature: Badge issuance notifications
  As a badge issuer
  I want recipients to be notified when their credential is issued
  So that they can download and share their badge

  Scenario: Notifier is called once per newly issued credential
    Given a badge definition for "Practitioner" with a recipient "jane@example.com"
    And no credential has been previously issued for "jane@example.com" under "practitioner"
    And a notifier is configured
    When the badge issuer runs
    Then the notifier is called once with the recipient name, email, badge name, badge id, hash, and issuer URL

  Scenario: Notifier is not called when a credential is skipped
    Given a badge definition for "Practitioner" with a recipient "jane@example.com"
    And a credential already exists for "jane@example.com" under "practitioner"
    And a notifier is configured
    When the badge issuer runs
    Then the notifier is not called

  Scenario: Notifier failure is non-fatal — credential is still written
    Given a badge definition for "Practitioner" with a recipient "jane@example.com"
    And no credential has been previously issued for "jane@example.com" under "practitioner"
    And a notifier that throws an error
    When the badge issuer runs
    Then the credential is still written
    And the run reports 1 issued and 0 errors

  Scenario: Badge issuer works with no notifier configured
    Given a badge definition for "Practitioner" with a recipient "jane@example.com"
    And no credential has been previously issued for "jane@example.com" under "practitioner"
    And no notifier is configured
    When the badge issuer runs
    Then the credential is written and the run exits successfully
