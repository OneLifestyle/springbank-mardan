# Springbank / Real Estate Builder Content Model Proposal

## Recommended data folders
- `data/site-config.ts`
- `data/property.ts`
- `data/areas.ts`
- `data/articles.ts`
- `data/media.ts`
- `data/internal-links.ts`
- `data/schema-config.ts`
- `data/trust.ts`

## Recommended object map
- `siteConfig`
- `propertyEntity`
- `propertyFacts`
- `buyerFit`
- `areaEntity`
- `lifestyleHighlights`
- `localContext`
- `comparisonTargets`
- `articleMeta`
- `internalLinkGraph`
- `mediaAssets`
- `schemaConfig`
- `trustMethodology`

## Migration notes from the current repo
Current closest equivalents:
- `lib/site-schema.ts` -> `siteConfig`, `schemaConfig`, `propertyEntity`
- `lib/gallery.ts` -> `mediaAssets`
- `lib/blog.ts` -> `articleMeta`
- `lib/town-guides.ts` -> `areaEntity`, `lifestyleHighlights`, `localContext`, `comparisonTargets`

The migration should be incremental. Do not rewrite all current content into a new data model in one pass.
