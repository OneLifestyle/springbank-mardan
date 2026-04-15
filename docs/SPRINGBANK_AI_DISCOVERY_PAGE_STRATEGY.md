# Springbank Mardan: SEO + AI Discovery Audit and Page Strategy

## 1. Repository Audit

### Framework and app structure
- Framework: `Next.js 16` App Router with `React 19` and TypeScript.
- Styling: Tailwind-based utility styling plus local UI primitives under `components/ui`.
- Deployment model: static-first App Router site deployed to Vercel.
- Site architecture is already partly template-driven, not fully one-off.

### Routing and URL structure
- Main entry routes live under `app/`.
- Important static routes:
  - `/`
  - `/open-home`
  - `/gallery`
  - `/south-gippsland`
  - `/leongatha`
  - `/meeniyan`
  - `/mirboo-north`
  - `/wilsons-promontory`
  - `/foster`
  - `/fish-creek`
  - `/korumburra`
  - `/inverloch`
  - `/venus-bay`
  - `/sandy-point`
  - `/waratah-bay`
  - `/walkerville`
  - `/enquiry-submitted`
- Blog routes:
  - `/blog`
  - `/blog/page/[page]`
  - `/blog/[slug]`

### Metadata patterns
- Global fallback metadata is defined in `app/layout.tsx`.
- Page-level metadata is explicitly defined on major routes such as `app/page.tsx`, `app/open-home/page.tsx`, `app/gallery/page.tsx`, and the legacy guide pages.
- Newer town pages use a shared metadata builder through `buildTownGuideMetadata()` in `lib/town-guides.ts`.
- Blog post metadata is generated dynamically in `app/blog/[slug]/page.tsx` from the structured content object in `lib/blog.ts`.
- Blog pagination metadata is handled separately in `app/blog/page/[page]/page.tsx`.

### Canonical handling
- Canonicals are explicitly set on the homepage, core pages, and blog pages.
- `app/robots.ts` points to the canonical sitemap and host.
- `next.config.ts` contains redirect logic for `www` to non-`www` canonical host.

### Open Graph and share handling
- Global share image derives from `heroImage` in `lib/gallery.ts`.
- Page-level Open Graph metadata exists across homepage, gallery, open-home, guide pages, and blog routes.
- Newer template-driven town pages inherit consistent OG patterns via `buildTownGuideMetadata()`.

### Structured data / JSON-LD
- Centralized in `lib/site-schema.ts` for:
  - `WebSite`
  - `Organization`
  - `RealEstateListing`
  - `Event`
  - `CollectionPage`
  - `BlogPosting`
- Breadcrumb JSON-LD is componentized via `components/breadcrumb-json-ld.tsx`.
- Legacy guide pages and newer town guides emit `Place` schema.
- Schema coverage is materially better than a typical brochure microsite.

### Sitemap and robots handling
- `app/robots.ts` is simple and correct.
- `app/sitemap.ts` includes:
  - all core pages
  - all town guides
  - blog index
  - blog article URLs
  - paginated blog index URLs
- Current sitemap implementation uses `new Date()` for many routes, which is acceptable operationally but not ideal for future builder reuse because it weakens update precision.

### Content storage model
- The site is mostly code-defined content.
- Blog content is stored as structured TypeScript objects in `lib/blog.ts`.
- Town-guide content for newer pages is stored as structured TypeScript objects in `lib/town-guides.ts`.
- Gallery content is stored as a structured manifest in `lib/gallery.ts`.
- Older guide pages (`/leongatha`, `/meeniyan`, `/mirboo-north`, `/south-gippsland`, `/wilsons-promontory`) are still largely hardcoded page files.
- The main listing page is component-composed but copy is still embedded directly inside homepage section components.

### Reusable components and template maturity
- Main reusable building blocks:
  - `components/hero-section.tsx`
  - `components/overview-section.tsx`
  - `components/features-section.tsx`
  - `components/full-gallery-section.tsx`
  - `components/location-section.tsx`
  - `components/blog-preview-section.tsx`
  - `components/open-home-promo-section.tsx`
  - `components/contact-section.tsx`
  - `components/related-buyer-guides-section.tsx`
  - `components/town-guide-page.tsx`
- Important conclusion: the project is already close to a future builder pattern for:
  - town guides
  - blog posts
  - gallery/media
  - schema
- It is less abstracted for:
  - the main listing page content model
  - open-home lifecycle handling
  - homepage section copy and component data

