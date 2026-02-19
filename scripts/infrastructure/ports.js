/**
 * Port definitions for the badge issuance infrastructure layer.
 * Callers depend on these contracts, not on adapter implementations.
 * Swap any adapter by providing an object that satisfies the same interface.
 */

/**
 * @interface CredentialSigner
 * Signs a serializable credential payload and returns a compact JWS string.
 *
 * @method sign
 * @param {object} credential - A plain, JSON-serializable credential object.
 * @returns {Promise<string>} Compact JWS string per RFC 7515 §7.1.
 */

/**
 * @interface CredentialStorePort
 * Reads and writes signed credential files.
 *
 * @method exists
 * @param {string} badgeId
 * @param {string} hash
 * @returns {boolean}
 *
 * @method write
 * @param {string} badgeId
 * @param {string} hash
 * @param {object} credential
 * @returns {void}
 */

/**
 * @interface BadgeDefinitionPort
 * Loads badge definitions from an external source (e.g. YAML files).
 *
 * @method loadAll
 * @returns {Promise<Array<{badge_id: string, name: string, description: string, criteria: string, image: string, recipients: Array}>>}
 */

/**
 * @interface NotifierPort
 * Records a notification for a newly issued badge credential.
 *
 * @method notify
 * @param {string} recipientName
 * @param {string} recipientEmail
 * @param {string} badgeName
 * @param {string} badgeId
 * @param {string} hash
 * @param {string} issuerUrl
 * @returns {void}
 */
