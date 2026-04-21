# MySpanishDNV.com — Site Strategy, Sitemap & 90-Day Build Plan

**Prepared:** 2026-04-16
**Primary domain:** myspanishdnv.com (+ .es redirect)
**Dashboard (whitelabel, external):** https://dashboard.platinumlegalspain.com/dnv and /dnv-renewal
**Objective:** Own the organic SERP for "Spain digital nomad visa" and related clusters; funnel qualified leads into the whitelabel dashboard.

---

## 1. Positioning Summary

**One-line positioning:** The fastest, most transparent way to get Spain's Digital Nomad Visa — backed by real Spanish immigration lawyers, managed through a 24/7 online dashboard.

**Competitive moats:**
1. **Exact-match domain** — MySpanishDNV.com is a direct semantic match for the #1 keyword. Google rewards that heavily for new domains.
2. **Platform USP** — A live dashboard. Competitors (Balcells, Lexidy, Bureaucracy.es, Immigration Spain) sell consultations; you sell a product.
3. **Legal credibility** — Whitelabel fulfilment via Platinum Legal Spain. You are not just a referral site.
4. **Transparent pricing** — Milestone-based (€500 / €500 / €899). Competitors hide pricing behind forms.

**Tone of voice:** Confident, plain-English, modern. No legalese unless quoting a statute. Always reassure and always show the next step.

---

## 2. Full Sitemap — MySpanishDNV.com

```
myspanishdnv.com
│
├── / (Home — Pillar page: "Spain Digital Nomad Visa")
│
├── /pricing/                                     → milestone pricing, family discount, what's included
├── /how-it-works/                                → 5-step dashboard flow, screenshots, trust signals
├── /book-a-call/  (or /free-consultation/)       → calendar embed, lead-capture
│
├── /services/
│   ├── /digital-nomad-visa-application/          → main conversion page (CTA → dashboard)
│   ├── /digital-nomad-visa-renewal/              → renewal service page (CTA → /dnv-renewal)
│   ├── /family-application/                      → dependants/spouse/children
│   └── /appeal-rejected-dnv/                     → rejection recovery service
│
├── /requirements/                                → Cluster hub
│   ├── /income-requirements/                     → + income calculator widget
│   ├── /document-checklist/                      → downloadable PDF (lead magnet)
│   ├── /self-employed-freelancer/
│   ├── /remote-employee/
│   ├── /company-owner/
│   ├── /clean-criminal-record/
│   └── /health-insurance-requirement/            → links to spanish-healthinsurance.com
│
├── /application-process/                         → Cluster hub
│   ├── /step-by-step-guide/
│   ├── /uge-vs-consulate/                        → decision tree
│   ├── /processing-time/
│   ├── /what-happens-after-approval/
│   └── /nie-tie-after-dnv/
│
├── /tax/                                         → Cluster hub
│   ├── /dnv-tax-rate-beckham-law/
│   ├── /tax-residency-digital-nomad/
│   ├── /double-taxation-treaties/
│   └── /social-security-digital-nomad/
│
├── /by-country/                                  → Cluster hub (consulate-level)
│   ├── /from-usa/
│   │   ├── /los-angeles-consulate/
│   │   ├── /miami-consulate/
│   │   ├── /new-york-consulate/
│   │   ├── /chicago-consulate/
│   │   ├── /washington-dc-consulate/
│   │   └── /houston-consulate/
│   ├── /from-uk/
│   │   ├── /london-bls/
│   │   ├── /manchester/
│   │   └── /edinburgh/
│   ├── /from-canada/
│   ├── /from-australia/
│   ├── /from-uae/
│   ├── /from-south-africa/
│   ├── /from-new-zealand/
│   └── /from-ireland-non-eu/
│
├── /compare/                                     → Cluster hub
│   ├── /dnv-vs-non-lucrative-visa/
│   ├── /dnv-vs-golden-visa/
│   ├── /dnv-vs-self-employment-visa/
│   └── /dnv-vs-tourist-visa-overstay/
│
├── /renewal/                                     → alias to /services/digital-nomad-visa-renewal/
│   ├── /how-to-renew/
│   ├── /renewal-timeline/
│   └── /after-5-years-permanent-residency/
│
├── /rejection/
│   ├── /common-reasons-for-rejection/
│   ├── /how-to-appeal/
│   └── /reapply-after-denial/
│
├── /blog/                                        → SEO content engine (top of funnel)
│   └── [50+ articles — see Content Plan below]
│
├── /about/
│   ├── /our-law-firm/                            → Platinum Legal Spain trust signals
│   ├── /meet-the-team/
│   ├── /success-stories/                         → testimonials + case studies
│   └── /press/
│
├── /contact/
│
└── /legal/
    ├── /privacy-policy/
    ├── /terms-of-service/
    ├── /cookie-policy/
    └── /refund-policy/                           → critical for trust given €500 upfront
```