### Image handling and alt-text patterns
- Gallery is manifest-driven in `lib/gallery.ts` with explicit `src`, `alt`, `category`, and placement flags.
- Alt text is generally descriptive and image-specific, which is good for both traditional image SEO and machine understanding.
- Some components still use raw `<img>` instead of `next/image` for local images, notably in `components/full-gallery-section.tsx` and `components/overview-section.tsx`.
- Remote Wikimedia images in `TownGuidePage` correctly fall back to `<img>`.

### Internal linking patterns
- Strong direct linking exists from area guides back to the listing page.
- Open-home and contact paths are surfaced on key commercial pages.
- Buyer-guide modules were recently added to major guide pages and materially improve topic-to-topic traversal.
- Blog posts include related area guide links and listing/contact CTAs.
- Internal linking exists, but the older pages are not yet operating from one explicit linking strategy or content graph.

### Strategic repository conclusion
The site is already partly structured for future template reuse. The most reusable assets are:
- `lib/site-schema.ts`
- `lib/gallery.ts`
- `lib/blog.ts`
- `lib/town-guides.ts`
- `components/town-guide-page.tsx`

The least reusable parts are:
- homepage copy and feature logic spread across many components
- older bespoke guide pages that duplicate the newer template-driven guide model
- open-home lifecycle logic that is still single-event oriented rather than state-driven

## 2. URL and Page Inventory

### Core site pages
| URL | Page type | Notes |
|---|---|---|
| `/` | Main property / listing page | Commercial core of the site |
| `/open-home` | Event / inspection page | Time-sensitive conversion page |
| `/gallery` | Full gallery page | Media support page |
| `/enquiry-submitted` | Utility / confirmation page | Noindex-style operational page |

### Regional and guide pages
| URL | Page type | Template status |
|---|---|---|
| `/south-gippsland` | Regional guide | Bespoke page |
| `/leongatha` | Town guide | Bespoke page |
| `/meeniyan` | Town guide | Bespoke page |
| `/mirboo-north` | Town guide | Bespoke page |
| `/wilsons-promontory` | Destination / access guide | Bespoke page |
| `/foster` | Town guide | Template-driven via `TownGuidePage` |
| `/fish-creek` | Town guide | Template-driven via `TownGuidePage` |
| `/korumburra` | Town guide | Template-driven via `TownGuidePage` |
| `/inverloch` | Town guide | Template-driven via `TownGuidePage` |
| `/venus-bay` | Town guide | Template-driven via `TownGuidePage` |
| `/sandy-point` | Town guide | Template-driven via `TownGuidePage` |
| `/waratah-bay` | Town guide | Template-driven via `TownGuidePage` |
| `/walkerville` | Town guide | Template-driven via `TownGuidePage` |

### Blog system pages
| URL | Page type | Notes |
|---|---|---|
| `/blog` | Blog archive / collection page | Paginated, filterable |
| `/blog/page/[page]` | Paginated archive | Indexable pagination |
| `/blog/[slug]` | Structured editorial page | 31 current posts |

