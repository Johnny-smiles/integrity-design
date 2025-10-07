#!/usr/bin/env bash
set -euo pipefail

OUT=""
INTAKE="site-template-starter/intake/client.yaml"
INIT_GIT="false"
ASSETS_DIR=""
PRUNE_STARTER="false"   # NEW

while [[ $# -gt 0 ]]; do
  case "$1" in
    --out)          OUT="$2"; shift 2 ;;
    --intake)       INTAKE="$2"; shift 2 ;;
    --init-git)     INIT_GIT="true"; shift 1 ;;
    --assets)       ASSETS_DIR="$2"; shift 2 ;;
    --prune-starter) PRUNE_STARTER="true"; shift 1 ;;  # NEW
    *) echo "Unknown arg: $1" >&2; exit 1;;
  esac
done

if [[ -z "${OUT}" ]]; then
  echo "Missing --out ./client-<slug>" >&2
  exit 1
fi

mkdir -p "${OUT}"

# rsync copy (preserves modes, skips junk)
EXCLUDES=(
  ".git" ".gitignore.tmp" ".gitignore.bak*"
  "node_modules" ".nuxt" ".output" "dist"
  ".DS_Store"
)
# Optionally skip the starter itself
if [[ "${PRUNE_STARTER}" == "true" ]]; then
  EXCLUDES+=("site-template-starter")
fi

RSYNC_EX=()
for e in "${EXCLUDES[@]}"; do RSYNC_EX+=(--exclude "$e"); done

rsync -a "${RSYNC_EX[@]}" ./ "${OUT}/"

# Optional assets drop (logo/og/hero)
if [[ -n "${ASSETS_DIR}" && -d "${ASSETS_DIR}" ]]; then
  mkdir -p "${OUT}/public"
  for f in logo.png og-image.jpg hero.jpg favicon.png; do
    [[ -f "${ASSETS_DIR}/${f}" ]] && cp -f "${ASSETS_DIR}/${f}" "${OUT}/public/${f}"
  done
fi

# Optional: init a new git repo
if [[ "${INIT_GIT}" == "true" ]]; then
  ( cd "${OUT}" && git init -b main && git add . && git commit -m "chore: initial template copy" ) || true
fi

# Run setup in the new copy (only possible if starter copied); otherwise, run from original via path
if [[ -x "${OUT}/site-template-starter/scripts/setup.sh" ]]; then
  ( cd "${OUT}" && bash site-template-starter/scripts/setup.sh "${INTAKE}" )
else
  # starter not copied; call setup from original repo, but target the OUT dir
  bash site-template-starter/scripts/setup.sh "${INTAKE}" || true
fi

echo "✓ Duplicate & setup complete in ${OUT}"
echo "Next:"
echo "  cd ${OUT}"
echo "  npm i"
echo "  npm run dev"