**URL conventions:**
- Lowercase, hyphens, no trailing slashes in canonical (pick one — WordPress default is trailing slash; be consistent)
- Primary keyword in slug, concise (3–5 words max where possible)
- No dates in URLs (future-proof for annual updates)

---

## 3. Internal Linking Strategy

The shape you want is a **hub-and-spoke**:

```
          ┌─────────── /requirements/ ────┐
          │                               │
/ (Home)  ├─── /application-process/ ─────┼─── CTA buttons everywhere to:
          │                               │    → /pricing/
          ├─── /tax/ ─────────────────────┤    → /services/digital-nomad-visa-application/
          │                               │    → dashboard.platinumlegalspain.com/dnv
          ├─── /by-country/ ──────────────┤
          │                               │
          └─── /compare/ ─────────────────┘
```

**Rules:**
- Every cluster hub links to all its spokes; every spoke links back to its hub and 2–3 sibling spokes.
- Every page in the site links at least once to `/pricing/` or `/services/digital-nomad-visa-application/`.
- Home page links to all 5 cluster hubs above the fold.
- Blog articles link **up** to the relevant cluster hub (e.g., a blog post about "Beckham Law 2026" links up to `/tax/dnv-tax-rate-beckham-law/`).

---

## 4. Where Yoast / JSON Schema Detail Actually Goes

You asked where this stuff lives — here's the short answer for a WordPress-or-similar site.

### 4.1 What each piece is

| Piece | What it does | Where it appears to Google |
|---|---|---|
| **Title tag** | The clickable blue headline in Google results | Top of SERP listing |
| **Meta description** | The grey snippet under the title | Under the title in SERP |
| **H1** | The main visible heading on the page | On the page itself |
| **Canonical URL** | "This is the real version of this page" signal | Invisible — in `<head>` |
| **Open Graph tags** | How the page looks when shared on Facebook/LinkedIn | Invisible — in `<head>` |
| **Twitter Card tags** | How it looks when shared on X | Invisible — in `<head>` |
| **JSON-LD schema** | Structured data that earns rich results (stars, FAQ dropdowns, breadcrumbs, pricing) | Invisible — in `<head>` or just before `</body>` |

### 4.2 Where you fill them in (Yoast / Rank Math)

If your site is WordPress with **Yoast SEO** (free or premium) or **Rank Math** (recommended for schema control), every time you edit a page you'll see a panel below the main editor:

```
┌─────────────────────────────────────────────────────────┐
│  [Yoast SEO panel — appears under every page/post]      │
│                                                         │
│  🔍 Focus keyphrase:  spain digital nomad visa          │
│                                                         │
│  📝 SEO title:       Spain Digital Nomad Visa 2026...   │
│  📝 Slug:            /                                  │
│  📝 Meta description: Apply for Spain's DNV in 20 days..│
│                                                         │
│  📱 Social previews:  [Facebook] [Twitter]              │
│     — upload OG image (1200x630px)                      │
│                                                         │
│  ⚙️ Schema:          [Page type: WebPage ▼]             │
│                      [Article type: None ▼]             │
│                                                         │
│  🍞 Breadcrumbs:     auto                               │
└─────────────────────────────────────────────────────────┘
```

You fill this out per page. Yoast writes all the invisible `<head>` tags for you. You do not need to touch HTML.

### 4.3 The schema types you need for each page type

This is the part most competitors skip. Schema = rich results = more clicks.

