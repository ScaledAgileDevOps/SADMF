// Assembles the Open Badges 3.0 IdentityObject DTO from a RecipientIdentity domain object.
// Serialisation concerns (field names, OB spec types) belong here, not in the domain class.
const OB_HASH_PREFIX = 'sha256$'

export function toIdentityObject(recipientIdentity) {
  return {
    type: 'IdentityObject',
    identityType: 'emailAddress',
    hashed: true,
    salt: recipientIdentity.salt,
    identity: `${OB_HASH_PREFIX}${recipientIdentity.hash}`,
  }
}
