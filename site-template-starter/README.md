# Site Template Starter (Updated)

## Quick start
1. Place client logo at `public/logo.png` (optional OG image at `public/og-image.jpg`).
2. Edit `site-template-starter/intake/client.yaml`.
3. Run:
   ```bash
   bash ./site-template-starter/scripts/setup.sh
   npm i
   npm run dev
   ```

```md
### Duplicate into a new client folder
```bash
bash site-template-starter/scripts/duplicate.sh \
  --out "./client-<slug>" \
  --intake "site-template-starter/intake/client.yaml" \
  --init-git
cd "./client-<slug>"
npm i
npm run dev

## Tokenize (one-time on original project)
```bash
bash ./site-template-starter/scripts/tokenize.sh
```

## Codex one-liner
```bash
codex run "Use ./site-template-starter/codex.md as runbook with ./site-template-starter/intake/client.yaml. Run setup.sh, pick layouts from catalog/sections.json, generate copy from prompts, wire JSON-LD, update nav/footer, then commit on branch client/<slug>."
```
