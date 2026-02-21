#!/usr/bin/env bash
# Commit, push, and trigger badge issuance after a batch of --no-push additions.
# Usage: ./finalize-recipients.sh --workdir <dir> [--message <msg>]

set -euo pipefail

cd "$(dirname "$0")/scripts"
node --env-file=../.env finalize-recipients.js "$@"
