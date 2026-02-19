# GitHub Setup Checklist for Open Badges Issuance

Complete these steps after running the Claude Code prompt in your Hugo repo.
Work through them in order — each step depends on the previous one.

---

## Step 1: Generate your signing keys

Run the key generation script locally **once**. Never run it again — regenerating keys invalidates all previously issued badges.

```bash
cd scripts
npm install
node generate-keys.js
```

The script will output two things:

- **Private key** — a base64 string. Copy it now. You will need it in Step 2 and Step 4.
- **Public key JSON-LD** — a JSON document. Save this as `static/badges/keys/signing-key.json` in your repo.

Commit `static/badges/keys/signing-key.json` to git. Do **not** commit the private key anywhere.

---

## Step 2: Create a local .env file

In the root of your repo, create a `.env` file (it should already be gitignored):

```
BADGE_SIGNING_KEY=<paste your base64 private key here>
BADGE_ISSUER_URL=https://yoursite.netlify.app
BADGE_ISSUER_NAME=Your Organisation Name
```

This lets you run the issuance script locally for testing. Never commit this file.

---

## Step 3: Update your issuer profile

Open `static/badges/issuer.json` and replace all `ISSUER_URL` placeholders with your actual Netlify URL. Also fill in:

- `name` — your organisation name
- `url` — your site URL
- `email` — a contact email for badge-related queries

Commit this file to git.

---

## Step 4: Add GitHub repository secrets

Go to your repository on GitHub:
**Settings → Secrets and variables → Actions → New repository secret**

Add the following three secrets:

| Secret name | Value |
|---|---|
| `BADGE_SIGNING_KEY` | The base64 private key string from Step 1 |
| `BADGE_ISSUER_URL` | Your Netlify URL, e.g. `https://yoursite.netlify.app` |
| `BADGE_ISSUER_NAME` | Your organisation display name |

These are the only values the GitHub Actions workflow needs. They are never visible in logs.

---

## Step 5: Set workflow permissions

Go to your repository on GitHub:
**Settings → Actions → General → Workflow permissions**

Select **"Read and write permissions"** and save.

This allows the Badge Bot to commit signed credentials back to the repo after issuing them.

---

## Step 6: Generate your first badge achievement definition

For each badge type you want to issue, run:

```bash
node scripts/generate-achievement.js data/badges/your-badge.yaml
```

This creates `static/badges/achievements/your-badge.json`. Commit this file — it must be deployed to Netlify before badges can be issued, because the credential references it by URL.

---

## Step 7: Deploy to Netlify

Push your changes to main. Netlify will build and deploy:

- `static/badges/issuer.json` → served at `https://yoursite.netlify.app/badges/issuer.json`
- `static/badges/keys/signing-key.json` → served at `https://yoursite.netlify.app/badges/keys/signing-key.json`
- `static/badges/achievements/*.json` → served at `https://yoursite.netlify.app/badges/achievements/...`

Verify these URLs are accessible in a browser before issuing any badges. Credentials will reference these URLs and verification will fail if they don't resolve.

---

## Step 8: Issue your first badge

Edit `data/badges/your-badge.yaml` and add a recipient:

```yaml
recipients:
  - name: Jane Smith
    email: jane@example.com
    issued: 2026-02-19
```

Commit and push to main. GitHub Actions will:

1. Detect the change to the YAML file
2. Run `scripts/issue-badges.js`
3. Generate a signed credential at `data/issued/your-badge/{email-hash}.json`
4. Copy it to `static/badges/issued/your-badge/{email-hash}.json`
5. Commit both files back with message `"Issue badges [skip ci]"`

Netlify will then deploy the new credential file, making it publicly accessible at its verification URL.

---

## Step 9: Verify the workflow ran correctly

Go to **Actions** tab in your GitHub repository. You should see a workflow run triggered by your push. Check that it completed without errors.

After the bot commit lands, pull the latest changes locally:

```bash
git pull
```

You should see new files in `data/issued/` and `static/badges/issued/`.

---

## Step 10: Add the badge page to Hugo navigation

Add a link to `/badges/` in your Hugo navigation config so recipients can find the badge roster page.

---

## Ongoing: issuing more badges

For every new recipient, simply add a line to the relevant YAML file and push:

```yaml
  - name: New Person
    email: new@example.com
    issued: 2026-03-01
```

For each new badge *type*, you need to:
1. Create a new YAML file in `data/badges/`
2. Run `generate-achievement.js` to create the achievement JSON-LD
3. Add a badge image to `static/badges/images/`
4. Deploy to Netlify before issuing the first credential for that badge

---

## Troubleshooting

**Workflow fails with "Permission denied" on git push**
→ Check Step 5. Workflow permissions must be set to "Read and write".

**Credential verification fails**
→ Check that the `issuer.json` and `signing-key.json` URLs are publicly accessible. The `BADGE_ISSUER_URL` secret must match the deployed Netlify URL exactly (no trailing slash).

**Duplicate credentials being created**
→ The script is idempotent — it uses the email hash as a filename. If you see duplicates, check that `BADGE_ISSUER_URL` hasn't changed between runs (a URL change changes the credential `id` which could confuse some tools, though the script itself won't re-issue).

**Workflow triggers but no new credentials are committed**
→ All recipients in the YAML already have credentials. This is expected and correct behaviour.
