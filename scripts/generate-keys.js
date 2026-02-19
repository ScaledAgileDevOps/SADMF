#!/usr/bin/env node
// One-time script: generates an Ed25519 key pair for badge signing.
// Run this once and follow the checklist printed at the end.
//
// Usage: node scripts/generate-keys.js

import { generateKeyPair, exportJWK } from 'jose'

const { privateKey, publicKey } = await generateKeyPair('EdDSA', { crv: 'Ed25519' })

const privateJwk = await exportJWK(privateKey)
const publicJwk = await exportJWK(publicKey)

const privateB64 = Buffer.from(JSON.stringify(privateJwk)).toString('base64')

// ISSUER_URL must be replaced with your live Netlify URL.
const ISSUER_URL = process.env.BADGE_ISSUER_URL ?? 'ISSUER_URL'

const signingKeyDoc = {
  '@context': 'https://w3id.org/security/v1',
  id: `${ISSUER_URL}/badges/keys/signing-key.json`,
  type: 'CryptographicKey',
  owner: `${ISSUER_URL}/badges/issuer.json`,
  publicKeyJwk: publicJwk,
}

console.log('='.repeat(60))
console.log('PRIVATE KEY (base64-encoded JWK) — NEVER COMMIT THIS')
console.log('='.repeat(60))
console.log(privateB64)
console.log()
console.log('='.repeat(60))
console.log('PUBLIC KEY DOCUMENT — save to static/badges/keys/signing-key.json')
console.log('='.repeat(60))
console.log(JSON.stringify(signingKeyDoc, null, 2))
console.log()
console.log('='.repeat(60))
console.log('NEXT STEPS')
console.log('='.repeat(60))
console.log('1. Copy the private key above into a GitHub Secret named BADGE_SIGNING_KEY')
console.log('2. Add it to a local .env file as: BADGE_SIGNING_KEY=<value>')
console.log('   (The .env file is git-ignored — never commit it)')
console.log('3. Save the public key JSON to static/badges/keys/signing-key.json')
console.log('4. Replace ISSUER_URL in issuer.json and signing-key.json with your live site URL')
console.log('5. Set BADGE_ISSUER_URL and BADGE_ISSUER_NAME as GitHub Secrets')
console.log('6. Commit static/badges/keys/signing-key.json and push')
console.log('7. Deploy to Netlify — achievement files and the key document must be live')
console.log('   before the first credential can be issued')
