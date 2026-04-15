# Springbank Mardan: AI-Aware SEO Implementation Blueprint

## A. Final Architecture Recommendation

### Core direction
Springbank Mardan should evolve into a **structured property microsite system** built around a small number of durable page types, each with one clear job.

The site should not become:
- a parallel AI wiki
- a generic FAQ farm
- a collection of near-duplicate regional pages
- a growing archive of overlapping property explainers

It should become:
- a commercially strong property page
- a set of distinct supporting guide pages
- an editorial layer that handles methodology, comparisons, and buyer-process questions
- a structured content system that makes the site easier for humans, search engines, and retrieval systems to interpret

### Final page-type system
The recommended page-type system for this site and future builder use is:
1. `property-home`
2. `open-home-event`
3. `gallery`
4. `regional-hub`
5. `town-guide`
6. `buyer-guide-article`
7. `comparison-article`
8. `property-spotlight-article`
9. `buyer-fit-page` (optional but justified)
10. `trust-methodology-page` (builder-level justified, site-level optional)

### High-level architecture rules
- The **property home page** remains the main commercial destination.
- **Town and regional pages** own local entity clarity and location comparison.
- **Buyer-guide and comparison articles** own process, methodology, and multi-factor decisions.
- **Property spotlight articles** support the listing, but should be limited and sharply differentiated.
- **Buyer-fit** should either be a dedicated page type or a prominent answer block on the homepage.
- **Trust/methodology** belongs in the future builder architecture, but is secondary on this single microsite.

## B. Page-Type Framework

### 1. Property home page
**Purpose**
- Convert qualified traffic into enquiry or inspection actions.
- Act as the canonical source of truth for the property.
- Provide strong answer-rich retrieval units for machines and buyers.

**Primary intent**
- High-intent commercial property discovery.

**Target query patterns**
- `acreage for sale south gippsland`
- `mardan property for sale`
- `30 o'malleys road mardan`
- `south gippsland lifestyle property for sale`
- `5 acre property victoria`

**What belongs here**
- direct answer summary
- core listing facts
- media-rich presentation
- buyer-fit summary
- key trade-offs / realities
- location usefulness summary
- CTA blocks for enquiry, inspection, gallery
- strong internal links to the most relevant guides

**What does not belong here**
- full town-level history and tourism detail
- multiple duplicative lifestyle essays
- too many FAQ fragments
- broad generic state-level property advice

**Ideal heading structure**
- H1: intent-first property title
- H2: what this property is
- H2: key facts and highlights
- H2: who this property suits
- H2: why the location works
- H2: what to know before buying
- H2: gallery / media
- H2: open home / contact

**Ideal section order**
1. Hero + direct answer summary + headline facts
2. Short “what this property is” block
3. Key commercial highlights / facts panel
4. Buyer-fit block
5. Interior / layout / comfort block
6. Grounds / studio / flexibility block
7. Why this location works
8. What to know before buying
9. Media gallery preview
10. Open-home / contact CTA block
11. Editorial links to relevant supporting guides

**CTA locations**
- hero
- after buyer-fit section
- after “what to know before buying”
- final page CTA

**Required structured data**
- `RealEstateListing`
- `WebSite`
- `Organization`
- optional breadcrumb handled consistently

**Recommended metadata pattern**
- Title: `Acreage for Sale South Gippsland | 30 O'Malleys Rd, Mardan`
- Description: concise commercial summary with location and differentiators

**Internal links in**
- all town pages
- all high-value buyer-guide articles
- open-home page
- gallery page

**Internal links out**
- open-home
- gallery
- contact anchor
- relevant regional/town guides
- 2 to 4 most relevant buyer guides

**Structured content fields**
- should come from `propertyEntity`, `propertyFacts`, `buyerFit`, `mediaAssets`, `schemaConfig`, `internalLinkGraph`

---

### 2. Open-home event page
**Purpose**
- Handle time-sensitive inspection intent.

**Primary intent**
- inspection attendance / short-term conversion

**Target query patterns**
- `mardan open home`
- `open home 30 o'malleys rd`

**What belongs here**
- event details
- expectations for inspection
- compact property summary
- contact options
- media support set

**What does not belong here**
- full location deep-dive
- broad editorial content