### Blog article inventory (31 current posts)
| URL | Intent cluster |
|---|---|
| `/blog/escape-to-springbank-master-built-mediterranean-sanctuary` | Property spotlight |
| `/blog/springbank-inspection-notes-five-details-buyers-notice-first-at-30-omalleys-road` | Property spotlight |
| `/blog/mardan-property-for-sale-why-springbank-works-as-a-full-time-home-or-premium-country-weekender` | Property spotlight |
| `/blog/30-omalleys-rd-mardan-why-this-tuscan-inspired-mediterranean-home-lives-so-well-year-round` | Property spotlight |
| `/blog/30-omalleys-rd-mardan-7-features-that-make-this-acreage-home-comfortable-well-beyond-summer` | Property spotlight |
| `/blog/30-omalleys-rd-mardan-why-this-property-works-for-buyers-moving-beyond-a-coastal-search` | Property spotlight |
| `/blog/south-gippsland-tree-change-guide-2026-where-lifestyle-buyers-start` | Regional guide |
| `/blog/south-gippsland-lifestyle-property-search-pathway-from-research-to-inspection` | Buyer process |
| `/blog/south-gippsland-autumn-buying-window-how-to-time-your-lifestyle-property-move` | Seasonal buyer guide |
| `/blog/south-gippsland-weekender-holiday-home-guide-what-buyers-should-check` | Weekender / holiday-home intent |
| `/blog/south-gippsland-permanent-move-guide-schools-healthcare-shops-and-daily-life` | Permanent move intent |
| `/blog/south-gippsland-real-estate-guide-2026-lifestyle-buyer-priorities` | Regional search intent |
| `/blog/leongatha-vs-meeniyan-vs-mirboo-north-which-town-fits-your-lifestyle-property-plan` | Comparison intent |
| `/blog/acreage-for-sale-near-leongatha-why-service-access-changes-the-buying-decision` | Leongatha acreage intent |
| `/blog/acreage-for-sale-near-leongatha-what-buyers-should-compare-beyond-the-town-boundary` | Leongatha acreage intent |
| `/blog/prom-country-property-guide-buying-acreage-weekender-or-holiday-base` | Prom-country buyer intent |
| `/blog/foster-real-estate-guide-prom-access-services-and-lifestyle-property-appeal` | Foster buyer guide |
| `/blog/foster-and-toora-property-guide-comparing-prom-access-services-and-value` | Foster / Toora comparison |
| `/blog/fish-creek-property-guide-village-character-prom-country-appeal-and-buyer-fit` | Fish Creek buyer guide |
| `/blog/fish-creek-real-estate-guide-why-village-character-changes-the-buyer-fit-equation` | Fish Creek buyer guide |
| `/blog/fish-creek-real-estate-guide-for-buyers-who-prioritise-village-life` | Fish Creek buyer guide |
| `/blog/inverloch-real-estate-guide-coastal-lifestyle-holiday-home-demand-and-what-buyers-should-compare` | Inverloch buyer guide |
| `/blog/inverloch-property-guide-for-permanent-movers-and-holiday-home-buyers` | Inverloch buyer guide |
| `/blog/sandy-point-waratah-bay-or-walkerville-which-south-gippsland-coastal-base-fits-your-property-search` | Coastal comparison |
| `/blog/sandy-point-property-guide-for-buyers-choosing-beach-access-over-town-scale` | Sandy Point buyer guide |
| `/blog/korumburra-real-estate-guide-why-buyers-look-here-for-value-access-and-acreage-flexibility` | Korumburra buyer guide |
| `/blog/living-near-wilsons-promontory-coast-access-without-compromising-town-convenience` | Wilsons Prom / access intent |
| `/blog/buying-acreage-in-rural-victoria-a-practical-checklist-for-lifestyle-property-buyers` | Broad acreage buyer intent |
| `/blog/how-to-read-a-lifestyle-property-listing-12-signals-that-matter-more-than-styling` | Buyer methodology |
| `/blog/melbourne-to-south-gippsland-weekend-inspection-itinerary-for-acreage-buyers` | Inspection planning |
| `/blog/regional-acreage-finance-and-holding-costs-a-plain-english-planning-guide` | Financial planning |

## 3. Page-by-Page Strategic Classification

Legend:
- **Keep** = keep largely intact, light metadata/schema/media improvements only
- **Expand** = intent is right, add answer-rich depth in place
- **Rewrite** = intent is right, current structure/content model is weak
- **Split** = one page is doing too many jobs
- **Add-around** = keep page, but add clearly distinct support pages around it
- **Consolidate** = merge, de-prioritise, or stop extending because overlap risk is too high

### Core commercial pages
| URL | Decision | Why | SEO risk | AI retrieval upside | Business relevance | Notes |
|---|---|---|---|---|---|---|
| `/` | **Expand** | Core intent is correct: it is the commercial destination. Needs stronger answer-rich summary blocks for buyer-fit, thermal performance, location comparisons, inspection FAQs, and “who this property suits” without turning into filler. | Medium if overloaded with too many topics | High | Highest | Keep as single commercial hub. Do not split the listing into many thin property pages. Improve structured summaries and reusable fact blocks. |
| `/open-home` | **Expand** | Correct dedicated event intent. Needs a more state-driven open-home model and possibly evergreen answer modules about inspection expectations and alternate next step if no event is scheduled. | Medium because date-sensitive pages stale quickly | Medium | High | Keep as separate page type in builder. Add event state handling rather than copy edits per inspection. |
| `/gallery` | **Keep** | Correct support page. Already useful for humans and machine understanding through categorized images. | Low | Medium | Medium-high | Light improvements only: richer captions, optional section summaries by category, stronger plan-view context. |
| `/enquiry-submitted` | **Keep** | Pure utility page. | Low | Low | Operational | Should stay minimal and deindexed. |

