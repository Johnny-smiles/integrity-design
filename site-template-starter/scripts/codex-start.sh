#!/usr/bin/env bash
set -e

# ─────────────────────────────────────────────────────────────
# 1️⃣  Parse arguments
# Example:
#   bash site-template-starter/scripts/codex-start.sh \
#     --slug beyond-heating --intake site-template-starter/intake/client-1.yaml

while [[ "$#" -gt 0 ]]; do
  case $1 in
    --slug) SLUG="$2"; shift ;;
    --intake) INTAKE="$2"; shift ;;
    *) echo "Unknown parameter: $1" && exit 1 ;;
  esac
  shift
done

if [[ -z "$SLUG" || -z "$INTAKE" ]]; then
  echo "Usage: $0 --slug <folder-slug> --intake <path/to/client.yaml>"
  exit 1
fi

OUT_DIR="../client-$SLUG"
echo "🔁 Duplicating template into: $OUT_DIR"

# ─────────────────────────────────────────────────────────────
# 2️⃣  Duplicate site template
bash site-template-starter/scripts/duplicate.sh \
  --out "$OUT_DIR" \
  --intake "$INTAKE" \
  --init-git

# ─────────────────────────────────────────────────────────────
# 3️⃣  Install dependencies
echo "📦 Installing dependencies..."
cd "$OUT_DIR"
npm i --silent

# ─────────────────────────────────────────────────────────────
# 4️⃣  Kick off Codex
echo "🤖 Launching Codex to generate the new site..."
codex run "Use site-template-starter/codex.md as the runbook with $INTAKE. Run site-template-starter/scripts/setup.sh using intake values. Pick varied hero/services from site-template-starter/catalog/sections.json. Generate Home + 3–5 Service pages from prompts/home.md and prompts/service.md, plus FAQs from prompts/faq.md. Add LocalBusiness JSON-LD on Home and Service JSON-LD on each service page. Update nav/footer links, ensure public/logo.png is referenced, verify with npm run dev, then create and push a branch client/$SLUG." \
  --model gpt-5-codex \
  --temperature 0.3 \
  --max-tokens 20000
