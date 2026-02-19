#!/usr/bin/env bash
# Add a new badge recipient and trigger issuance.
# Usage: ./add-recipient.sh <badge-id> "<name>" <email> [issued-date]
#
# Badge IDs: accredited-facilitator, fellow, master, practitioner, depressed
# Example:   ./add-recipient.sh accredited-facilitator "Jane Smith" jane@example.com

set -euo pipefail

cd "$(dirname "$0")/scripts"
node --env-file=../.env add-recipient.js "$@"