### Regional / guide pages
| URL | Primary intent | Secondary intent | Main entities | Current support type | Decision | Strengths | Weaknesses | Overlap / cannibalisation | AI retrieval usefulness | Value to listing page | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `/south-gippsland` | Regional discovery | Buyer orientation | South Gippsland + linked towns | Informational + commercial bridge | **Expand** | Strong overview page, many linked towns, good metadata, good regional entity framing | Trying to carry region, town hub, and buyer-orientation at once; could use clearer summaries and distinct answer blocks | Medium overlap with many regional blog posts | High | High | Keep as regional hub. Expand with explicit answer blocks: “best South Gippsland bases for…”, “coastal vs inland”, “what acreage buyers compare first”. |
| `/leongatha` | Town/service-hub guide | Acreage comparison | Leongatha | Informational + commercial bridge | **Expand** | Strong service-town intent, good metadata, proximity to listing is useful | Still bespoke; lacks the richer comparison architecture of a future reusable guide template | Medium overlap with two Leongatha acreage blog posts | High | High | Good candidate to become a reusable builder town-guide template. |
| `/meeniyan` | Village-character guide | Nearby acreage comparison | Meeniyan | Informational + commercial bridge | **Expand** | This page is already the best real-world discovery entry point based on GSC; intent is validated | Needs stronger “why Meeniyan vs nearby acreage” framing and better direct-answer sections | Medium overlap with several village/lifestyle posts | High | High | Protect this page. Do not rewrite drastically. Add answer blocks and keep existing semantics intact. |
| `/mirboo-north` | Hilltop village / lifestyle guide | Comparison research | Mirboo North | Informational + commercial bridge | **Expand** | Clear entity, clear location role | Less commercially differentiated than Meeniyan and Leongatha pages | Medium | Medium-high | High | Add clearer comparison logic: village character vs service access vs acreage flexibility. |
| `/wilsons-promontory` | Destination-access guide | Nearby property-market relevance | Wilsons Promontory + nearby bases | Informational + commercial bridge | **Expand** | Good distinct intent: people search the destination first | Risk of becoming travel content rather than buyer content | Medium | High | High | Keep. Add stronger “where buyers stay/live if they want Prom access” answer sections. |
| `/foster` | Town guide | Prom-country service base | Foster | Informational + commercial bridge | **Expand** | Template-driven and reusable | Needs evidence that it is materially distinct from Fish Creek / Wilsons Prom buyer routes | Medium | Medium-high | Medium-high | Good future builder template page. Add answer blocks rather than more generic prose. |
| `/fish-creek` | Village-character guide | Prom-country buyer fit | Fish Creek | Informational + commercial bridge | **Expand** | Distinct village identity; useful high-intent niche | Current site also has multiple Fish Creek blog posts, increasing overlap risk | High | Medium-high | Medium-high | Keep page, but stop proliferating near-duplicate Fish Creek blog topics. |
| `/korumburra` | Inland service/value guide | Acreage comparison | Korumburra | Informational + commercial bridge | **Expand** | Distinct value/access angle | Less obviously tied to the property than Meeniyan/Leongatha | Medium | Medium | Medium | Worth keeping because it broadens township graph. Needs strong “why compare this if buying near Mardan?” framing. |
| `/inverloch` | Coastal benchmark guide | Coast vs inland trade-off | Inverloch | Informational + commercial bridge | **Expand** | Distinct coastal benchmark intent | Easy to drift into tourism/holiday tone rather than high-intent property comparison | Medium-high | Medium-high | Medium-high | Keep, but ensure coast-vs-value-vs-practicality framing stays sharp. |
| `/venus-bay` | Beach weekender guide | Coastal alternative | Venus Bay | Mostly informational | **Keep / light expand** | Distinct entity and valid location page | Lower commercial relevance to the listing than Fish Creek/Inverloch/Foster | Medium | Medium | Medium | Keep because it supports broader coast cluster coverage, but do not over-invest unless demand appears. |
| `/sandy-point` | Beach-access guide | Coastal comparison | Sandy Point | Informational + commercial bridge | **Expand** | Useful niche query fit | Overlap with Waratah Bay / Walkerville if not carefully differentiated | Medium-high | Medium | Medium | Keep as part of coastal cluster. Sharpen “what Sandy Point is for” rather than generic locality copy. |
| `/waratah-bay` | Quiet-coast guide | Coastal comparison | Waratah Bay | Informational + commercial bridge | **Keep / light expand** | Valid entity page | Similar job to Sandy Point and Walkerville | High | Medium | Medium | Keep for entity coverage, but avoid spinning more dedicated content around it unless demand proves out. |
| `/walkerville` | Boutique coast / place-led guide | Coastal comparison | Walkerville | Informational + commercial bridge | **Keep / light expand** | Distinct visual/place-led identity | Still part of the same coastal comparison family | High | Medium | Medium | Keep. Best used as part of the coastal cluster rather than as a major stand-alone authority pillar. |

