import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname } from 'node:path'

/**
 * Infrastructure adapter: implements NotifierPort by appending notification
 * records to a JSON file. The file is consumed by send-notifications.js.
 *
 * @implements {import('./ports.js').NotifierPort}
 */
export class FileNotificationLog {
  #filePath

  /**
   * @param {string} [filePath] - Path to the notifications JSON file.
   *   Defaults to tmp/notifications.json. Injectable for testability.
   */
  constructor(filePath = 'tmp/notifications.json') {
    this.#filePath = filePath
  }

  /**
   * Appends a notification record to the log file.
   *
   * @param {string} recipientName
   * @param {string} recipientEmail
   * @param {string} badgeName
   * @param {string} badgeId
   * @param {string} hash
   * @param {string} issuerUrl
   */
  notify(recipientName, recipientEmail, badgeName, badgeId, hash, issuerUrl) {
    const record = { recipientName, recipientEmail, badgeName, badgeId, hash, issuerUrl, notifiedAt: new Date().toISOString() }

    mkdirSync(dirname(this.#filePath), { recursive: true })

    let records = []
    try {
      records = JSON.parse(readFileSync(this.#filePath, 'utf8'))
    } catch {
      // File does not exist yet — start with empty array
    }

    records.push(record)
    writeFileSync(this.#filePath, JSON.stringify(records, null, 2))
  }
}
