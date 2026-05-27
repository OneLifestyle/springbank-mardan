# Springbank Mardan SEO, AEO and Schema Audit

Date: 27 May 2026
Site: https://springbankmardan.com
Repository: Next.js App Router microsite for Springbank, 30 O'Malleys Road, Mardan VIC 3953

## 1. Audit Position

Google's current public guidance for AI features is consistent with normal search-quality fundamentals: make useful, crawlable pages, use accurate visible content, and avoid AI-only optimisation tricks. There is no special Google markup required for AI Overviews or AI Mode. Structured data remains useful when it accurately describes visible content, and JSON-LD is the preferred implementation pattern.

References reviewed:
- Google Search Central: AI features and your website: https://developers.google.com/search/docs/appearance/ai-features
- Schema.org RealEstateListing: https://schema.org/RealEstateListing
- Schema.org Offer: https://schema.org/Offer
- Schema.org SingleFamilyResidence: https://schema.org/SingleFamilyResidence

## 2. Repository Audit

Framework and routing:
- Framework: Next.js 16 App Router.
- Public static routes include `/`, `/gallery`, `/open-home`, `/contact`, `/enquiry-submitted`, `/questions`, township/location pages, and blog collection/detail/facet routes.
- Dynamic static routes include `/blog/[slug]`, blog category/tag pagination routes, and `/questions/[slug]`.
- Content storage is mostly TypeScript objects in `lib/blog.ts`, `lib/town-guides.ts`, `lib/aeo-questions.ts`, `lib/gallery.ts`, and `lib/springbank-config.ts`.
- The site is partly template-driven: new township pages use `components/town-guide-page.tsx`, blog uses shared `app/blog/page.tsx` and `app/blog/[slug]/page.tsx`, and the homepage consumes `lib/springbank-config.ts`.

Metadata and indexability:
- Most major routes have explicit metadata, descriptions, canonical URLs, Open Graph metadata, and page-specific images.
- `app/robots.ts` allows crawling and points to the canonical sitemap.
- `app/sitemap.ts` includes core static routes, question pages, and all blog posts.
- Faceted query URLs are redirected in `proxy.ts` to clean canonical category/tag/page URLs.
- Non-canonical hosts are redirected to `https://springbankmardan.com` while localhost is preserved for development.

Schema and structured data:
- Existing JSON-LD was present for `WebSite`, `Organization`, `RealEstateAgent`, `RealEstateListing`, `Event`, `BlogPosting`, `Article`, `FAQPage`, `BreadcrumbList`, and `Place`.
- FAQ schema is used only where FAQ content is visibly rendered.
- Main weakness found: listing schema used separate entities but did not connect them as cleanly as it could. The broker also reused the publisher ID rather than the existing real-estate-agent ID.
- Gallery page had strong visible image/video content but no gallery/media JSON-LD.

Image handling:
- Gallery images are controlled by `lib/gallery.ts`, not by filesystem scanning.
- Blog images are referenced through `lib/blog.ts`; all referenced blog image files were present.
- Recent fix: blog images bypass Next image optimisation where local static image rendering was unreliable.

## 3. Routes Audited

Primary commercial routes:
- `/`
- `/gallery`
- `/open-home`
- `/contact`
- `/enquiry-submitted`

Area and location routes:
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

Question and answer routes:
- `/questions`
- 11 static `/questions/[slug]` pages

Blog routes:
- `/blog`
- 52 static `/blog/[slug]` posts
- `/blog/category/[category]`
- `/blog/category/[category]/page/[page]`
- `/blog/tag/[tag]`
- `/blog/tag/[tag]/page/[page]`
- `/blog/page/[page]`

## 4. Audience to Search Intent Matrix

| Audience | Transactional intent | Local discovery intent | Feature-led intent | Research intent | Site role |
|---|---|---|---|---|---|
| Melbourne / outer-suburban tree-change buyers | lifestyle property for sale South Gippsland; acreage for sale Victoria | South Gippsland tree change; living near Leongatha | private acreage with studio; home with views | what is Mardan near; best towns near Leongatha | Homepage, questions, blog and area guides should convert broad research into inspection confidence. |
| Local South Gippsland upgraders | Mardan property for sale; five-bedroom acreage near Leongatha | Leongatha lifestyle property; Meeniyan acreage | property with dam; separate studio; established gardens | Mardan to Leongatha; Mardan to Meeniyan | Homepage and gallery should show property depth quickly. |
| Established families | five-bedroom lifestyle property Victoria | living in South Gippsland with services nearby | guest accommodation; flexible lower level; garaging | schools/services near Leongatha | Homepage, Leongatha page, FAQ and gallery. |
| Early retirees / semi-retirees | private rural lifestyle property Gippsland | Mirboo North acreage; Meeniyan lifestyle | gardens, walking track, valley outlook | tree change South Gippsland practicalities | Buyer-fit, what-to-know, questions and location sections. |
| Premium weekender buyers | country retreat South Gippsland; property near Wilsons Prom | Prom Country property; Fish Creek / Foster lifestyle | property with studio and dam; mature grounds | coastal vs inland acreage | Blog, Wilsons Prom, Foster, Fish Creek and gallery. |

## 5. Current Issues Found

