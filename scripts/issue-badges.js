#!/usr/bin/env node
// CLI entry point — thin wrapper over BadgeIssuer.
// All business logic lives in application/ and domain/ layers.
// This file only wires up the infrastructure adapters and runs the issuer.

import { YamlBadgeDefinitionLoader } from './infrastructure/yaml-badge-loader.js'
import { FileCredentialStore } from './infrastructure/file-credential-store.js'
import { JoseCredentialSigner } from './infrastructure/jose-signer.js'
import { BadgeIssuer } from './application/badge-issuer.js'

const signer = await JoseCredentialSigner.create()

const issuer = new BadgeIssuer({
  loader: new YamlBadgeDefinitionLoader(),
  store: new FileCredentialStore(),
  signer,
  issuerUrl: process.env.BADGE_ISSUER_URL,
  issuerName: process.env.BADGE_ISSUER_NAME,
})

issuer.run()
  .then(({ issued, skipped }) => {
    console.log(`Done. Issued: ${issued}, Skipped: ${skipped}`)
  })
  .catch(err => {
    console.error(err.message)
    process.exit(1)
  })
