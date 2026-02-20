# Springbank to Real Estate AIM: Website Builder Automation Roadmap

## 1) Document Purpose
This document captures what was built for `springbankmardan.com`, why it worked, and how to replicate and automate the same outcome inside the Real Estate AIM project.

It is intended to be used as:
- A build history summary.
- A technical product brief for Codex inside Windsurf.
- A roadmap for upgrading an existing listing website generator into a richer SEO-capable listing-site platform.

## 2) Reference Implementation
- Live reference site: `https://springbankmardan.com`
- Tech stack: Next.js (App Router), Vercel deployment, GitHub source control.
- Primary outcome: A listing website with strong local utility, structured SEO landing pages, blog architecture, media pipeline, and stable indexing behavior.

## 3) Key Build Milestones (Reference Timeline)
Recent milestones from this project:
- `ee26246`: Core Springbank site updates, pricing/SOI UX, content enhancements.
- `079eef0`: Homepage links and favicon cleanup.
- `825bebe`: SEO suburb and region pages added to sitemap.
- `c841e50`: Open home landing page and homepage promo section.
- `0d0a66f`: Canonical redirect attempt (introduced redirect conflict).
- `4bc36e1`: Redirect loop fix for Googlebot/indexing.
- `21e39ba`: Blog architecture and first long-form article.
- `7640c8a`: Additional SEO blog posts + Wikimedia attributions.
- `414c6ca`: Hybrid gallery model (homepage highlights + `/gallery`).
- `31c0325`: YouTube property video integrated.
- `7193946`: Bulk image ingestion, SEO-safe renaming, compression, folder reorganization.
- `5efebb1`: Updated listing destination links (realestate + agency listing).

## 4) What Must Be Replicated in Real Estate AIM
The target module should generate a full listing website with:
- SEO location/suburb/region pages.
- Blog system with categories and tags.
- Media-rich pages (image galleries, plans, video).
- Automatic internal linking between key pages.
- Structured metadata, sitemap, robots, canonical consistency.
- Deployment workflow (Git + Vercel) and post-deploy indexing guidance.
- Operational safeguards for redirect/canonical mistakes.

## 5) Input Modes for the Builder (Three Modes)

### Mode A: Manual Input
Agent provides:
- Address, headline, price, hero copy.
- Images/plans/video URL.
- Agent profile/contact details.
- Branding preferences.

Use when:
- Listing is not yet published externally.
- Agent wants full manual control.

### Mode B: URL-First Auto Build (Preferred)
Agent provides:
- One listing URL (realestate.com.au, agency listing page, etc).

System does:
- Crawl listing page.
- Extract images, plans, video links, copy, key facts (beds/baths/car, land size).
- Build site draft automatically.

Use when:
- Listing already exists online.
- Goal is minimum agent effort.

### Mode C: Hybrid CRM-First Build
Agent provides:
- Property address (or listing ID) and optional external URL.

System does:
- Pull assets from Real Estate AIM modules first (copywriting, photography, floorplans, video).
- Fill gaps from web sources.
- Build draft with CRM data as source of truth.

Use when:
- Agent already completed prior modules in Real Estate AIM.

## 6) Required Data Contract (Minimum Viable)
The builder should normalize data into a shared schema:
- Listing identity: address, suburb, state, postcode, listing status.
- Commercial facts: price display, listing links (portal + agency), open home events.
- Property facts: beds, baths, parking, land size, floor area, features.
- Contact facts: agent name, phone, email, agency URL.
- Media assets: hero image, gallery images, plans, video URL.
- SEO facts: target localities, keyword clusters, canonical URL, sitemap entries.
- Content facts: long description, section summaries, FAQs, blog topics.

## 7) Page Architecture to Generate
Generate at minimum:
- `/` (main listing page)
- `/gallery` (full media library)
- `/open-home` (if event exists)
- `/blog` and `/blog/[slug]`
- 3 to 7 local SEO pages (suburbs/region/tourism anchors)

For a higher competition market:
- Recommend 5 to 10 SEO pages.
- Suggest page candidates automatically.

