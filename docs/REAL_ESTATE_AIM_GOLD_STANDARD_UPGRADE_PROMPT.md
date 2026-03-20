# Real Estate AIM - Gold Standard Website Upgrade Prompt (Codex)

Copy/paste the full prompt below into your Real Estate AIM project chat.

---

## Prompt to paste into Codex

You are an expert Next.js real-estate website optimization and refactoring agent.

You are working inside an **existing** codebase for a real estate agent website builder product (Real Estate AIM).  
Do **not** rebuild from scratch.  
Your job is to **audit, refactor, and upgrade what already exists** so output websites match the quality and structure of our gold-standard reference:

- `https://springbankmardan.com`

Treat that reference as the target style for:
- SEO architecture
- page hierarchy
- conversion flow
- blog strategy
- regional guide strategy
- gallery/media handling
- readability + design balance

## Critical operating rules

1. **Incremental only**
- Keep existing architecture where possible.
- Preserve existing routes/components unless there is a clear technical reason to change.
- Prefer surgical edits over rewrites.

2. **Intent-first SEO, readability-first UX**
- Titles/H1/opening copy must target buyer intent.
- Content must still read naturally for humans.
- Do not keyword-stuff.

3. **Brand handling**
- Brand names are secondary for SEO discovery.
- Primary terms should be transactional + geo (e.g. “Acreage for Sale”, “Real Estate”, location terms).
- Keep branding for on-page trust and presentation.

4. **Builder-friendly outputs**
- Any logic should be template-capable across future agent websites.
- Avoid hardcoding one property unless it is a clearly marked sample/default.

---

## Main objective

Upgrade this existing Real Estate AIM output so generated sites are structurally and qualitatively aligned with the Springbank gold standard.

### Success criteria

- Site uses an intent-first metadata model across core pages.
- Core property pages convert (clear inquiry/open-home/listing CTAs).
- Regional/suburb pages drive informational and transactional intent.
- Blog supports both topical traffic and listing conversion.
- Technical SEO is robust (canonical host, sitemap, robots, schema, pagination crawlability).
- Design remains polished, premium, and readable.

---

## Required implementation scope

### A) Global SEO architecture

1. Metadata framework (template-level)
- Implement page-type metadata strategies:
  - homepage/listing page
  - open-home page
  - gallery page
  - regional guide pages
  - blog index
  - blog article
- Use title pattern:
  - `Primary buyer keyword | Secondary qualifier + location + optional brand`
- Keep title length practical (~50-65 chars target range).
- Keep meta descriptions useful and conversion-oriented (~140-160 chars target).

2. Canonical + host policy
- Ensure single canonical host (non-www preferred unless project config says otherwise).
- Enforce one-hop redirects:
  - `http -> https`
  - `www -> non-www` (or opposite, but one canonical only).

3. Robots + sitemap
- Ensure `robots.txt` points to sitemap.
- Ensure sitemap includes all core indexable pages.
- Include paginated blog pages where applicable.
- Exclude non-index pages from sitemap.

4. Schema
- Keep/add structured data by page type:
  - `RealEstateListing` for listing/homepage equivalent
  - `Event` for open home
  - `BlogPosting` for blog articles
  - `BreadcrumbList` for non-home pages
- Ensure fields are valid/current (date/status/offer details).

5. Meta keywords policy
- Do not rely on `meta keywords` for Google ranking.
- If present, keep low effort; focus on title/H1/body/internal links/schema.

---

### B) Page templates and conversion patterns

Implement or refactor templates so each output site includes:

1. Homepage / Main listing
- Intent-first H1 (transactional + geo)
- Address visible near top
- premium visual hero
- key property stats
- strong CTAs:
  - enquire/contact
  - open home
  - gallery
- internal links to regional pages + blog

2. Open home page
- Evergreen SEO title (not date-fragile as main keyword)
- Event details in body and schema
- clear action buttons:
  - book private inspection
  - call/email
  - view full listing

3. Gallery page
- Transactional context copy (“browse before inspection” style)
- organized categories
- conversion links back to listing/contact

4. Regional/suburb pages
- Keep informational credibility (stats, context, local features)
- Add light transactional overlays (houses/acreage/property for sale intent)
- Internal links back to the live listing with conversion anchor text
- Primary CTA should bias internal conversion path over external portal links

5. Blog index
- Support pagination with crawlable page URLs (not query-only where possible)
- Include spotlight module for listing-focused posts
- Include clear links to listing/open-home/contact

6. Blog article template
- Strong metadata handling
- mid-article and end-of-article conversion bridges
- property spotlight posts should use stronger listing-intent title suffixing

---

### C) Blog content strategy automation (builder behavior)

Set builder defaults for each generated site:

1. Initial blog portfolio
- Generate at least 10 posts:
  - 2 listing/property-specific conversion posts
  - 8 regional/topical buyer-intent posts

2. Content roles
- Property-specific posts: conversion-oriented
- General posts: informational, but each must include at least one conversion bridge to active listing

3. Image policy
- Prefer local property gallery images for listing-specific posts
- Use Wikimedia/WikiCommons for regional contextual content where needed
- Enforce attribution/license block where external images are used
- Require alt text quality for all images

4. Internal linking policy
- Every post should include:
  - at least 1 link to listing page
  - at least 1 link to contact/open-home page
  - related internal links where contextually relevant

---

### D) Design system and readability

Refactor toward a high-trust premium real-estate presentation:

- Maintain strong typography hierarchy
- Ensure generous spacing and scannable sections
- Keep CTA prominence balanced (not spammy)
- Preserve mobile quality and responsiveness
- Keep content readable first, SEO second

---

## Implementation workflow (strict)

1. Audit first
- Inspect all existing templates/routes/components.
- Produce a concise gap list vs the requirements above.

2. Refactor in-place
- Apply minimal-diff changes to existing architecture.
- Reuse components where possible.

3. Validate
- Run type-check/lint/build checks available in repo.
- Fix regressions introduced by refactor.

4. Report
Provide:
- changed files list
- what was changed and why
- SEO outcomes by page type
- remaining optional improvements (if any)

---

## Acceptance checklist (must pass)

- [ ] Homepage metadata and H1 are intent-first.
- [ ] Open-home page is evergreen in SEO structure.
- [ ] Gallery page has transactional context and return conversion links.
- [ ] Regional pages balance info + buyer intent and link back to listing.
- [ ] Blog index has crawlable pagination.
- [ ] Blog posts include conversion bridges.
- [ ] Sitemap includes required pages and paginated blog URLs.
- [ ] Robots references sitemap.
- [ ] Canonical host redirect policy is enforced.
- [ ] Breadcrumb schema exists on non-home pages.
- [ ] No heavy keyword stuffing; readability preserved.

---

## Additional context

- Treat `springbankmardan.com` implementation patterns as a practical benchmark, not a literal clone.
- The target is a reusable website-builder output quality standard for real estate agents.
- Prefer maintainable template logic over one-off per-site hacks.