**Ideal section order**
1. Event summary
2. time/place facts panel
3. what you will see
4. support gallery
5. CTA/contact

**Required structured data**
- `Event`
- breadcrumb

**Structured content fields**
- `openHomeEvent`, `propertyEntity`, `mediaAssets`

---

### 3. Gallery page
**Purpose**
- Full visual exploration before inspection.

**Primary intent**
- media exploration / inspection support

**What belongs here**
- all categorized media
- plans
- captions where useful
- strong return links to listing and open-home

**What does not belong here**
- long prose blocks duplicating listing copy

**Required structured data**
- breadcrumb only is sufficient

**Structured content fields**
- `mediaAssets`

---

### 4. Regional hub page
**Purpose**
- Own the regional entity and explain how the region is navigated by buyers.

**Primary intent**
- broad regional discovery

**Target query patterns**
- `south gippsland real estate`
- `south gippsland lifestyle property`
- `houses for sale south gippsland`

**What belongs here**
- region summary
- town comparison map
- service/coast/inland distinctions
- regional buyer guides
- links to town guides and listing

**What does not belong here**
- duplicate full town profiles
- tourism-only material detached from buying decisions

**Required structured data**
- `Place`
- breadcrumb

**Structured content fields**
- `areaEntity`, `comparisonTargets`, `localContext`, `internalLinkGraph`

---

### 5. Town guide page
**Purpose**
- Own one town as an entity and explain why a buyer would compare it.

**Primary intent**
- informational + pre-commercial comparison

**Target query patterns**
- `[town] real estate`
- `[town] property`
- `[town] houses for sale`
- `[town] lifestyle`

**What belongs here**
- clear town identity
- who it suits
- access / service / lifestyle notes
- events and cultural signals
- comparison links to other towns and listing

**What does not belong here**
- generic regional buying advice
- repeated property spotlight copy

**Required structured data**
- `Place`
- breadcrumb

**Structured content fields**
- `areaEntity`, `lifestyleHighlights`, `localContext`, `comparisonTargets`, `mediaAssets`, `internalLinkGraph`

---

### 6. Buyer-guide article
**Purpose**
- Answer a buyer-process question that is broader than one location.

**Primary intent**
- informational with commercial relevance

**Target patterns**
- `buying acreage rural victoria`
- `how to inspect lifestyle property`
- `weekender property checklist`

**What belongs here**
- methodology
- trade-offs
- checklists
- process explanations
- links to listing and relevant guides

**What does not belong here**
- thin keyword variants of town pages

**Required structured data**
- `BlogPosting`
- breadcrumb

**Structured fields**
- `articleMeta`, `internalLinkGraph`, `mediaAssets`

---

### 7. Comparison article
**Purpose**
- Compare towns, buyer profiles, or location modes.

**Primary intent**
- side-by-side choice support

**When justified**
- only when the comparison is a distinct user need and not just a rephrased town guide

**Required structured data**
- `BlogPosting`
- breadcrumb

**Structured fields**
- `comparisonTargets`, `articleMeta`, `internalLinkGraph`

---

### 8. Property spotlight article
**Purpose**
- Support the main listing with one clearly distinct angle.

**Rules**
- keep few
- each must have a materially different role
- do not endlessly proliferate

**Recommended future cap per site**
- 2 to 4 strong ones, not 6+

---

### 9. Buyer-fit page
**Purpose**
- Explain who the property is best for and who it is not for.

**Justification**
- this is distinct from the listing if the page is framed around buyer suitability rather than feature repetition

**Status for Springbank**
- justified as a future candidate
- not mandatory if the homepage absorbs this strongly enough

---

### 10. Trust / methodology page
**Purpose**
- Explain sourcing, regional guide methodology, and editorial approach.

**Status for Springbank**
- useful for the future builder system
- lower priority for this single site

## C. Structured Content Model Proposal

### `siteConfig`
**Required fields**
- `siteName`
- `siteUrl`
- `brandLabel`
- `defaultMetaTitle`
- `defaultMetaDescription`
- `defaultShareImage`
- `contactEmail`
- `contactPhone`
- `agentName`
- `agentRole`
- `agencyName`
- `agencyUrl`

**Optional fields**
- `gaMeasurementId`
- `adsMeasurementId`
- `socialLinks`
- `copyrightLabel`