## 8) SEO Locality Page Strategy
Core principle: utility-first local content, never "SEO-sounding" copy.

Each locality page should include:
- A practical overview of the area.
- Things to do relevant to buyer lifestyle.
- Event calendar section with current-year dates.
- Real estate context section (market profile and links).
- Local stats section with source links.
- Internal links to sibling locality pages and the main listing.

Selection logic for which pages to build:
- Radius-based candidates from property coordinates.
- Search-demand weighting (town + real estate/lifestyle terms).
- Buyer-profile fit weighting (tree-change, sea-change, retirees, families).
- Agent override (manual include/exclude).

## 9) Blog System Requirements
Minimum starter set: 5 posts per listing campaign.

Capabilities:
- Category and tag system.
- Index page filters by category/tag.
- Internal links to listing and locality pages.
- Metadata + OpenGraph + JSON-LD for posts.
- Source and attribution blocks when external/public images are used.

Content rules:
- Write for humans first (local practical value).
- Keep keyword usage natural and contextual.
- Avoid explicit "search intent" meta language on-page.

## 10) Media Pipeline Specification

### Folder Structure (Recommended)
- `public/images/wikimedia/` (external licensed sources)
- `public/images/<listing-slug>/highlights/`
- `public/images/<listing-slug>/gallery-full/`
- `public/images/<listing-slug>/plans/`
- `public/images/<listing-slug>/raw-import/` (ignored in git)

### Naming Pattern
Use concise SEO-safe names:
- `springbank-mardan-south-gippsland-lifestyle-property-hero.jpg`
- `springbank-mardan-south-gippsland-lifestyle-property-gallery-001.jpg`

Rules:
- Lowercase, kebab-case.
- Include location + property context.
- Avoid keyword stuffing and very long names.

### Compression Targets
- Highlights: 2400px max edge, JPEG quality ~78.
- Full gallery: 1800px max edge, JPEG quality ~72.
- Plans: preserve readability, 1800-2200px max edge.

### Video
- Accept YouTube/Vimeo URL.
- Embed video in homepage gallery block + full gallery page.
- Provide fallback image when URL missing.

## 11) Wikimedia/WikiCommons Image Workflow
When using Wikimedia:
- Store image file locally (if license allows) or use direct URL per policy.
- Capture source page URL.
- Capture author attribution.
- Capture license name + license URL.
- Render visible attribution block on page/post where used.

## 12) Deployment and DNS/Indexing Operations

### Git + Vercel Flow
- Build changes locally.
- Commit and push to `main`.
- Auto-deploy in Vercel production.

### Environment Variables
- Ensure required vars are configured in Vercel Production (example: `RESEND_API_KEY`).
- `.env.local` remains local only.

### Canonical/Redirect Guardrails
- Define one canonical host strategy (either apex or `www`).
- Never create opposite redirects at app level and host level simultaneously.
- Validate with `curl -I` before requesting indexing.

### Search Console Runbook
After deploy:
- Submit sitemap URL (`/sitemap.xml`).
- Inspect key URLs.
- Request indexing for new/changed pages.
- Use Validate Fix for prior coverage issues.

## 13) Indexing Risks and Mitigations
Common risks observed:
- Redirect loop from conflicting host rules.
- Alternate canonical confusion.
- Discovered but not indexed (crawl lag).

Mitigation:
- Single canonical host policy.
- Correct sitemap coverage of all important pages.
- Strong internal linking from homepage/footer/blog.
- Manual URL inspection for priority pages.

## 14) UX and Copy Guardrails
Must enforce this style:
- Utility-first local copy.
- Real estate relevance without "SEO spam" tone.
- Practical headings (avoid overly technical labels).
- Clear calls to action tied to inspection/contact/listing links.

## 15) Agent Interaction Design (Low Effort)

### Required from agent (minimal)
- Listing URL or property address.
- Agent contact details.
- Price and listing status.

### Optional from agent
- Preferred nearby localities.
- Brand accents/logo.
- Compliance text overrides.
- Priority audience (retirees, families, investors, tree-changers).