### Blog system pages
| URL | Decision | Why | SEO risk | AI retrieval upside | Business relevance | Notes |
|---|---|---|---|---|---|---|
| `/blog` | **Expand** | Correct archive/collection page. Needs stronger topical clustering, perhaps a clearer “Start here if…” decision layer, and maybe segmentation by buyer intent rather than chronology alone. | Medium if archive becomes cluttered | High | High | Keep as main editorial hub. Builder should support featured clusters and buyer-intent groupings. |
| `/blog/page/[page]` | **Keep** | Useful crawl path and archive depth. | Low | Low | Medium | No major content work needed; keep paginated structure. |
| `/blog/[slug]` (template) | **Expand in template** | Blog template already has strong structure: intro, sections, gallery, CTA, related links, image credits. Needs stronger answer-summary sections near top and more consistent entity/fact blocks for AI retrieval. | Medium if over-templated into sameness | High | High | Improve template, not just individual articles. |

### Property-specific blog posts
| URL cluster | Decision | Why | Overlap risk | AI retrieval upside | Business relevance | Notes |
|---|---|---|---|---|---|---|
| Property spotlight posts at `/blog/escape-to-springbank...`, `/blog/springbank-inspection-notes...`, `/blog/mardan-property-for-sale...`, `/blog/30-omalleys-rd-mardan...` (3 variants) | **Consolidate lightly / de-prioritise new additions** | Existing property-post coverage is already ample. The site now has six property-specific posts, which is enough for one microsite. | High | Medium-high | High | Keep the strongest few, but do not keep adding near-duplicate property explainers. Future work should improve internal distribution and answer extraction, not volume. |

### Regional and buyer-guide blog clusters
| Topic cluster | Current URLs | Decision | Why | Risk |
|---|---|---|---|---|
| South Gippsland regional overview | `south-gippsland-tree-change-guide...`, `south-gippsland-real-estate-guide-2026...`, `south-gippsland-lifestyle-property-search-pathway...` | **Consolidate strategically** | These are distinct enough now, but another similar regional guide would likely cannibalise. Keep the current set and refine internal roles. | Medium-high |
| Leongatha acreage comparison | `acreage-for-sale-near-leongatha-why-service-access...`, `acreage-for-sale-near-leongatha-what-buyers-should-compare...` | **Consolidate / stop adding** | Two similar Leongatha acreage posts is already enough. Use one as broader service-access explainer and one as comparison page. Do not add more. | High |
| Fish Creek buyer-fit posts | `fish-creek-property-guide...`, `fish-creek-real-estate-guide-why-village-character...`, `fish-creek-real-estate-guide-for-buyers-who-prioritise-village-life` | **Consolidate / de-prioritise** | This is the clearest blog cannibalisation risk in the repo. The page `/fish-creek` already exists and three closely related blog posts compete around the same village-character theme. | High |
| Inverloch buyer posts | `inverloch-real-estate-guide...`, `inverloch-property-guide-for-permanent-movers...` | **Keep both, but stop here** | There is a usable distinction between coastal benchmark and buyer-fit. A third Inverloch post would likely dilute. | Medium |
| Foster / Prom-country posts | `foster-real-estate-guide...`, `foster-and-toora-property-guide...`, `prom-country-property-guide...`, `living-near-wilsons-promontory...` | **Keep but rationalise roles** | These can coexist if each has a clear angle: service base, paired comparison, broader Prom-country intent, and destination-access logic. | Medium |
| Coastal cluster posts | `sandy-point-waratah-bay-or-walkerville...`, `sandy-point-property-guide...` | **Keep** | This is a sensible split between cluster comparison and single-location buyer fit. | Medium |
| Generic buyer methodology posts | `buying-acreage-in-rural-victoria...`, `how-to-read-a-lifestyle-property-listing...`, `melbourne-to-south-gippsland-weekend-inspection-itinerary...`, `regional-acreage-finance-and-holding-costs...` | **Expand in place** | These are high-value answer-rich assets for conversational discovery and machine synthesis. They are some of the most reusable template ideas for the future builder. | Low |

