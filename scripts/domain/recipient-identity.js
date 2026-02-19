import { createHash, randomBytes } from 'node:crypto'

// Value Object: an email address anonymised at construction time.
// The raw email is never stored — only the hash and salt are retained.
//
// Equality: two RecipientIdentity instances created from the same email are intentionally
// unequal because each uses a fresh random salt. This is by design — it prevents
// correlation across separately issued credentials. Equals() is therefore not implemented.
export class RecipientIdentity {
  #hash
  #salt

  constructor(email) {
    this.#salt = randomBytes(16).toString('hex')
    this.#hash = createHash('sha256').update(`${this.#salt}:${email}`).digest('hex')
  }

  get hash() {
    return this.#hash
  }

  get salt() {
    return this.#salt
  }
}