### System-generated recommendations
- Suggested locality pages count and page list.
- Suggested blog topics and publishing sequence.
- Suggested image categories and media completeness score.

## 16) Automation Pipeline (Codex-Orchestrated)
1. Intake: choose Mode A/B/C.
2. Normalize data into listing schema.
3. Fetch/ingest media and listing facts.
4. Compress/rename media and build folder structure.
5. Generate core pages.
6. Generate locality pages and internal links.
7. Generate blog posts and taxonomy.
8. Generate metadata/sitemap/robots/canonicals.
9. Run validation checks.
10. Commit, push, deploy.
11. Return post-deploy indexing checklist.

## 17) Validation Checklist
Before push:
- No broken image paths.
- No unresolved imports.
- Build/type checks pass.
- Sitemap includes all high-value pages.
- Canonical URLs match host strategy.
- Contact form endpoint/env expectations confirmed.

After deploy:
- Homepage, gallery, blog, locality pages return 200.
- Video embed loads.
- Listing links correct.
- Search Console inspection clean for priority URLs.

## 18) Cost and Scale Notes
For low traffic (20-30 visitors/day, ~50 images):
- Optimized local images on Vercel are usually low cost.
- Main concern is operational/commercial plan fit, not bandwidth at this level.

For scale (many websites + higher traffic):
- Consider object storage/CDN for media.
- Keep app repo lean by ignoring raw imports.
- Reuse compression and naming pipeline across all generated sites.

## 18.1) Weekly Vercel Usage Monitoring (Practical Runbook)
Check these once per week in Vercel:
- Vercel dashboard -> Project -> Usage.
- Also check team-level Usage if multiple sites are active.

Track these metrics:
- Edge Requests (total monthly and trend line).
- Fast Data Transfer (GB/month).
- Function Invocations (if API routes/forms are used heavily).
- Build minutes and deployment count.
- Image optimization usage (if Next/Image transforms are active at scale).

Record this in a simple weekly log:
- Week ending date.
- Visitors estimate (from analytics).
- Edge Requests used and % of plan cap.
- Data Transfer used and % of plan cap.
- Any spikes and likely cause (new gallery upload, ad campaign, crawl burst, etc).

Suggested alert thresholds (early warning, not hard limits):
- Edge Requests > 60% of monthly cap.
- Fast Data Transfer > 60% of monthly cap.
- Sudden week-over-week increase > 30%.

Action playbook when thresholds are exceeded:
- Step 1: Recompress largest gallery images and reduce highlight image count on homepage.
- Step 2: Confirm no accidental hotlinking or bot spike.
- Step 3: Move large media to object storage/CDN for scaled projects.
- Step 4: Review plan suitability (Hobby vs Pro) for compliance and sustained growth.

Monthly review cadence:
- Compare 4-week trend vs campaign calendar (open home dates, ad runs, social pushes).
- Update compression defaults and image count targets based on real usage.
- Document baseline per site so future listings can be capacity-planned faster.

## 19) Suggested Implementation Phases in Real Estate AIM

### Phase 1: Foundation
- Add shared listing schema.
- Add page generator for core listing pages.
- Add media pipeline (ingest, rename, compress, categorize).

### Phase 2: SEO Expansion
- Add locality page recommender + generator.
- Add metadata/sitemap/canonical automation.
- Add Search Console runbook outputs.

### Phase 3: Content Expansion
- Add blog generator with taxonomy.
- Add Wikimedia attribution subsystem.
- Add internal-linking optimizer.

### Phase 4: Production Operations
- Add deployment orchestrator (GitHub/Vercel).
- Add domain configuration checks.
- Add diagnostics for redirect and indexing issues.

## 19.1) Hosting Decision Framework (Scale Planning)
Use this section before scaling beyond a few active listing sites.

### Objective
Keep delivery speed high while preventing hosting costs from scaling faster than revenue.

