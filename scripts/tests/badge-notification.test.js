import { describe, it, expect, vi } from 'vitest'
import { BadgeIssuer } from '../application/badge-issuer.js'
import { fixtures } from './helpers/fixtures.js'

// Scenarios from scripts/features/badge-notification.feature

function makeDeps(overrides = {}) {
  return {
    loader: {
      loadAll: vi.fn().mockResolvedValue([
        { ...fixtures.badgeDefinition({ badge_id: 'practitioner', name: 'Practitioner' }), recipients: [fixtures.recipient()] },
      ]),
    },
    store: {
      exists: vi.fn().mockReturnValue(false),
      write: vi.fn(),
    },
    signer: {
      sign: vi.fn().mockResolvedValue('header.payload.sig'),
    },
    notifier: {
      notify: vi.fn(),
    },
    issuerUrl: 'https://example.com',
    issuerName: 'Test Issuer',
    ...overrides,
  }
}

describe('Badge issuance notifications', () => {
  it('Notifier is called once per newly issued credential', async () => {
    // Given a badge definition with a new recipient and a configured notifier
    const deps = makeDeps()

    // When the badge issuer runs
    await new BadgeIssuer(deps).run()

    // Then the notifier is called once with the correct arguments
    expect(deps.notifier.notify).toHaveBeenCalledOnce()
    const call = deps.notifier.notify.mock.calls[0]
    expect(call[0]).toBe('Jane Smith')          // recipientName
    expect(call[1]).toBe('jane@example.com')    // recipientEmail
    expect(call[2]).toBe('Practitioner')         // badgeName
    expect(call[3]).toBe('practitioner')         // badgeId
    expect(typeof call[4]).toBe('string')        // hash
    expect(call[5]).toBe('https://example.com') // issuerUrl
  })

  it('Notifier is not called when a credential is skipped', async () => {
    // Given a credential already exists for the recipient
    const deps = makeDeps({
      store: { exists: vi.fn().mockReturnValue(true), write: vi.fn() },
    })

    // When the badge issuer runs
    await new BadgeIssuer(deps).run()

    // Then the notifier is not called
    expect(deps.notifier.notify).not.toHaveBeenCalled()
  })

  it('Notifier failure is non-fatal — credential is still written', async () => {
    // Given a notifier that throws
    const deps = makeDeps({
      notifier: { notify: vi.fn().mockImplementation(() => { throw new Error('SMTP down') }) },
    })

    // When the badge issuer runs
    const result = await new BadgeIssuer(deps).run()

    // Then the credential is still written and the run reports no errors
    expect(deps.store.write).toHaveBeenCalledOnce()
    expect(result.issued).toBe(1)
    expect(result.errors).toBe(0)
  })

  it('Badge issuer works with no notifier configured', async () => {
    // Given no notifier is provided
    const deps = makeDeps({ notifier: null })

    // When the badge issuer runs
    const result = await new BadgeIssuer(deps).run()

    // Then the credential is written and the run exits successfully
    expect(deps.store.write).toHaveBeenCalledOnce()
    expect(result.issued).toBe(1)
    expect(result.errors).toBe(0)
  })
})