## 4. Gap Analysis

Only clearly justified gaps are listed here.

### High-value gaps that are justified
1. **Buyer-fit page type**
- Concept: one durable page that answers who the property suits and who it does not suit.
- Why justified: the homepage currently carries this implicitly, and multiple property blog posts are trying to solve the same need indirectly.
- Distinct intent: users asking whether this kind of acreage is suitable for full-time living, weekender use, multigenerational stays, or tree change.
- Best implementation: likely a dedicated evergreen support page type for future builder use, not another blog post for this site immediately.

2. **FAQ / answer block layer, not necessarily a stand-alone FAQ page**
- Concept: reusable answer-rich modules on listing and guide pages.
- Why justified: better for AI retrieval and conversational search without creating thin FAQ-only pages.
- Distinct value: directly improves extractability of facts, comparisons, and buyer-fit answers.
- Best implementation: expand in place on the homepage and main guide pages, not a generic `/faq` page.

3. **Trust / methodology page for the future builder, optional for this site**
- Concept: how this microsite is assembled, sourced, and maintained; why area guides and buyer guides are written this way.
- Why justified for builder context: it is reusable at scale and supports trust for future agent sites.
- Why not urgent here: for this single listing it is secondary to discovery and conversion pages.

### Gaps that are **not** justified right now
- Another generic “South Gippsland real estate guide” page: would duplicate `/south-gippsland` and multiple blog posts.
- More Fish Creek, Leongatha, or property spotlight blog posts: overlap risk is already high.
- AI-only summary pages: low value, high filler risk.
- Separate FAQ pages for every town: thin and duplicative.
- Separate mini-pages for each feature of the property (e.g. kitchen, studio, garden): commercially weak and structurally noisy.

## 5. Content Architecture Recommendation

### What stays on the property page
The homepage should remain the single commercial core for:
- property summary
- buyer-fit framing
- key facts and differentiators
- open-home / enquiry actions
- media preview
- location summary
- concise answer-rich modules about suitability, comfort, layout flexibility, and local access

It should **not** become:
- a giant area guide
- a FAQ dump
- a repository of every supporting explanation already covered better elsewhere

### What belongs on area pages
Area pages should own:
- place/entity clarity
- town fit
- service/lifestyle profile
- comparison cues
- town-specific events and cultural signals
- natural links back to the listing and relevant editorial guides

Area pages should **not** try to become:
- the listing page
- broad state-level property advice pages
- tourism pages divorced from property intent

### What belongs on blog/editorial pages
Blog/editorial pages should own:
- buyer process
- comparison logic
- decision methodology
- trade-offs
- timing, finance, travel, and inspection planning
- location-specific intent when that intent is broader than a town guide

Blog posts should **not** be used to create multiple near-identical location variations.

### What deserves its own page type
For the future builder, the following page types are justified:
1. Listing / property page
2. Open-home / event page
3. Gallery page
4. Regional hub page
5. Town guide page
6. Buyer-guide / editorial page
7. Optional buyer-fit support page

### What should never be duplicated
- core listing facts repeated across multiple property spotlight posts
- repeated Fish Creek / Leongatha / Inverloch blog angles with only minor headline differences
- separate FAQ pages that restate town guide content
- duplicate area guide pages that exist only to cover adjacent wording

## 6. Rewrite vs Add Decision Framework

Use this rule set for Springbank and future property microsites.

### Keep as-is when
- the page has a clear single intent
- the page already aligns with one query class
- the page already supports internal linking well
- the page contributes unique entity coverage or conversion value

### Expand in place when
- the page has the right job
- the missing value is answer clarity, buyer-fit framing, comparisons, trade-offs, or extractable facts
- a new page would only split authority and increase duplication risk

### Rewrite structurally when
- the page intent is valid but the content model is bespoke and hard to scale
- the page should become a reusable template type in the builder
- the page mixes good intent with weak information hierarchy

### Split only when
- users would reasonably seek one part without the other
- the secondary topic has enough depth to stand alone
- the split would reduce ambiguity rather than manufacture more pages

