#!/usr/bin/env bash
set -euo pipefail

INTAKE="${1:-site-template-starter/intake/client.yaml}"
if [ ! -f "$INTAKE" ]; then
  echo "Intake YAML not found at $INTAKE"
  exit 1
fi

# require yq
if ! command -v yq >/dev/null 2>&1; then
  echo "yq is required. Install with: brew install yq"
  exit 1
fi

# Read values from intake
SITE_NAME=$(yq '.site.name' "$INTAKE")
SITE_URL=$(yq '.links.website // ("https://" + .site.domain)' "$INTAKE")
PHONE=$(yq '.site.phone' "$INTAKE")
PHONE_DISPLAY=$(yq '.site.phone_display // .site.phone' "$INTAKE")
EMAIL=$(yq '.site.email' "$INTAKE")
STREET=$(yq '.site.street' "$INTAKE")
CITY=$(yq '.site.city' "$INTAKE")
REGION=$(yq '.site.region' "$INTAKE")
POSTAL=$(yq '.site.postal' "$INTAKE")
COUNTRY=$(yq '.site.country' "$INTAKE")
HOURS=$(yq '.site.hours' "$INTAKE")
DESC=$(yq '.site.description' "$INTAKE")

PRIMARY=$(yq '.branding.colors.primary' "$INTAKE")
ACCENT=$(yq '.branding.colors.accent' "$INTAKE")
LIGHT=$(yq '.branding.colors.light' "$INTAKE")
GRAD_FROM=$(yq '.branding.colors.gradient_from' "$INTAKE")
GRAD_TO=$(yq '.branding.colors.gradient_to' "$INTAKE")

OG_IMAGE=$(yq '.assets.og_image' "$INTAKE")
LOGO=$(yq '.assets.logo' "$INTAKE")

# Patch site.config.ts
SITE_FILE="site.config.ts"
if [ -f "$SITE_FILE" ]; then
  cp "$SITE_FILE" "$SITE_FILE.bak-$(date +%s)"
  gsed -i "s#siteName: .*#siteName: \"${SITE_NAME}\",#g" "$SITE_FILE" 2>/dev/null || sed -i '' "s#siteName: .*#siteName: \"${SITE_NAME}\",#g" "$SITE_FILE"
  gsed -i "s#siteUrl:.*#siteUrl: '${SITE_URL}',#g" "$SITE_FILE" 2>/dev/null || sed -i '' "s#siteUrl:.*#siteUrl: '${SITE_URL}',#g" "$SITE_FILE"
  gsed -i "s#phone:.*#phone: '${PHONE}',#g" "$SITE_FILE" 2>/dev/null || sed -i '' "s#phone:.*#phone: '${PHONE}',#g" "$SITE_FILE"
  gsed -i "s#email:.*#email: '${EMAIL}',#g" "$SITE_FILE" 2>/dev/null || sed -i '' "s#email:.*#email: '${EMAIL}',#g" "$SITE_FILE"
  gsed -i "s#city: '.*'#city: '${CITY}'#g" "$SITE_FILE" 2>/dev/null || sed -i '' "s#city: '.*'#city: '${CITY}'#g" "$SITE_FILE"
  gsed -i "s#state: '.*'#state: '${REGION}'#g" "$SITE_FILE" 2>/dev/null || sed -i '' "s#state: '.*'#state: '${REGION}'#g" "$SITE_FILE"
  gsed -i "s#zip: '.*'#zip: '${POSTAL}'#g" "$SITE_FILE" 2>/dev/null || sed -i '' "s#zip: '.*'#zip: '${POSTAL}'#g" "$SITE_FILE"
  gsed -i "s#description: .*#description: \"${DESC}\",#g" "$SITE_FILE" 2>/dev/null || sed -i '' "s#description: .*#description: \"${DESC}\",#g" "$SITE_FILE"
  # theme colors
  gsed -i "s#primaryColor: '.*'#primaryColor: '${PRIMARY}'#g" "$SITE_FILE" 2>/dev/null || sed -i '' "s#primaryColor: '.*'#primaryColor: '${PRIMARY}'#g" "$SITE_FILE"
  gsed -i "s#accentColor: '.*'#accentColor: '${ACCENT}'#g" "$SITE_FILE" 2>/dev/null || sed -i '' "s#accentColor: '.*'#accentColor: '${ACCENT}'#g" "$SITE_FILE"
fi

# Patch robots.txt
if [ -f "public/robots.txt" ]; then
  cp public/robots.txt public/robots.txt.bak-$(date +%s)
  cat > public/robots.txt <<ROB
User-agent: *
Allow: /

Sitemap: ${SITE_URL%/}/sitemap.xml
ROB
fi

# Patch netlify.toml canonical if present
if [ -f "netlify.toml" ]; then
  cp netlify.toml netlify.toml.bak-$(date +%s)
  if ! grep -q "canonical" netlify.toml; then
cat >> netlify.toml <<'TOML'

# Canonical redirect for Netlify subdomain → custom domain (adjust your subdomain in UI)
# [[redirects]]
#   from = "/*"
#   to   = "https://REPLACE_YOUR_DOMAIN/:splat"
#   status = 301
#   conditions = { Host = ["your-site.netlify.app"] }
TOML
  fi
fi

# Generate data/services.ts from intake list (if exists)
if [ -f "data/services.ts" ]; then
  cp data/services.ts data/services.ts.bak-$(date +%s)
fi

if yq '.services' "$INTAKE" >/dev/null 2>&1; then
  mkdir -p data
  cat > data/services.ts <<TS
export type Service = {
  slug: string
  title: string
  summary: string
  bullets: string[]
  schemaType?: 'Service' | 'HVACBusiness' | 'AutoRepair'
}

export const services: Service[] = [
TS
  count=$(yq '.services | length' "$INTAKE")
  i=0
  while [ $i -lt $count ]; do
    slug=$(yq ".services[$i].slug" "$INTAKE")
    title=$(yq ".services[$i].title" "$INTAKE")
    summary=$(yq ".services[$i].summary" "$INTAKE")
    bullets=$(yq ".services[$i].bullets[]" "$INTAKE" | sed "s/'/\\\\'/g")
    echo "  { slug: '${slug}', title: '${title}', summary: '${summary}', bullets: [" >> data/services.ts
    yq ".services[$i].bullets[]" "$INTAKE" | sed "s/^/    '/; s/$/',/" >> data/services.ts
    echo "  ] }$( [ $i -lt $((count-1)) ] && echo ',' )" >> data/services.ts
    i=$((i+1))
  done
  echo "]" >> data/services.ts
TS
fi

echo "Setup complete."
