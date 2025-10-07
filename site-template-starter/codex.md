# New Client Site Spin-Up (Runbook, Concise Edition)

## Goals
- Duplicate this template into a unique, non-cookie-cutter site for the client in `site-template-starter/intake/client.yaml`.
- Use the client’s logo, colors, and social links to guide tone and visuals.
- Select varied hero and services layouts from `site-template-starter/catalog/sections.json`.
- Generate natural, concise copy with a single “near me/near you” mention and optional neighborhoods.
- Ensure the build runs cleanly and commit to a new branch.

---

## Steps

1. **Read intake**
   - Parse `site-template-starter/intake/client.yaml` for:
     `name`, `domain`, `phone`, `email`, `city/region`, `socials`, `tone`, `neighborhoods`, `niche`, and optional `style` fields (`tone`, `word_limit`).

2. **Prepare template**
   - Duplicate into a new folder:
     ```bash
     bash site-template-starter/scripts/duplicate.sh \
       --out "./client-<slug>" \
       --intake "site-template-starter/intake/client.yaml" \
       --init-git
     ```
   - Or, if already in the copy:
     ```bash
     bash site-template-starter/scripts/setup.sh
     ```

3. **Assets**
   - Ensure `public/logo.png` exists (copy from `assets.logo` if defined).
   - Reference it in the Nav and Hero components.
   - Optional: include `public/og-image.jpg` and `public/favicon.png`.

4. **Layout choice**
   - Choose a hero and services layout from `catalog/sections.json` that differs from the last build.
   - Add a brief comment in the selected component noting your choice.

5. **Content generation**
   - Use `site-template-starter/prompts`:
     - **home.md**
       - Write clear, friendly copy: one H1, short H2, a 1-paragraph intro (<100 words), and 3 concise bullet points.
       - Include one “near you/near me” mention and up to 2 neighborhood names.
       - Keep each section scannable and under ~20 seconds of reading time.
     - **service.md**
       - For each service (from `niche`), generate:
         - 1 short headline (under 10 words)
         - Intro paragraph (<80 words)
         - 3 bullets or benefits
         - A 1-sentence CTA
         - Up to 4 FAQs
       - Avoid marketing fluff; focus on clarity and usefulness.
     - **faq.md**
       - 5–8 short, direct questions and answers.
       - Keep each answer <50 words.
   - Style guidelines:
     - Prefer single short paragraphs; no long intros.
     - Use natural phrasing—write as you’d speak.
     - Avoid repeating the brand name in every sentence.

6. **Structured data**
   - Home page: `LocalBusiness` JSON-LD with `telephone`, `address`, and `geo`.
   - Service pages: `Service` JSON-LD with `areaServed`, `@id`, and `url`.

7. **Navigation / footer**
   - Update nav links for new service slugs.
   - Confirm socials and contact info match the intake file.

8. **Verify build**
   ```bash
   npm i
   npm run dev
   npm run build || npm run generate
