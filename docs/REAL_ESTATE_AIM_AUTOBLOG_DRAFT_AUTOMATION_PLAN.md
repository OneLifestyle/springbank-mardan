# Plan: Automated AI Blog Drafting + Email Approval Workflow (No CMS, Firestore-backed)

## Summary
Build a lightweight editorial system inside the existing Next.js site so the platform can:
1. Generate draft blog posts weekly using OpenAI.
2. Store drafts in Firebase/Firestore (not in `lib/blog.ts`).
3. Email you a secure approval request.
4. Let you review/edit in a private admin screen.
5. Require explicit **Approve** and then **Publish** (two-step gate) before going live.

This keeps editorial control with you while removing manual draft writing from Codex-only workflows.

---

## Scope and Architecture

### Current state (confirmed)
- Blog content is static in `lib/blog.ts`.
- Blog index/detail pages read from in-memory arrays.
- Email infrastructure already exists via Resend (`app/api/contact/route.ts`).
- No CMS/database today.

### Target state
- Firestore becomes source-of-truth for blog posts and draft lifecycle.
- Existing static posts are migrated into Firestore as published records.
- Public blog routes render from Firestore (published only).
- Private admin routes manage drafts and publish flow.
- Scheduled generation runs weekly and sends approval email.

---

## Data Model (Firestore)

### Collection: `blogPosts`
Document ID: `slug`

Fields:
- `slug: string`
- `title: string`
- `excerpt: string`
- `publishedAt: string | null` (ISO date)
- `updatedAt: string` (ISO datetime)
- `readingTimeMinutes: number`
- `categories: string[]`
- `tags: string[]`
- `heroImage: { src: string; alt: string; caption?: string }`
- `intro: string[]`
- `sections: { heading: string; paragraphs: string[]; image?: { src; alt; caption? } }[]`
- `featureListTitle: string`
- `featureList: string[]`
- `galleryTitle: string`
- `gallery: { src: string; alt: string; caption?: string }[]`
- `imageCredits?: { label; sourceUrl; author; licenseName; licenseUrl }[]`
- `ctaTitle: string`
- `ctaBody: string`
- `status: "draft" | "approved" | "published" | "rejected"`
- `authorType: "ai" | "human"`
- `generationMeta?: { model: string; promptVersion: string; runId: string }`
- `reviewNotes?: string`
- `approvedAt?: string`
- `rejectedAt?: string`
- `publishedBy?: string`

### Collection: `blogGenerationRuns`
Document per run:
- `runAt`
- `status: "ok" | "failed" | "partial"`
- `draftSlug?`
- `error?`
- `tokensUsed?`
- `topicSeed`

### Collection: `blogApprovalTokens`
Document ID: random token hash
- `postSlug`
- `action: "approve" | "reject"`
- `expiresAt`
- `usedAt?`
- `recipientEmail`
- `nonce`

---

## Public API/Interface Changes

### New server modules
- `lib/blog-store.ts`: Firestore read/write for posts, filters, pagination.
- `lib/blog-generation.ts`: OpenAI prompting + JSON schema validation.
- `lib/blog-topics.ts`: topic rotation/anti-duplication logic.
- `lib/blog-images.ts`: approved image pools (property + Wikimedia metadata).

### New API routes
1. `POST /api/cron/generate-blog-draft`
- Protected by cron secret.
- Runs weekly generation pipeline.
- Creates `draft` post.
- Sends review email with secure approve/reject links.

2. `GET /api/blog/approve?token=...`
- Validates token, marks draft `approved`, invalidates token.

3. `GET /api/blog/reject?token=...`
- Validates token, marks draft `rejected`, invalidates token.

4. `POST /api/admin/blog/publish`
- Body: `{ slug }`
- Requires admin auth.
- Transitions `approved -> published`, sets `publishedAt`.

5. `POST /api/admin/blog/update-draft`
- Saves manual edits before publish.

### Admin UI routes
- `/admin/blog`
  - Tabs: Drafts, Approved, Published, Rejected.
- `/admin/blog/[slug]`
  - Full editor preview (title, sections, images, tags, schema preview).
  - Buttons: Approve / Reject / Publish.

### Existing page changes
- `app/blog/page.tsx` and `app/blog/[slug]/page.tsx` switch from `lib/blog.ts` to Firestore queries.
- `app/sitemap.ts` includes only `published` posts.
- `generateStaticParams` removed or replaced (use dynamic rendering + caching strategy).

---

## Generation Workflow (Decision-complete)

### Weekly job sequence
1. Cron calls `/api/cron/generate-blog-draft`.
2. Select topic:
- Rotate among:
  - 80% regional/buyer-guide topics.
  - 20% Springbank-specific topics.