High priority:
- Main listing schema could better connect `WebPage`, `RealEstateListing`, `Offer`, `SingleFamilyResidence`, image and agent entities through stable `@id` values.
- `broker` on the listing reused the publisher ID instead of the real estate agent ID.
- Gallery page did not expose media-specific JSON-LD despite visible gallery and video content.
- Blog schema named an author, but the author was not visibly displayed on the blog article page.

Medium priority:
- Some older hand-built area pages use one-off `Place` JSON-LD instead of the newer shared town-guide helper. This is acceptable but should be normalised in the future builder.
- Sitemap uses `new Date()` for many static routes. This is not fatal, but future builder versions should track real content update dates.
- There are many tag/category pages. They are now clean canonical paths, but they should be monitored in Search Console for thin or low-value indexation.

Low priority:
- `keywords` metadata is present. It is not harmful, but it has little modern search value.
- Image captions are good on the gallery and blog, but future template versions should store captions centrally in `lib/gallery.ts`.

## 6. Implemented Fixes

Schema graph improvements:
- Reworked the main listing JSON-LD into a connected `@graph` containing:
  - `WebPage`
  - `RealEstateListing`
  - `Offer`
  - `SingleFamilyResidence`
  - primary `ImageObject`
- Reused stable IDs for:
  - `#website`
  - `#publisher`
  - `#real-estate-agent`
  - `#dean-jones`
  - `#property`
  - `#listing`
  - `#offer`
- Corrected the listing `broker` relationship to point to the real-estate-agent entity.
- Kept price schema limited to visible current price information only.
- Did not add rating, reviews, availability, price expiry, awards, or claims not visible on the site.

Gallery media schema:
- Added `getGalleryPageJsonLd()` for `/gallery`.
- Added a connected media graph containing:
  - `CollectionPage`
  - `ImageGallery`
  - `VideoObject`
  - `ImageObject` entries for visible gallery assets
- Connected gallery media back to the property entity.

Blog schema alignment:
- Added a visible blog byline so `BlogPosting.author` is represented on-page.
- Kept blog images absolute and crawlable in JSON-LD.

## 7. Deferred Fixes Requiring Owner Confirmation

These were not implemented because they need business/content confirmation:
- Confirm exact geocoordinates for 30 O'Malleys Road before relying on them long-term in schema. Current coordinates are already in repository content, but owner confirmation would be prudent.
- Confirm whether all authored blog posts should be attributed to Dean Jones or to One Lifestyle Real Estate as an organisation.
- Confirm whether the property film has an official upload date and thumbnail. `VideoObject.uploadDate` was not added because it was not visible in repository content.
- Confirm whether any external portal status changes should alter schema status or offer details.
- Decide whether tag archive pages should remain indexable if Search Console reports low-quality or duplicate coverage.

## 8. Schema Types Added or Changed

Changed:
- `RealEstateListing`: now part of a connected graph and linked to `Offer`, `SingleFamilyResidence`, `WebPage`, and `RealEstateAgent`.
- `Offer`: now has a stable `@id` and `itemOffered` relationship.
- `SingleFamilyResidence`: now has a stable property `@id`.
- `BlogPosting`: author now has a stable person `@id` and visible byline alignment.

Added:
- `ImageObject` for primary listing image and gallery images.
- `ImageGallery` for `/gallery`.
- `VideoObject` for the property film visible on `/gallery`.
- `CollectionPage` graph entity for `/gallery`.

Unchanged:
- `FAQPage` remains only where FAQ content is visible.
- `BreadcrumbList` remains page-level via `BreadcrumbJsonLd`.
- `Place` remains on area/town guide pages.

## 9. Recommendations

First priority:
- Keep updating open-home dates and visible FAQ answers whenever campaign details change.
- Keep submitting new canonical blog and question URLs in Search Console after content blocks are added.
- Review Search Console after 2-4 weeks to see whether clean category/tag archive URLs are being indexed usefully.

Second priority:
- Convert the older bespoke area pages to the shared town-guide content model over time.
- Add real `lastUpdated` fields for core pages and use those in sitemap instead of `new Date()`.
- Expand gallery image captions in `lib/gallery.ts` so both visible captions and `ImageObject.caption` draw from one source.

Lower priority:
- Consider adding a visible property video transcript or short summary if video discovery becomes important.
- Consider adding route-level `WebPage` JSON-LD helper for all major page types, but only if it remains maintainable.

## 10. Risks and Assumptions

- The schema uses the current visible price guide of `$1.195m` / `1195000 AUD` from repository content.
- The schema uses address, agent, feature, and open-home details already visible on the site.
- No `llms.txt` was added because it is not a Google Search or AI Overview requirement.
- No new doorway, thin, or keyword-variant pages were created.
- The site's best AI-discovery path remains useful human-readable content, consistent entity signals, crawlable media, and clear internal links.

## 11. Validation Commands

Commands to run after the audit changes:

```bash
npx tsc --noEmit
npm run lint
npm run build
```

Manual validation recommended:
- Inspect `/` source for the connected listing graph.
- Inspect `/gallery` source for media graph JSON-LD.
- Validate key URLs in Google's Rich Results Test or Schema Markup Validator.
- Recheck Search Console for canonical and indexation status after deployment.