### Candidate Hosting Paths
1. Vercel Pro (Current model)
- Pros: fastest DX for Next.js, simple previews/deployments, strong edge/CDN integration.
- Cons: usage-based cost can rise quickly across many sites with media-heavy pages.
- Best fit: low site count, fast iteration, high developer velocity.

2. Multi-site VPS/Container platform (self-managed or managed VPS)
- Pros: predictable fixed cost, many low-traffic sites can fit on one or a few servers.
- Cons: more ops burden (deploy, SSL, monitoring, backups, security patching).
- Best fit: medium scale where fixed cost predictability matters more than managed platform convenience.

3. Static-first architecture + CDN/object storage
- Pros: lowest ongoing cost at scale for content-heavy listing sites.
- Cons: requires architectural discipline; dynamic features must be externalized (forms, CRM APIs).
- Best fit: high volume of mostly static listing microsites with reusable templates.

### Shared Hosting Providers (Hostinger/HostGator/Namecheap) Caveat
- Cost can look attractive, but Next.js SSR/ISR and modern deployment workflow may be constrained.
- If using these, prefer static export-compatible architecture or adapter-compatible runtime strategy.
- Treat as viable only after a technical proof-of-concept with your exact stack.

### Decision Triggers (When to Re-evaluate Hosting)
Re-run hosting comparison when any condition is met:
- Active listing sites > 10.
- New site launches > 10 per month.
- Monthly hosting bill exceeds target margin threshold.
- Edge/Data Transfer usage repeatedly exceeds 60% of plan caps.
- Build/deploy queue delays start affecting delivery SLAs.

### Cost Governance Rules
- Define a per-site monthly hosting budget target.
- Track blended cost per active site and per site launched.
- Set alert if blended hosting cost per site rises > 25% month-over-month.
- Keep raw media out of git and compress all gallery assets by default.

### Recommended Migration Sequence
1. Stage 1 (Now): Continue on Vercel while product and workflow stabilize.
2. Stage 2 (Early scale): Split media to object storage/CDN first (lowest friction saving).
3. Stage 3 (Mid scale): Pilot 2-3 sites on alternate hosting architecture.
4. Stage 4 (Rollout): Move new sites to the winning cost/performance stack; keep legacy sites where stable.
5. Stage 5 (Standardize): Create one-click deployment templates for the chosen architecture.

### Benchmark Matrix (Run Quarterly)
Score each candidate on:
- Cost predictability
- Deployment speed
- SEO reliability (canonical, sitemap, performance)
- Operational overhead
- Failure recovery and monitoring maturity
- Integration complexity with Real Estate AIM modules

Use weighted scoring aligned to business priorities, not just lowest raw hosting price.

## 20) Prompt Block to Reuse in Real Estate AIM
Use this as a handoff prompt for Codex inside your master project:

"Use `docs/SPRINGBANK_TO_REAL_ESTATE_AIM_AUTOMATION_ROADMAP.md` as the implementation brief. Upgrade the website builder module so it can generate a listing site equivalent in quality to springbankmardan.com, including locality SEO pages, blog with taxonomy, gallery + full gallery architecture, video embedding, metadata/sitemap/canonical automation, and deployment/indexing runbooks. Prioritize utility-first local copy and avoid obvious SEO tone. Build Mode A (manual), Mode B (URL-first), and Mode C (hybrid CRM-first). Return incremental milestones with tests and commit-ready changes."

## 21) File and Component References from This Project
High-value references:
- `app/page.tsx`
- `app/gallery/page.tsx`
- `app/open-home/page.tsx`
- `app/sitemap.ts`
- `app/robots.ts`
- `lib/gallery.ts`
- `lib/blog.ts`
- `app/blog/page.tsx`
- `app/blog/[slug]/page.tsx`
- `components/full-gallery-section.tsx`
- `components/contact-section.tsx`

## 22) Final Notes
This roadmap is designed to be practical, not theoretical. The reference implementation has already proven:
- End-to-end build feasibility.
- Strong local SEO structure without sacrificing readability.
- Stable deployment and indexing when canonical policy is kept consistent.
- Repeatable media ingestion process from live listing sources.
