---
name: add-recipients
description: Add one or more badge recipients by running add-recipient.sh for each person
---

The user wants to add one or more badge recipients. They will provide a list of people with their name, email, and certification level.

Badge IDs map as follows:
- "accredited facilitator" or "facilitator" → `accredited-facilitator`
- "fellow" → `fellow`
- "master" → `master`
- "practitioner" → `practitioner`
- "depressed" → `depressed`

If the user has not yet provided the list of recipients, ask them to supply: name, email, and certification level for each person. Accept the list in any reasonable format (table, bullet list, CSV, etc.).

## Adding recipients (batch workflow — one commit for all)

Use this pattern to add all recipients with a single commit:

**Step 1 — clone the repo once:**
```bash
WORKDIR=$(mktemp -d)
cd "$(git rev-parse --show-toplevel)/scripts"
node --env-file=../.env -e "
  import { execSync } from 'node:child_process'
  const token = process.env.SADMF_DISPATCH_TOKEN
  const url = token ? \`https://\${token}@github.com/ScaledAgileDevOps/sadmf_recipents.git\` : 'https://github.com/ScaledAgileDevOps/sadmf_recipents.git'
  execSync(\`git clone --quiet \"\${url}\" \"$WORKDIR\"\`, { stdio: 'inherit' })
"
```

**Step 2 — add each recipient (no commit yet):**

For each recipient, run from the repository root:
```bash
./add-recipient.sh --workdir "$WORKDIR" --no-push <badge-id> "<name>" <email>
```

Run all of these in parallel (multiple Bash tool calls in a single message).

**Step 3 — commit, push, and dispatch once:**
```bash
./finalize-recipients.sh --workdir "$WORKDIR" --message "Add <N> practitioner recipients"
```

Use a descriptive commit message summarising the batch (e.g. "Add 11 practitioner recipients").

## Single-recipient shortcut

For a single recipient, the original one-step form still works:
```bash
./add-recipient.sh <badge-id> "<name>" <email>
```

## After running

Summarise which recipients were added successfully and flag any that failed.