**Static vs listing-specific**
- mostly template/static per site

**Where it should live**
- `data/site-config.ts`

**Consumers**
- metadata helpers
- footer
- navigation
- schema utilities

---

### `propertyEntity`
**Required fields**
- `slug`
- `addressLine`
- `streetAddress`
- `locality`
- `region`
- `postalCode`
- `country`
- `headline`
- `shortDescription`
- `fullDescription`
- `lat`
- `lng`
- `listingStatus`

**Optional fields**
- `nickname`
- `videoUrl`
- `portalLinks`
- `externalListingId`

**Static vs listing-specific**
- listing-specific

**Where**
- `data/property.ts`

**Consumers**
- property page
- open-home page
- schema
- contact CTA blocks

---

### `propertyFacts`
**Required fields**
- `bedrooms`
- `bathrooms`
- `parking`
- `landSize`
- `landUnit`
- `floorArea`
- `floorAreaUnit`
- `priceDisplay`
- `priceNumeric`
- `featureBullets[]`

**Optional fields**
- `heating`
- `cooling`
- `sustainability`
- `studioArea`
- `gardenDesigner`
- `vineyard`
- `walkingTrack`

**Where**
- `data/property.ts`

**Consumers**
- hero facts
- facts panels
- schema
- open-home expectations

---

### `buyerFit`
**Required fields**
- `bestFor[]`
- `lessSuitableFor[]`
- `primaryUseCases[]`
- `tradeoffs[]`
- `decisionSummary`

**Optional fields**
- `fullTimeLivingNotes[]`
- `weekenderNotes[]`
- `guestCapacityNotes[]`

**Where**
- `data/property.ts`

**Consumers**
- homepage buyer-fit section
- potential buyer-fit page
- property spotlight articles

---

### `areaEntity`
**Required fields**
- `slug`
- `name`
- `type`
- `metadataTitle`
- `metadataDescription`
- `schemaDescription`
- `heroImage`
- `intro`
- `proximityNote`

**Optional fields**
- `lat`
- `lng`
- `postalCode`
- `serviceRole`
- `coastalRole`

**Where**
- `data/areas.ts`

**Consumers**
- regional hub and town guide templates
- schema
- metadata

---

### `lifestyleHighlights`
**Required fields**
- `quickNotes[]`
- `thingsToDo[]`
- `events[]`

**Optional fields**
- `seasonalNotes[]`
- `buyerSignals[]`

**Where**
- `data/areas.ts`

**Consumers**
- town guide pages
- regional page

---

### `localContext`
**Required fields**
- `overviewParagraphs[]`
- `sourceLinks[]`
- `stats[]`
- `factsPanels[]`

**Optional fields**
- `serviceAccess[]`
- `schoolHealthNotes[]`
- `transportNotes[]`

**Where**
- `data/areas.ts`

**Consumers**
- town guide pages
- regional hub

---

### `comparisonTargets`
**Required fields**
- `label`
- `href`
- `comparisonAngle`

**Optional fields**
- `whyDifferent`

**Where**
- `data/areas.ts` or article config

**Consumers**
- guide pages
- comparison pages
- related-links blocks

---

### `trustMethodology`
**Required fields**
- `sourcingApproach[]`
- `updatePolicy`
- `editorialPrinciples[]`

**Optional fields**
- `contentDisclaimer`
- `licensePolicy`

**Where**
- `data/trust.ts`

**Consumers**
- future trust page
- builder-level reuse

---

### `articleMeta`
**Required fields**
- `slug`
- `title`
- `seoTitle`
- `seoDescription`
- `excerpt`
- `publishedAt`
- `updatedAt`
- `categories[]`
- `tags[]`
- `author`
- `publisher`
- `heroImage`

**Optional fields**
- `relatedGuideLinks[]`
- `sourceUrl`
- `questionSummary[]`

**Where**
- `data/articles.ts` or `content/articles/*.ts`

**Consumers**
- blog template
- metadata
- schema

---

### `internalLinkGraph`
**Required fields**
- `primaryLinksIn[]`
- `primaryLinksOut[]`
- `anchorVariants[]`

**Optional fields**
- `avoidAnchors[]`
- `lateralLinks[]`

**Where**
- `data/internal-links.ts`

**Consumers**
- page templates
- related guide components
- future builder enforcement

