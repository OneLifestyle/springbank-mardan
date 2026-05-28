# Google Indexing Verification Checklist

Use this checklist after deployments that affect redirects, canonicals, robots metadata, sitemap output, or Search Console validation.

## Canonical URL Rules

- Preferred host: `https://springbankmardan.com`
- Do not submit redirecting variants for indexing:
  - `https://www.springbankmardan.com/`
  - `http://springbankmardan.com/`
  - `http://www.springbankmardan.com/`
- These variants should redirect permanently to the preferred HTTPS non-`www` URL.

## Header Checks

Run these after deployment:

```bash
curl -I -sS https://springbankmardan.com/
curl -I -sS https://www.springbankmardan.com/
curl -I -sS http://springbankmardan.com/
curl -I -sS http://www.springbankmardan.com/
curl -I -sS https://springbankmardan.com/sitemap.xml
curl -I -sS https://springbankmardan.com/blog/springbank-inspection-notes-five-details-buyers-notice-first-at-30-omalleys-road
```

Expected results:

- `https://springbankmardan.com/` returns `200`.
- Non-canonical host/protocol variants redirect to `https://springbankmardan.com/`.
- `/sitemap.xml` returns `200`; it is a discovery file and does not need to appear as an indexed search result.
- The inspection blog post returns `200` and has a self-canonical URL.

## SEO Surface Checks

- `/robots.txt` allows crawling and points to `https://springbankmardan.com/sitemap.xml`.
- `/sitemap.xml` contains only `https://springbankmardan.com` URLs.
- Important content pages do not contain `noindex`.
- Intended utility/archive URLs may remain `noindex`, including enquiry confirmation and paginated archive pages.

## Search Console Follow-Up

- Use URL Inspection on the canonical URL, not redirecting variants.
- Re-run validation only for issues where a real change was deployed.
- Treat `Page with redirect` on non-canonical host/protocol variants as expected while Google consolidates signals.
- Treat `Crawled - currently not indexed` for `/sitemap.xml` as non-actionable unless sitemap fetching fails.
