#!/usr/bin/env node
// Converts Cookie-Editor JSON export → Playwright storage state format.
// Usage: node scripts/linkedin-audit/convert-cookies.js

const fs = require('fs');
const path = require('path');

const inputPath = path.join(process.cwd(), 'linkedin-cookies.json');
const outputPath = path.join(process.cwd(), 'linkedin-storage-state.json');

if (!fs.existsSync(inputPath)) {
  console.error('Error: linkedin-cookies.json not found in project root.');
  console.error('Follow scripts/linkedin-audit/cookies-guide.md to export your cookies first.');
  process.exit(1);
}

let rawCookies;
try {
  rawCookies = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
} catch (e) {
  console.error('Error: linkedin-cookies.json is not valid JSON.', e.message);
  process.exit(1);
}

if (!Array.isArray(rawCookies)) {
  console.error('Error: linkedin-cookies.json must be an array of cookie objects.');
  process.exit(1);
}

function mapSameSite(val) {
  if (!val) return 'Lax';
  const v = val.toLowerCase();
  if (v === 'strict') return 'Strict';
  if (v === 'none' || v === 'no_restriction') return 'None';
  return 'Lax';
}

const cookies = rawCookies.map(c => ({
  name: c.name,
  value: c.value,
  domain: c.domain,
  path: c.path || '/',
  expires: typeof c.expirationDate === 'number' ? Math.round(c.expirationDate) : -1,
  httpOnly: c.httpOnly || false,
  secure: c.secure || false,
  sameSite: mapSameSite(c.sameSite),
}));

const storageState = { cookies, origins: [] };

fs.writeFileSync(outputPath, JSON.stringify(storageState, null, 2));
console.log(`Done. Wrote ${cookies.length} cookies to linkedin-storage-state.json`);