| Page type | Primary schema | Why |
|---|---|---|
| Home | `Organization` + `WebSite` + `BreadcrumbList` | Sitelinks search box in Google |
| Services pages (/services/*) | `Service` + `Offer` + `LegalService` | Shows price in SERP |
| Pricing page | `Service` + `Offer` (with `price`, `priceCurrency: "EUR"`) | Shows "€1,899" in SERP |
| Requirements / guide pages | `Article` + `HowTo` | Step-by-step rich result |
| Blog posts | `Article` or `BlogPosting` | Author, date, image in SERP |
| FAQ sections | `FAQPage` | Expandable Q&A dropdowns in SERP — HUGE click magnet |
| Reviews / testimonials | `Review` + `AggregateRating` | Gold stars in SERP |
| Comparison pages | `Article` + `ItemList` | Comparison table rich result |
| Country pages | `Article` + `Place` (consulate address) | Local context |
| Breadcrumbs (everywhere) | `BreadcrumbList` | Breadcrumb trail in SERP |

**Practical recommendation:** install **Rank Math Pro** (€59/yr) over Yoast. Rank Math has FAQ schema, HowTo schema, Review schema and Local Business schema built in. Yoast charges extra per type.

### 4.4 Per-page "SEO brief" template you can reuse

Every time you brief a writer (or write yourself), fill this out before writing body copy:

```markdown
PAGE: /services/digital-nomad-visa-application/

Focus keyphrase: apply for digital nomad visa spain
Secondary keyphrases: digital nomad visa spain application service, dnv spain lawyer

SEO Title (max 60 chars):
Apply for Spain's Digital Nomad Visa | 24/7 Online

Meta Description (max 155 chars):
Apply for Spain's Digital Nomad Visa online. UGE or consulate, translations included, milestone pricing from €500. Start in minutes.

H1 (visible on page):
Apply for Spain's Digital Nomad Visa — Online, In Days

URL slug: /services/digital-nomad-visa-application/

OG image: og-dnv-application.jpg (1200x630)

Schema to attach:
- Service (name, description, provider, areaServed: ES)
- Offer (price: 1899, priceCurrency: EUR, priceSpecification breakdown)
- FAQPage (5–8 Q&As from the body)
- BreadcrumbList
- LocalBusiness (Platinum Legal Spain address)

Internal links required:
- /pricing/ (anchor: "see the full pricing breakdown")
- /requirements/income-requirements/
- /application-process/step-by-step-guide/
- /tax/dnv-tax-rate-beckham-law/
- dashboard.platinumlegalspain.com/dnv (primary CTA, rel="nofollow sponsored" NOT needed — it's your own dashboard)

External authoritative links (1–2):
- exteriores.gob.es (official Spain govt)
- boe.es (Spain's Startup Law gazette)

Word count target: 2,000–2,800
Images required: hero, dashboard screenshot, team photo, trust badges
```

### 4.5 Site-wide technical must-haves (one-time)

- **SSL certificate** (https everywhere)
- **XML sitemap** at `/sitemap_index.xml` — Rank Math/Yoast generates it. Submit to Google Search Console.
- **Robots.txt** allowing crawl of all public pages, blocking `/wp-admin/`
- **Google Search Console + Bing Webmaster Tools** — verify both
- **Google Analytics 4** (or Plausible for privacy)
- **Core Web Vitals**: hosting fast enough that LCP < 2.5s, CLS < 0.1. Use Cloudflare + a cached host (Kinsta, WP Engine, or SiteGround).
- **Favicon, Apple touch icons, manifest.json** for mobile
- **hreflang tags** between myspanishdnv.com and myspanishdnv.es (if .es gets unique content) — otherwise just 301-redirect .es → .com

---

## 5. 90-Day Build-Priority Roadmap (Pages Ranked)

I've scored every page on:
- **Traffic (T)** 1–10 — realistic monthly search volume
- **Commercial intent (C)** 1–10 — how close to the sale
- **Difficulty (D)** 1–10 — competition & effort (higher = harder)
- **Priority score** = (T × C) ÷ D

### 🏁 Phase 1 — Weeks 1–2: Foundation (MUST SHIP FIRST)

These make the site sellable at all. Ship before any SEO content.

| # | Page | T | C | D | Score | Notes |
|---|---|---|---|---|---|---|
| 1 | Home (pillar) | 10 | 9 | 5 | 18.0 | Exact-match domain — Google will rank this fast |
| 2 | /pricing/ | 6 | 10 | 2 | 30.0 | Non-negotiable for conversion |
| 3 | /how-it-works/ | 5 | 10 | 2 | 25.0 | Your platform USP story |
| 4 | /services/digital-nomad-visa-application/ | 9 | 10 | 6 | 15.0 | Main money page |
| 5 | /services/digital-nomad-visa-renewal/ | 5 | 10 | 3 | 16.7 | Second money page |
| 6 | /about/our-law-firm/ | 3 | 8 | 2 | 12.0 | Trust — needed before buyers click pay |
| 7 | /contact/ | 2 | 7 | 1 | 14.0 | Trivial, ship it |
| 8 | /legal/* (privacy, TOS, refund, cookies) | 1 | 6 | 1 | 6.0 | Required for payments + GDPR |

### 🚀 Phase 2 — Weeks 3–6: SEO Traffic Backbone (Cluster Hubs + Key Spokes)

Go after the biggest single-page traffic wins first.

| # | Page | T | C | D | Score | Notes |
|---|---|---|---|---|---|---|
| 9 | /requirements/ (hub) | 10 | 8 | 7 | 11.4 | Massive search volume |
| 10 | /requirements/income-requirements/ + calculator | 10 | 9 | 6 | 15.0 | Competitors lack a calculator — easy win |
| 11 | /application-process/step-by-step-guide/ | 9 | 8 | 6 | 12.0 | How-to schema target |
| 12 | /tax/dnv-tax-rate-beckham-law/ | 9 | 9 | 7 | 11.6 | Tax content is thin across competitors |
| 13 | /requirements/document-checklist/ | 8 | 9 | 4 | 18.0 | Lead-magnet PDF — high email capture |
| 14 | /application-process/processing-time/ | 8 | 7 | 4 | 14.0 | Competitors don't cover this well |
| 15 | /compare/dnv-vs-non-lucrative-visa/ | 7 | 8 | 5 | 11.2 | High commercial intent |
| 16 | /application-process/uge-vs-consulate/ | 6 | 8 | 4 | 12.0 | Unique to DNV — own it |
| 17 | /requirements/self-employed-freelancer/ | 7 | 8 | 5 | 11.2 | Core persona page |
| 18 | /requirements/remote-employee/ | 7 | 8 | 5 | 11.2 | Core persona page |

### 🌍 Phase 3 — Weeks 7–10: Country / Consulate Pages (Easy Wins)

Competitors are weak here. Each page is short (1,000–1,500 words) but targets long-tail commercial searches.

| # | Page | T | C | D | Score | Notes |
|---|---|---|---|---|---|---|
| 19 | /by-country/from-usa/ (hub) | 9 | 9 | 5 | 16.2 | Biggest audience |
| 20 | /by-country/from-uk/ (hub) | 9 | 9 | 5 | 16.2 | Second biggest |
| 21 | /by-country/from-usa/los-angeles-consulate/ | 6 | 9 | 3 | 18.0 | Near-zero competition |
| 22 | /by-country/from-usa/miami-consulate/ | 6 | 9 | 3 | 18.0 | " |
| 23 | /by-country/from-usa/new-york-consulate/ | 6 | 9 | 3 | 18.0 | " |
| 24 | /by-country/from-uk/london-bls/ | 7 | 9 | 3 | 21.0 | Highest-score UK page |
| 25 | /by-country/from-uk/manchester/ | 5 | 9 | 3 | 15.0 | " |
| 26 | /by-country/from-canada/ | 5 | 9 | 3 | 15.0 | Tiny competitor presence |
| 27 | /by-country/from-australia/ | 4 | 9 | 3 | 12.0 | Easy |
| 28 | /by-country/from-uae/ | 4 | 9 | 2 | 18.0 | Almost nobody covers this — gold |
| 29 | /by-country/from-south-africa/ | 3 | 9 | 2 | 13.5 | Gold |

### 🧩 Phase 4 — Weeks 11–12: Niche + Problem Pages

| # | Page | T | C | D | Score | Notes |
|---|---|---|---|---|---|---|
| 30 | /rejection/common-reasons-for-rejection/ | 7 | 10 | 4 | 17.5 | "Rejected" traffic converts at 3–5× normal |
| 31 | /services/appeal-rejected-dnv/ | 4 | 10 | 3 | 13.3 | Premium service page |
| 32 | /services/family-application/ | 5 | 10 | 3 | 16.7 | Higher-ticket sale |
| 33 | /compare/dnv-vs-golden-visa/ | 6 | 7 | 4 | 10.5 | Commercial comparison |
| 34 | /tax/tax-residency-digital-nomad/ | 6 | 8 | 5 | 9.6 | Tax cluster depth |
| 35 | /renewal/renewal-timeline/ | 4 | 9 | 3 | 12.0 | Retention SEO |

### ✍️ Phase 5 — Weeks 9–12 ongoing: Blog (publish 2–3/week)

Top-priority blog topics (bottom of the list but launch weekly):

- "How much income do you really need for Spain's DNV in 2026?"
- "Spain DNV timeline: what to expect week by week"
- "Beckham Law explained: the 24% tax rule every digital nomad misses"
- "Why Spain's DNV gets rejected — and how to fix it"
- "UGE or consulate? A 2-minute decision guide"
- "Can I work for a UK company on a Spain DNV? (Yes — here's how)"
- "Spain DNV vs Portugal D8: which is actually easier in 2026?"
- "The Spain DNV document checklist you can actually follow"

---

## 6. Content Volume Summary

| Phase | Duration | Pages | Words (approx) |
|---|---|---|---|
| Phase 1 — Foundation | 2 weeks | 8 | ~12,000 |
| Phase 2 — Backbone | 4 weeks | 10 | ~22,000 |
| Phase 3 — Country pages | 4 weeks | 11 | ~16,500 |
| Phase 4 — Niche/problem | 2 weeks | 6 | ~12,000 |
| Phase 5 — Blog (ongoing) | weeks 9–12 | 10–15 | ~20,000 |
| **90-day total** | | **~45 pages** | **~82,500 words** |

At ~$80–120/article through a good freelance writer with SEO briefs, outsourced cost ≈ **€3,500–5,500 for the 90 days** (plus your review time).

---

## 7. Critical Technical SEO Checklist (Launch Week)

- [ ] Domain registrar: verify WHOIS privacy on
- [ ] Hosting: Cloudflare proxy + edge caching
- [ ] WordPress + Rank Math Pro installed
- [ ] SSL live + 301 redirect http → https
- [ ] 301 redirect myspanishdnv.es → myspanishdnv.com (or reverse)
- [ ] 301 redirect non-www ↔ www (pick one canonical)
- [ ] XML sitemap submitted to Google Search Console
- [ ] XML sitemap submitted to Bing Webmaster Tools
- [ ] GA4 + GSC linked
- [ ] robots.txt published
- [ ] Schema markup validated via schema.org validator
- [ ] Core Web Vitals: LCP <2.5s, CLS <0.1, INP <200ms (test with PageSpeed Insights)
- [ ] Mobile-first responsive verified
- [ ] Favicon + Apple icons + manifest.json
- [ ] Cookie banner (GDPR compliant since you're EU-based)
- [ ] Email capture working (document checklist PDF as lead magnet)
- [ ] CTA buttons to dashboard tracked as conversions in GA4

---

## 8. What You Should Ask Me to Do Next

In order:

1. **Draft the Home page** (ready-to-publish copy with SEO brief + schema spec)
2. **Draft /pricing/ and /services/digital-nomad-visa-application/** — the money pages
3. **Build the income calculator widget spec** (a HTML mini-tool that doubles as a lead magnet)
4. **Deeper competitor teardown** on Balcells, Immigration Spain, Lexidy — exact weak pages and gaps
5. **Blog editorial calendar** — 13 weeks, 2–3 posts/week, mapped to clusters

Each of these I can deliver as a standalone doc in this folder.

---

*End of strategy document — version 1, 2026-04-16*