### Add a new page only when
- the user intent is clearly distinct
- the new page can rank or be retrieved independently
- it supports the property page naturally
- it would still be a good page even without “AI SEO” as the justification

### Consolidate when
- two or more pages target the same entity and buyer question with only minor variation
- one page has no clear job after internal links are considered
- topic proliferation is outpacing distinct commercial value

## 7. Priority Roadmap

### First changes
1. **Document and rationalise page roles in the codebase**
- protect existing winners such as `/meeniyan`
- stop adding near-duplicate blog topics in already crowded clusters

2. **Expand the homepage with answer-rich machine-readable content blocks**
- buyer-fit
- full-time vs weekender suitability
- comfort/thermal-performance summary
- layout/flexibility summary
- inspection readiness / what to compare

3. **Convert older bespoke guide pages toward the template-driven guide model**
- `/leongatha`
- `/meeniyan`
- `/mirboo-north`
- `/wilsons-promontory`
- `/south-gippsland` should become a distinct but still structured regional-hub template

4. **Strengthen blog template extractability**
- add short structured summaries near the top of posts
- standardise question/answer or “buyer takeaways” pattern for high-value posts

### Second changes
1. **Consolidate crowded blog clusters editorially**
- especially Fish Creek and Leongatha acreage posts
- do not necessarily delete URLs; instead de-prioritise and define a primary article per cluster

2. **Introduce a reusable buyer-fit content block or page type**
- as a builder-level pattern first
- optionally as a new support page here if the homepage still feels overloaded

3. **Improve sitemap freshness logic**
- use content-driven `lastModified` where available instead of `new Date()` for many routes

### Lower priority changes
1. Replace remaining local `<img>` usage with `next/image` where practical
2. Add richer media captions in gallery and open-home contexts
3. Add optional structured FAQ only if it is based on visible, useful content already present on page

### Changes that should be abstracted into the future builder immediately
1. `TownGuideData` model and `TownGuidePage` template
2. `BlogPost` model in `lib/blog.ts`
3. `site-schema.ts` patterns for listing, event, article, collection, and organization
4. `gallery.ts` manifest approach
5. `related-buyer-guides-section.tsx`
6. clear internal-link strategy between listing, guides, and blog posts

## 8. Concrete Next Actions

### Files and templates to review first
1. `components/hero-section.tsx`
2. `components/overview-section.tsx`
3. `components/features-section.tsx`
4. `components/location-section.tsx`
5. `components/blog-preview-section.tsx`
6. `app/open-home/page.tsx`
7. `app/leongatha/page.tsx`
8. `app/meeniyan/page.tsx`
9. `app/mirboo-north/page.tsx`
10. `app/wilsons-promontory/page.tsx`
11. `app/south-gippsland/page.tsx`
12. `app/blog/[slug]/page.tsx`
13. `lib/blog.ts`
14. `lib/town-guides.ts`
15. `lib/site-schema.ts`
16. `app/sitemap.ts`

### Why these first
- They control the commercial core, the strongest discovery routes, the main support content model, and the future builder abstractions.
- These files are where answer-rich content, entity clarity, machine-readable summaries, and reusable template logic will have the highest leverage.

### Safe documentation actions that are justified immediately
- preserve this document in `docs/`
- add a short builder-facing note mapping:
  - page type
  - content owner
  - allowed query classes
  - internal-link role

## Appendix: Candidate Page Opportunities That Are Worth Testing

| Page concept | Target intent | Why it is distinct | Risk level | Priority | Future builder support? |
|---|---|---|---|---|---|
| Buyer-fit page for the listing | “Is this property right for my use case?” | Distinct from listing overview and from generic property blog posts | Medium | Medium | Yes |
| Regional comparison page (coast vs inland vs village base) | Users choosing between lifestyle modes rather than a single town | Distinct from any single town guide and useful for multi-town synthesis | Medium | Medium | Yes |
| Evergreen inspection methodology page | Buyers wanting to know how to inspect acreage/lifestyle property well | Distinct from the listing itself and reusable across all future sites | Low | Medium-high | Yes |
| Trust / methodology page for how local guides are sourced | Trust, transparency, editorial rigor | More relevant for a builder ecosystem than this single microsite | Low-medium | Low | Yes |
| Stand-alone FAQ page | Direct answers | Only justified if it contains unique visible content not already present elsewhere | High | Low | No by default |

