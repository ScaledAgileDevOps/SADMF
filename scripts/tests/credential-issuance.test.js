import { describe, it, expect, vi } from 'vitest'
import { BadgeIssuer } from '../application/badge-issuer.js'
import { fixtures } from './helpers/fixtures.js'

// Scenarios from scripts/features/credential-issuance.feature

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
    issuerUrl: 'https://example.com',
    issuerName: 'Test Issuer',
    ...overrides,
  }
}

describe('Badge credential issuance', () => {
  it('Issue a credential to a new recipient', async () => {
    // Given a badge definition with a recipient and no existing credential
    const deps = makeDeps()

    // When the badge issuer runs
    const issuer = new BadgeIssuer(deps)
    const result = await issuer.run()

    // Then a credential is signed and written
    expect(deps.signer.sign).toHaveBeenCalledOnce()
    expect(deps.store.write).toHaveBeenCalledOnce()
    expect(result.issued).toBe(1)
    expect(result.skipped).toBe(0)
    expect(result.errors).toBe(0)
  })

  it('Skip a recipient who already has a credential', async () => {
    // Given a badge definition with a recipient and an existing credential
    const deps = makeDeps({
      store: { exists: vi.fn().mockReturnValue(true), write: vi.fn() },
    })

    // When the badge issuer runs
    const result = await new BadgeIssuer(deps).run()

    // Then no new credential is written and the recipient is counted as skipped
    expect(deps.store.write).not.toHaveBeenCalled()
    expect(result.issued).toBe(0)
    expect(result.skipped).toBe(1)
  })

  it('Issue credentials for multiple badge levels independently', async () => {
    // Given jane@example.com holds both Practitioner and Fellow badges
    const recipient = fixtures.recipient()
    const deps = makeDeps({
      loader: {
        loadAll: vi.fn().mockResolvedValue([
          { ...fixtures.badgeDefinition({ badge_id: 'practitioner', name: 'Practitioner' }), recipients: [recipient] },
          { ...fixtures.badgeDefinition({ badge_id: 'fellow', name: 'Fellow' }), recipients: [recipient] },
        ]),
      },
    })

    // When the badge issuer runs
    const result = await new BadgeIssuer(deps).run()

    // Then a credential is written for each badge level independently
    expect(deps.store.write).toHaveBeenCalledTimes(2)
    expect(result.issued).toBe(2)
  })

  it('Fail visibly when a credential cannot be signed', async () => {
    // Given a signer that throws
    const deps = makeDeps({
      signer: { sign: vi.fn().mockRejectedValue(new Error('signing failed')) },
    })

    // When the badge issuer runs — then it rejects (exits with non-zero)
    await expect(new BadgeIssuer(deps).run()).rejects.toThrow()
  })
})