---

### `mediaAssets`
**Required fields**
- `id`
- `src`
- `alt`
- `caption`
- `category`
- `usage[]`

**Optional fields**
- `credit`
- `license`
- `sourceUrl`
- `priority`
- `dimensions`

**Where**
- `data/media.ts`

**Consumers**
- gallery
- hero
- blog
- metadata
- schema

---

### `schemaConfig`
**Required fields**
- `enableWebsiteSchema`
- `enableOrganizationSchema`
- `enableListingSchema`
- `enableBreadcrumbs`

**Optional fields**
- `enableEventSchema`
- `enableArticleSchema`
- `customSchemaNotes`

**Where**
- `data/schema-config.ts`

**Consumers**
- `lib/site-schema.ts`
- page metadata utilities

## D. Property Page Blueprint

### New section blueprint for the property home page

#### 1. Hero with direct-answer summary
Purpose:
- immediately answer what the property is, where it is, and why it matters

Contents:
- intent-led H1
- address line
- short direct answer paragraph
- price
- primary CTAs
- compact fact row

Sample direct-answer summary:
> 30 O'Malleys Rd, Mardan is a 5-acre South Gippsland lifestyle property for sale, positioned between Leongatha, Meeniyan and Mirboo North. It combines a Tuscan-inspired Mediterranean residence, fully double glazed main living spaces, passive solar comfort, mature Robert Boyle-designed gardens, a dam, and a poured-earth studio suited to year-round use.

#### 2. What this property is
Purpose:
- define the asset clearly in one place

Contents:
- short identity paragraph
- 4 to 6 fact panels
- “not just styling” emphasis

Sample rewrite:
> This is not simply a scenic country home. It is a substantial split-level acreage residence designed for long-term liveability, guest flexibility, and everyday thermal comfort. The main dwelling, lower level, gardens, and separate poured-earth studio each contribute to a property that works as a genuine full-time base rather than a presentation-only lifestyle holding.

#### 3. Key facts and commercial highlights
Purpose:
- machine-readable and skim-friendly retrieval unit

Contents:
- bedrooms / bathrooms / land size / parking / studio / heating-cooling / gardens
- short proof-oriented highlights beneath

#### 4. Who this property suits
Purpose:
- answer buyer-fit questions directly

Contents:
- best for
- less suitable for
- use cases
- concise trade-offs

Sample rewrite:
> This property is best suited to buyers who want a long-stay regional base with privacy, flexible guest accommodation, and strong nearby township access. It suits permanent movers, premium weekender buyers, and households that value separate activity zones. It is less suited to someone seeking a low-maintenance compact holding or a beach-town address with walk-to-town convenience.

#### 5. Why this location works
Purpose:
- explain Mardan as a strategic base rather than an obscure address

Contents:
- service-town access
- village access
- Prom/coast reach
- internal links to area pages

#### 6. What to know before buying
Purpose:
- introduce balanced, trust-building realism

Contents:
- acreage maintenance
- distance from beach towns
- why this is an inland base rather than a coastal address
- practical inspection notes

Sample rewrite:
> Buyers should approach this as an inland South Gippsland lifestyle holding, not a walkable village or beach-town property. Its strength is the combination of privacy, usable land, thermal comfort, and regional access. That means the right comparison set is not small-town convenience alone, but larger lifestyle holdings near the service corridor between Leongatha, Meeniyan and Mirboo North.

#### 7. Media and proof section
Purpose:
- support visual understanding with richer context

Contents:
- better captions
- category framing
- links to full gallery
- map or plan card

#### 8. Supporting guide links
Purpose:
- move users into the next best supporting pages without weakening the main page

Contents:
- 3 to 5 relevant guides
- 1 area cluster
- 1 buyer methodology cluster

#### 9. Final commercial CTA block
Purpose:
- inspection or enquiry action

Contents:
- contact
- open-home
- price-guide PDF

## E. Supporting Page Blueprints

### Town guide blueprint
Section order:
1. town/entity summary
2. why buyers compare this location
3. overview / service or character cues
4. quick lifestyle notes
5. things to do that signal long-stay quality
6. events / culture block
7. buyer guides for this town
8. comparison with nearby towns and listing
9. final CTA back to listing

