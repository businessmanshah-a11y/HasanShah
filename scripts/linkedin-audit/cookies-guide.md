# LinkedIn Cookie Export Guide

Follow these steps once before running the audit. You only need to redo this
if your LinkedIn session expires (usually every 30–60 days).

---

## Step 1: Install Cookie-Editor

Install the **Cookie-Editor** extension for your browser:
- Chrome: https://chrome.google.com/webstore/detail/cookie-editor/hlkenndednhfkekhgcdicdfddnkalmdm
- Firefox: https://addons.mozilla.org/en-US/firefox/addon/cookie-editor/

---

## Step 2: Log into LinkedIn

Open https://www.linkedin.com and make sure you are fully logged in.

---

## Step 3: Export Cookies

1. Click the Cookie-Editor icon in your browser toolbar.
2. Click **Export** (bottom-right of the popup).
3. Select **Export as JSON**.
4. The JSON is now copied to your clipboard.

---

## Step 4: Save to Project

Paste the clipboard contents into a new file at the project root:

```
HasanShah/linkedin-cookies.json
```

The file should start with `[` and end with `]`.

---

## Step 5: Run the Converter

```bash
cd /Users/infinite/HasanShah
node scripts/linkedin-audit/convert-cookies.js
```

Expected output:
```
Done. Wrote N cookies to linkedin-storage-state.json
```

---

## Step 6: Run the Audit Agent

```bash
claude --mcp-config .mcp.json "$(cat scripts/linkedin-audit/agent-prompt.md)"
```

The agent will open a browser, visit your LinkedIn profile pages, and write
the report to `docs/linkedin-audit/linkedin-audit-YYYY-MM-DD.md`.

---

## Security Note

`linkedin-cookies.json` and `linkedin-storage-state.json` are in `.gitignore`
and will never be committed to git. Delete them when you're done.