- Reject candidates too similar to last N published titles/slugs (N=20, cosine/title overlap heuristic).

3. Build prompt pack:
- Brand voice rules from existing posts.
- Required output JSON schema matching `BlogPost`.
- Allowed image pool:
  - Property images from `/public/images/springbank/highlights` + `/gallery-full`.
  - Wikimedia image set with required credit fields.

4. Generate with OpenAI (structured JSON output).
5. Validate:
- Zod schema validation.
- Required fields non-empty.
- Slug uniqueness.
- Image path exists in approved pool.
- Min/Max content constraints (e.g., 700–1400 words, 4–6 sections).
6. Save as `status="draft"`.
7. Email review request through Resend:
- Subject: `Draft ready for review: {title}`
- Includes:
  - Preview summary
  - Approve link (tokenized)
  - Reject link (tokenized)
  - "Open editor" link
8. Log run in `blogGenerationRuns`.

---

## Email Approval + Security

### Token behavior
- Signed + hashed token stored server-side.
- One-time use.
- Expiry: 72 hours.
- Action locked to token type (approve/reject).
- Token invalid after first successful action.

### Admin auth
- Firebase Auth email sign-in (single admin email allowlist).
- Middleware protects `/admin/*` and admin APIs.
- Email token actions (`/api/blog/approve|reject`) do not require session, only valid token.

---

## Content Quality and Editorial Guardrails

- Prompt constraints:
  - No fabricated facts/prices/dates.
  - No legal/financial advice language.
  - Use neutral, factual AU-English style.
- Automatic checks before saving draft:
  - Title length 45–80 chars.
  - Excerpt length 120–220 chars.
  - At least 4 tags and 2 categories.
  - No repeated paragraph text.
- Reject and regenerate if validation fails (up to 2 retries).
- Store `generationMeta` for auditability.

---

## Migration Plan (from static `lib/blog.ts`)

1. Build one-time script: `scripts/migrate-blog-to-firestore.ts`.
2. Parse existing `posts` array and upsert with:
- `status="published"`
- preserve `publishedAt/updatedAt`.
3. Keep `lib/blog.ts` temporarily as fallback during rollout.
4. Cutover reads to Firestore.
5. Remove fallback after verification period (1 week).

---

## Caching/Rendering Strategy

- Public blog pages rendered dynamically with caching:
  - `revalidate = 300` seconds on index/detail pages.
- On publish action:
  - call `revalidatePath("/blog")`
  - call `revalidatePath("/blog/[slug]")`
  - trigger sitemap regeneration via route revalidation.

---

## Environment Variables

Add:
- `FIREBASE_PROJECT_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY`
- `FIREBASE_AUTH_DOMAIN`
- `FIREBASE_ADMIN_ALLOWLIST` (comma-separated emails)
- `OPENAI_API_KEY`
- `BLOG_GENERATION_MODEL` (default `gpt-5-mini` or chosen model)
- `BLOG_CRON_SECRET`
- `BLOG_APPROVAL_TOKEN_SECRET`
- `BLOG_APPROVAL_EMAIL_TO` (your inbox)
- Existing `RESEND_API_KEY` reused.

---

## Test Cases and Scenarios

### Unit tests
- Schema validation accepts valid generated payload.
- Slug dedupe logic.
- Topic rotation excludes recent duplicates.
- Token generation/expiry/one-time-use behavior.

### Integration tests
- Cron endpoint creates a draft and sends email.
- Approve link changes status to `approved`.
- Publish API only allows `approved` posts.
- Public blog pages exclude draft/approved/rejected states.
- Sitemap includes only published posts.

### Manual UAT
1. Trigger generation manually.
2. Receive email, click Approve.
3. Open admin editor, make minor edits.
4. Publish.
5. Verify `/blog`, `/blog/{slug}`, and sitemap update.
6. Verify rejected drafts never surface publicly.

---

## Rollout Plan

1. Implement Firestore model + migration + read path.
2. Implement admin auth + dashboard/editor.
3. Implement generation endpoint + validation + email.
4. Enable weekly cron.
5. Soft launch with `generation disabled` flag for dry-runs.
6. Enable live generation after 2 successful dry-runs.

---

## Assumptions and Defaults Chosen

- Database: **Firebase/Firestore** (per your preference).
- AI provider: **OpenAI API**.
- Cadence: **Weekly generation**.
- Approval mode: **Email secure approve/reject links**.
- Publish gate: **Approve first, then explicit Publish click** in admin.
- Deployment remains on current Next.js stack (with scheduled cron support in hosting config).