### Regional hub blueprint
Section order:
1. what South Gippsland is for buyers
2. coast vs village vs inland logic
3. major town comparison grid
4. buyer guides cluster
5. regional stats / context
6. link to listing and inspection

### Buyer-guide article blueprint
Section order:
1. short answer summary
2. context paragraph
3. main sections
4. “buyer takeaways” box
5. related area guides
6. compare with the listing
7. CTA

### Comparison page blueprint
Section order:
1. what is being compared and why
2. who each option suits
3. strengths / constraints matrix
4. when one is better than another
5. internal links to each entity page
6. CTA to listing if relevant

## F. Internal Linking Model

### Link roles
- **Hub pages**: `/`, `/south-gippsland`, `/blog`
- **Support pages**: town guides, open-home, gallery, buyer-guide articles
- **Lateral pages**: town-to-town comparisons and related buyer guides

### Rules
1. Every support page should have one clear path back to the listing.
2. Every town guide should link to:
   - the listing page
   - 1 to 3 relevant buyer guides
   - 1 to 2 lateral town comparisons where natural
3. Buyer-guide articles should link to:
   - the listing page once
   - one relevant area page
   - one additional related article or town guide
4. Avoid linking the same commercial anchor repeatedly in one page.

### Anchor text rules
Use a rotating set of natural commercial anchors:
- `Mardan property for sale`
- `South Gippsland lifestyle property for sale`
- `this 5-acre Mardan listing`
- `view the full property listing`
- `open-home details`

Avoid:
- stuffing `acreage for sale south gippsland` repeatedly
- linking every mention of a town name

### Over-linking thresholds
- listing page: 4 to 8 strong internal links out is enough
- town guide: 4 to 6 strategic internal links out is enough
- blog article: 3 to 5 meaningful internal links is enough

## G. Metadata + Schema Plan

### Title patterns
- Property home: `Primary buyer keyword | Address + locality`
- Town guide: `[Town] Real Estate Guide | [Town] Property and Buyer Context`
- Regional hub: `South Gippsland Real Estate Guide | Houses, Acreage and Lifestyle`
- Buyer-guide article: `Question-led title | South Gippsland Real Estate Blog`
- Property spotlight article: `Property-led title | Mardan Property for Sale`

### Meta descriptions
- 140 to 160 chars target
- must answer the page’s actual job
- should describe what the page helps the user decide

### Canonicals
- keep explicit page-level canonicals
- no query-indexing for category/tag filtered blog states

### Open Graph / Twitter
- continue current page-level OG usage
- keep one clear representative image per page
- use the same canonical hero/share URL unless a page needs a distinct one

### Schema plan
Use only:
- `WebSite`
- `Organization`
- `RealEstateListing`
- `Event`
- `CollectionPage`
- `BlogPosting`
- `Place`
- `BreadcrumbList`

Do not use:
- `FAQPage`
- `LocalBusiness`
- `Review`
- `Product`

### Author / publisher consistency
- keep `Dean Jones` as author default for blog posts where relevant
- keep `One Lifestyle Real Estate` as publisher
- use visible date and reading-time support on articles

### Utility recommendation
Refactor metadata/schema helpers into a more explicit utility layer, for example:
- `lib/seo/page-metadata.ts`
- `lib/seo/schema.ts`
- `lib/seo/title-patterns.ts`

## H. Media Methodology

### Filenames
- concise
- location + subject, not keyword stuffing
- no `springbank` in filenames unless branding is genuinely necessary

### Alt text
- describe what is actually visible
- avoid repeating generic sales phrases
- make alt text image-specific

### Captions
- use captions to explain why the image matters to the buyer, not just what it shows

### Gallery order
1. strongest broad setting / hero image
2. exterior identity
3. main living areas
4. kitchen / core functional spaces
5. lower-level flexibility
6. studio / ancillary structure
7. grounds / views
8. plans

### Contextual placement
- listing page: strongest commercial images only
- town pages: local Wikimedia image + maybe map/context image if distinct
- blog pages: use supporting images only where they deepen understanding

## I. Staged Implementation Plan

### Stage 1: low-risk SEO and retrieval improvements
**Goal**
- strengthen metadata, schema, internal links, and answer visibility without major structural changes

