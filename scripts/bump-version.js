#!/usr/bin/env node
/**
 * Bumps the patch version in package.json, package-lock.json, and data/version.json.
 * Called by .githooks/post-commit after each non-version-bump commit.
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const pkgPath  = resolve(root, 'package.json');
const lockPath = resolve(root, 'package-lock.json');
const dataPath = resolve(root, 'data', 'version.json');

const pkg  = JSON.parse(readFileSync(pkgPath,  'utf8'));
const lock = JSON.parse(readFileSync(lockPath, 'utf8'));

const [major, minor, patch] = pkg.version.split('.').map(Number);
const newVersion = `${major}.${minor}.${patch + 1}`;

pkg.version = newVersion;

lock.version = newVersion;
if (lock.packages && lock.packages['']) {
  lock.packages[''].version = newVersion;
}

const data = { version: newVersion };

writeFileSync(pkgPath,  JSON.stringify(pkg,  null, 2) + '\n');
writeFileSync(lockPath, JSON.stringify(lock, null, 2) + '\n');
writeFileSync(dataPath, JSON.stringify(data, null, 2) + '\n');

process.stdout.write(newVersion + '\n');