**Likely files**
- `app/page.tsx`
- `components/hero-section.tsx`
- `components/overview-section.tsx`
- `components/features-section.tsx`
- `components/blog-preview-section.tsx`
- `app/blog/[slug]/page.tsx`
- `lib/site-schema.ts`

**Risks**
- over-expansion of the homepage
- cluttering existing sections

**Dependencies**
- content model proposal agreed

**Tests**
- `npx tsc --noEmit`
- `npm run build`
- live metadata check
- schema check

### Stage 2: content-model refactor and template abstraction
**Goal**
- move from bespoke content blocks toward reusable structured objects

**Likely files**
- new `data/` folder
- `lib/content-model.ts`
- `lib/seo/*`
- `components/town-guide-page.tsx`
- old bespoke guide pages

**Risks**
- accidental regression in current guide content

**Dependencies**
- Stage 1 complete

**Tests**
- route parity
- metadata parity
- schema parity

### Stage 3: property-page redesign
**Goal**
- make the homepage a stronger answer-rich commercial page

**Likely files**
- `components/hero-section.tsx`
- `components/overview-section.tsx`
- `components/features-section.tsx`
- new components such as:
  - `answer-summary-section`
  - `buyer-fit-section`
  - `facts-panel`
  - `what-to-know-section`

**Risks**
- losing current commercial sharpness if the page becomes essay-like

**Tests**
- layout integrity
- CTA visibility
- copy scannability

### Stage 4: supporting-page rewrites or additions
**Goal**
- migrate older bespoke pages into stronger, reusable templates
- add only justified page types

**Likely files**
- `app/leongatha/page.tsx`
- `app/meeniyan/page.tsx`
- `app/mirboo-north/page.tsx`
- `app/wilsons-promontory/page.tsx`
- `app/south-gippsland/page.tsx`
- new optional buyer-fit page if approved

**Risks**
- cannibalisation if new pages are added too freely

**Tests**
- internal-link consistency
- unique metadata and page role clarity

### Stage 5: cleanup, redirects, sitemap, indexing review
**Goal**
- remove duplication, tighten page roles, and prepare indexing review

**Likely files**
- `app/sitemap.ts`
- `app/robots.ts`
- blog/topic inventory
- redirects if any URL consolidation is approved

**Risks**
- changing URLs without a redirect plan

**Tests**
- sitemap coverage
- canonical correctness
- redirect validation if used

## J. Example Content Rewrites

### Example: direct-answer summary for homepage
> 30 O'Malleys Rd, Mardan is a 5-acre South Gippsland lifestyle property for sale with a Tuscan-inspired Mediterranean residence, fully double glazed main living spaces, passive solar comfort, mature Robert Boyle-designed gardens, a dam, and a separate poured-earth studio. It sits within practical reach of Leongatha, Meeniyan, and Mirboo North, making it stronger as a long-stay regional base than a purely scenic weekender.

### Example: buyer-fit section opener
> This property suits buyers who want a genuine regional base with privacy, landscape depth, guest flexibility, and room to settle into everyday use. It is particularly strong for full-time movers, premium weekender owners who want a property that can evolve into longer stays, and households that value separation between main living, guest accommodation, and studio space.

### Example: what-to-know-before-buying section opener
> Buyers should assess this property as a substantial inland lifestyle holding rather than a low-maintenance village or coast-side home. Its advantages are privacy, thermal comfort, usable grounds, and access to multiple South Gippsland townships. The right comparison is not a walk-to-cafe address, but other larger holdings that claim long-term liveability without offering the same balance of structure, outlook, and flexibility.

## K. Builder Abstraction Recommendations for Future Sites

### Abstract immediately
- `siteConfig`
- `propertyEntity`
- `propertyFacts`
- `buyerFit`
- `mediaAssets`
- `articleMeta`
- `areaEntity`
- `lifestyleHighlights`
- `internalLinkGraph`
- `schemaConfig`

### Template immediately
- `property-home`
- `open-home-event`
- `gallery`
- `town-guide`
- `buyer-guide-article`
- `comparison-article`

### Abstract later
- `buyer-fit-page`
- `trust-methodology-page`

### What the future builder should enforce
- one page = one primary intent
- explicit content model over freeform copy sprawl
- structured summaries near the top of important pages
- controlled internal-link graph
- limited property spotlight article count
- no auto-generated “AI support pages” without a distinct purpose

