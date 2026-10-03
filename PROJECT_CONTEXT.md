# SwiftBilling RCM — Project Context

> Paste this file at the start of a new Claude chat. It describes everything built so far.
> **Working rule:** the owner gives the prompt; Claude writes the code only — no redesigning things that weren't asked for.
> Last updated: 2026-10-01

---

## 1. The business

| Item | Value |
|---|---|
| Company | **SwiftBilling RCM** (never write "SwiftBilling RCM RCM") |
| Legal entity | Clink Nexus LLC (Texas) |
| What it does | Medical billing & revenue cycle management (RCM) for independent US healthcare practices |
| Website | https://www.swiftbillingrcm.com |
| Email | info@swiftbillingrcm.com |
| Phone | +1 (512) 737-7488 → `tel:+15127377488` |
| Address | 5900 Balcones Dr #7192, Austin, TX 78731, USA |
| Hours | Mon to Fri · 8am to 6pm Central Time |
| Coverage | All 50 US states, 20+ specialties |
| Pricing (for copy/FAQ) | 4–9% of collections, no setup fee, no long-term contracts |
| Key claims used in copy | 98% clean claim rate · free 24-hour revenue audit · 5–7 day onboarding · HIPAA compliant, BAA signed with every client · CPC-certified coders · CAQH credentialing |
| Socials | LinkedIn `linkedin.com/company/swiftbilling-rcm/` · Facebook `facebook.com/swiftbilling` · Instagram `instagram.com/swiftbillingrcm/` |

**Content rules decided along the way**
- No fake testimonials, no invented client names, no five-star review widgets. The old testimonials section was replaced with a "Why Practices Choose Us" trust section.
- The Team section was **removed entirely** (May 2026). Don't bring it back unless asked.
- Platform logos (Epic, athenahealth, etc.) are shown as "compatible with", with a not-affiliated disclaimer.

---

## 2. Tech stack

| Layer | Choice |
|---|---|
| Framework | **Next.js 16** (App Router, `app/` dir) + React 19 + TypeScript |
| Styling | **Tailwind CSS v4** (`@tailwindcss/postcss`), mostly arbitrary values like `text-[#0B3C5D]` |
| Animation | **Framer Motion 12** |
| Font | **Manrope** via `next/font/google` (`--font-manrope`) |
| Email | **Resend v6** — `app/api/contact/route.ts` |
| Hosting | **Vercel** (`vercel.json` → `framework: nextjs`) |
| Rate limiting | Vercel Firewall rule on `/api/contact`: 5 requests/min per IP on the live site (added Oct 2026). `route.ts` also keeps its own in-memory limit as a backup |
| Repo | GitHub, private: https://github.com/sagheershad-lang/swiftbillingrcm (branch main) |
| Analytics | Google Analytics `G-PHYRLHP00K` (next/script `lazyOnload`: loads after the page finishes loading) · HubSpot `js-na2.hs-scripts.com/246275410.js` (loaded by `components/HubSpotLoader.tsx` on the first scroll, click, touch or keypress, or after 8 seconds) · **Vercel Analytics** (`@vercel/analytics`, `<Analytics />` in layout — added Oct 2026; must be enabled in the Vercel dashboard) · **Vercel Speed Insights** (`@vercel/speed-insights`, `<SpeedInsights />` next to `<Analytics />` in layout; real-user Core Web Vitals; enable Speed Insights in the Vercel dashboard; loads `/_vercel/speed-insights/script.js` and posts to `/_vercel/speed-insights/vitals`, both same-origin, so the CSP needed no change) |
| Env vars | `RESEND_API_KEY` (in `.env.local` locally and in Vercel project settings) |

| Linting | **ESLint 9** + `eslint-config-next` (flat config `eslint.config.mjs`; ignores `.next`, `out`, `node_modules`, `.claude`) |

**Commands:** `npm run dev` (localhost:3000) · `npm run build` · `npm run lint` · type check: `npx tsc --noEmit --skipLibCheck`
**Shell:** Windows — use PowerShell; `npx` isn't available in Git Bash on this machine.

---

## 3. File map

```
app/
  layout.tsx            Root layout: default metadata, JSON-LD (LocalBusiness + WebSite), GA, HubSpot, Vercel Analytics, Vercel Speed Insights
  page.tsx              Homepage (section order below), homepage canonical + FAQPage JSON-LD
  globals.css
  api/contact/route.ts  Contact form → Resend (owner notification + auto-reply), rate limit 5/min/IP, honeypot field "website", sanitize + email validation; state and monthly collections accepted only if they match lib/form-options.ts
  services/page.tsx     Services hub (uses ServicesHero)
  services/<slug>/page.tsx   11 service pages, each renders <ServicePageLayout service={getService(SLUG)} heroImage=... />
  book-a-call/page.tsx  Book a Call page: PageHero + HubSpot meetings scheduler in a light card
  about/page.tsx        About page: company story (Clink Nexus LLC, Austin, 50 states, 20+ specialties), how we work, values, CTA to /book-a-call and /#audit. No names or team photos
  security/page.tsx     Security and HIPAA page: workflows, BAA, system access, who sees data, what never to email, 4 question FAQ (FAQPage JSON-LD), CTA to /book-a-call. No SOC 2 / HITRUST / certification claims
  ehr-integrations/page.tsx  "Works With Your EHR": how we work inside existing systems, platform grid from lib/platforms.ts with the not-affiliated disclaimer, CTA to /book-a-call
  pricing/page.tsx      Pricing page: PageHero, how pricing works, what affects your rate, core services included, no setup fee / no contracts, 4 question FAQ (FAQPage JSON-LD), audit CTA
  privacy-policy/page.tsx, terms/page.tsx
  not-found.tsx         Branded 404: Nav, "Page not found", Back to Home + View Our Services, Footer (noindex)
  sitemap.ts, robots.ts, icon.tsx, apple-icon.tsx, opengraph-image.tsx
components/
  Nav, Hero, TrustStrip, TrustBar, Results, Services, Specialties, About,
  BelowFold (Process, Switching, Testimonials, FAQ, Audit, Contact: server-rendered, each in its own code chunk),
  Process, Switching ("Switching Billing Companies?" section), Testimonials, FAQ, Audit, Contact, Footer, FadeIn,
  PageHero (dark services-hub style hero for content pages: Book a Call, Pricing, Security, EHR Integrations, About),
  PageSections (shared blocks for content pages: SectionHeader, LightCard, IconTile, CheckBadge, CtaBand with optional secondary button, faqJsonLd()),
  PageFAQ (accordion for content page FAQs; takes faqs + idPrefix),
  ServicePageLayout (template for all service pages), ServicesHero (services hub hero),
  AccordionItem (single FAQ accordion item, used by the homepage FAQ and service page FAQs),
  BreakpointImage (next/image that only downloads at one breakpoint via <picture>; used for the homepage and service heroes),
  MotionProvider (LazyMotion + domAnimation wrapper in layout; components use `m.*`, not `motion.*`),
  HubSpotLoader (loads HubSpot on first interaction or after 8s; also exports showHubSpotCookieBanner)
  BookingScheduler (HubSpot meetings embed for https://meetings-na2.hubspot.com/michael219; loads MeetingsEmbedCode.js only on /book-a-call, with a loading state and an "open in a new tab" fallback)
lib/services-data.ts    Single source of truth for all 11 services (copy, features, process, stats, FAQs, meta)
lib/seo.ts              pageMetadata(): per-page title, description, canonical, Open Graph and Twitter tags (use it on every new page)
lib/home-faqs.ts        Homepage FAQ data, used by the visible FAQ and the homepage FAQPage JSON-LD (keeps them identical)
lib/platforms.ts        Shared list of the 11 "compatible with" platforms (name, type, logo) + PLATFORM_DISCLAIMER; used by TrustStrip and /ehr-integrations
lib/form-options.ts     Contact form select options (monthly collections ranges, 50 states) and pickOption(), shared by the form and the API
public/                 Hero images, about photo, logos/, signature.png
next.config.ts          Image formats/sizes, remotePatterns (images.pexels.com), security headers
```

---

## 4. Homepage — section order (`app/page.tsx`)

| # | Component | Section id | Notes |
|---|---|---|---|
| 1 | `Nav` | — | Fixed; transparent → white on scroll. Desktop links: Services (`/services`), Pricing (`/pricing`), Specialties, Process, Why Us (`/#why-us`), FAQ; about 108px spare at 1280px, tight but fitting at 1024px (gaps shrink below xl). Mobile menu also has Our Approach (`/#testimonials`). Phone + "Get Started" CTA → `#audit` (no email in the desktop Nav). |
| 2 | `Hero` | — | Full-bleed `/hero-home.png` (+ mobile version) |
| 3 | `TrustStrip` | — | "Compatible With Leading Healthcare Platforms": infinite logo marquee of the 11 platforms in `lib/platforms.ts`, grayscale → color on hover, fallback letter badge, disclaimer + "See how we work with your EHR" link to `/ehr-integrations` |
| 4 | `TrustBar` | `stats` | Stat cards |
| 5 | `Results` | — | Dark navy results band |
| 6 | `Services` | `services` | 6 numbered service cards + "Not sure where your revenue is leaking?" CTA strip |
| 7 | `Specialties` | `specialties` | Specialty cards + textured dark CTA banner (medical cross grid, EKG line, circuit rings) |
| 8 | `About` | `why-us` | "Experienced Billing Professionals You Can Trust": 5 bullet points, `/about-photo.png` with stat overlay + floating HIPAA/CPC badges (the HIPAA badge links to `/security`) |
| 9 | `Process` | `process` | 4 steps with time badges (Same Day / 24–48 Hours / Ongoing / < 30 Days), connector line, CTA strip |
| 10 | `Switching` | `switching` | "Switching Billing Companies?": 4 light cards (existing AR covered, planned handoff, 5 to 7 business days, no long-term contracts) + dark CTA strip → `/#audit` |
| 11 | `Testimonials` | `testimonials` | **Not testimonials anymore.** "Built Around Transparency & Performance": 6 trust cards (Reporting, Account Mgmt, Faster Claims, Specialty Expertise, HIPAA, Denial Reduction) + dark philosophy strip with founder line and 4 stat tiles |
| 12 | `FAQ` | `faq` | Sticky left column + 9-item accordion (last 3 are about switching) |
| 13 | `Audit` | `audit` | Free audit CTA, dark gradient |
| 14 | `Contact` | `contact` | Contact cards + guarantees strip + form titled "Get Your Free Audit" (name, practice_name, email, phone required; specialty, state, monthly_collections, message optional) → `/api/contact`; "Get My Free Audit" submit; "Book a 30 minute call" link |
| 15 | `Footer` | — | Pre-footer CTA band, links, socials, Privacy/Terms, HIPAA · BAA · 50 States |

Sections 9 to 14 are loaded through `BelowFold.tsx`: server-rendered (in the initial HTML), but each section's JS is in its own chunk.

---

## 5. Service pages

Data lives in `lib/services-data.ts` (`ServiceData` type: slug, name, shortDescription, badge, isNew, tagline, description, category, problem, solution, features[], process[], stats[], faqs[], relatedSlugs[], metaTitle, metaDescription). `getService(slug)` looks one up.

| Slug | Name | Category | Hero image |
|---|---|---|---|
| medical-billing | Medical Billing | core | `Medical Billing-DESKTOP/TAB/MOBILE.png` (responsive set) |
| ar-follow-up | AR Follow-Up | core | `AR Follow-Up.png` (custom `heroImageStyleDesktop`, constrained to the 1240px container) |
| denial-management | Denial Management | core | `Denial Managemen.png` (filename is missing the final "t"; that's correct) |
| payment-posting | Payment Posting | core | `payment posting.png` |
| credentialing | Provider Credentialing | core | `Provider Credentialing.png` |
| reporting-analytics | Reporting & Analytics | core | `Reporting & Analytics.png` (original colours; no hue-rotate) |
| eligibility-verification | Eligibility Verification | core | `Eligibility-png.png`, `heroRevealDelay={0}` |
| prior-authorization | Prior Authorization | extended | `Prior Authorization.png` |
| patient-calling | Patient Balance Collection | extended | `Patient Balance Collection.png` |
| patient-scheduling | Patient Scheduling | extended | `Patient Scheduling.png` |
| patient-acquisition | Patient Acquisition | extended | `Patient Acquisition.png` |

**`ServicePageLayout` props:** `service`, `heroImage`, `heroImageDesktop/Tablet/Mobile`, `heroObjectPosition`, `heroObjectPositionDesktop`, `heroImageStyleDesktop`, `heroTopFade`, `heroBottomFade`, `heroFilter`, `heroRevealDelay`.
Hero conventions: full-bleed image, top fade 15% and bottom fade 25%, H1 + one-line description (1–1.5 lines max), teal checkmark feature list instead of CTA buttons, staggered bouncy spring text animation (0.3s delay, 0.3s stagger). Cards use frosted glass (blur 20px, bg 0.12, border 0.18).
Each page outputs JSON-LD: BreadcrumbList + Service + FAQPage.
Visible FAQ accordion on every service page (`#service-faq`, light section after Related Services, before the closing CTA). It renders the same `service.faqs` as the FAQPage JSON-LD and reuses `AccordionItem` exported from `components/FAQ.tsx`.
The **Services hub** (`/services`) uses `ServicesHero` with `/Service.png` and the same bouncy text animation.

---

## 6. Design system

**Colours**
| Token | Hex | Use |
|---|---|---|
| Navy | `#0B3C5D` | Brand primary, headings accents, dark sections |
| Teal | `#2EC4B6` | Accent, CTAs, icons (hover `#3dd9cb`) |
| Dark text | `#0F172A` | Headings |
| Muted text | `#64748B` | Body copy |
| Light bg | `#F8FAFC` | Alternating section background |
| Card border | `#E4EDF5` | All light cards |
| Teal tint | `#EBF9F8` → `#DFF6F4`, border `#BAE8E4`, text `#0a756c` | Icon badges, pills |
| Dark gradient | `linear-gradient(115deg, #061d2e, #0B3C5D 55%, #0e4f73)` | CTA strips, featured cards |

**Recurring patterns (reuse these, don't invent new ones)**
- **Section header:** teal uppercase eyebrow (`text-[11.5px] tracking-[0.16em]`), H2 `clamp(28px,3.5vw,44px)` extrabold with a navy→teal gradient span, description on the right (`lg:text-right`), then a teal hairline: `h-px` with `linear-gradient(90deg, #2EC4B6, rgba(46,196,182,0.15), transparent)`.
- **Light card:** `bg-white border border-[#E4EDF5] rounded-2xl`, resting shadow `0_1px_14px_rgba(11,60,93,0.06)`. On hover: `y:-5`, teal border at 35%, deeper shadow, and a teal top-edge line that grows from `w-0` to `w-14`.
- **Dark CTA strip:** dark gradient + dot texture (SVG data URI circles at 4% white) + teal radial glow in the top-right + 2px teal top accent line.
- **Primary button:** `bg-[#2EC4B6] text-[#0B3C5D] font-extrabold rounded-xl`, glow `0 0 24px rgba(46,196,182,0.35)`, `hover:-translate-y-0.5`.
- **Animation:** `FadeIn` wrapper (`direction: 'up' | 'left' | 'right' | 'none'`, `delay`). Cards use `initial / whileInView / viewport={{ once: true }}` with ease `[0.16, 1, 0.3, 1]` and a stagger of `i * 0.07`.
- Section padding: `py-16 md:py-24`; container: `max-w-[1200px] mx-auto px-6`.

**Accessibility rules (keep these on every new component)**
- **Mobile body text min 15px:** under 768px, body paragraphs, section descriptions, card text, FAQ answers and Footer text are at least 15px. Pattern: `text-[15px] md:text-[13.5px]` (desktop keeps its original size). Headings, eyebrows, badges, pills, stat labels, buttons and fine-print microcopy are not affected.
- **Tap targets min 44px:** on mobile every link and button is at least 44x44 tappable (`max-md:min-h-[44px]`, or padding plus a matching negative margin when the layout must not move). Visible text and icon sizes stay the same; e.g. the Footer social tiles stay 32px inside a 44px link.
- **Hover text on light backgrounds:** use `#0a756c`, not `#2EC4B6` (teal text on white is ~2:1 contrast). Teal hover stays on dark backgrounds.
- **Focus ring:** global `:focus-visible` in `globals.css`: 2px teal `#2EC4B6` outline, 2px offset, plus a 2px navy `#0B3C5D` box-shadow so it shows on light and dark sections. Don't remove outlines.
- **Skip link:** "Skip to content" (`.skip-link` in `layout.tsx`) is the first focusable element and jumps to `#main-content`; every page's hero/header needs `id="main-content"`.
- **Reduced motion:** `MotionConfig reducedMotion="user"` for Framer Motion, a `prefers-reduced-motion` rule in `globals.css` for CSS animations and smooth scroll, and counters show the final number straight away (`useReducedMotion`).
- Decorative duplicates (e.g. the TrustStrip marquee copies) get `aria-hidden="true"`; images get descriptive alt text on every breakpoint.

---

## 7. Build history (git log summary)

**Apr 12–13, 2026: launch and premium redesign**
- v1.0 static site → rebuilt as Next.js 16 + Tailwind v4 + Framer Motion; Manrope font.
- Full SaaS-style homepage redesign; trust strip, proof metrics, copy and conversion refinements.

**May 2026: section-by-section premium redesign** (done in Claude Code sessions)
- Specialties, Services, Process, FAQ, About, Contact and Footer all rebuilt to the design system above.
- Testimonials replaced with the trust section (no fake reviews).
- Team section built, then removed entirely (May 28).
- HubSpot tracking added; contact form fixed for Resend v6 error handling; rate limiting, honeypot and sanitising added.
- Service pages: full-bleed responsive hero images, frosted-glass cards, nav quick wins, phone field, real brand social icons with verified URLs, "Charge Entry" renamed to "Medical Billing".
- SEO: Service + BreadcrumbList + FAQPage JSON-LD on every service page.
- Many hero image positioning passes (AR Follow-Up especially); hero reveal delay feature added and later set to 0; bouncy staggered text animation.

**Jun 1, 2026: service hero polish**
- New hero images for 6 service pages; taller hero, better gradient, larger H1.
- Removed hero CTA buttons and replaced them with a teal checkmark list; removed duplicate stat pills.
- All 11 hero descriptions shortened to 1–1.5 lines; consistent fades (15% / 25%).
- Reporting & Analytics image restored to its original colours.
- Services hub hero restyled to match the service pages (new `/Service.png`, bouncy text).

**Oct 2026**
- QA pass: fixed the doubled "SwiftBilling RCM RCM" in JSON-LD, added logo alt text, removed invalid Tailwind classes, deleted the dead `ICP.tsx` / `Pain.tsx`.
- Added Vercel Analytics (`@vercel/analytics`).
- Pushed to GitHub with a fresh single-commit history. Old history backed up at C:\Users\Sagheer\swiftbillings-backup\.git-backup. .claude/worktrees/ and .claude/settings.local.json are gitignored.
- QA Phase 1: removed unused images, unused props, added ESLint.
- QA Phase 2 (security): upgraded Next.js to 16.3.8 and Resend to 6.31.0 (npm audit: 0 vulnerabilities); contact API escapes HTML, caps field lengths, rejects bad bodies and includes the phone number in lead emails; report-only Content-Security-Policy; Vercel Firewall rate limit on /api/contact; robots blocks /api/.
- QA Phase 3 (functionality): fixed dead Get Started / Footer contact links on non-home pages, scroll to late-loaded homepage sections from other pages, blocked double form submits, added visible service-page FAQs, a branded 404 page, mobile menu scroll lock, and required Practice Name + Phone with maxLength on every form field.
- QA Phase 4 (performance): HubSpot on first interaction and GA lazyOnload, CSS hero text animation, per-breakpoint hero images, sized platform logos, server-rendered below-fold sections, LazyMotion, AccordionItem split. Lighthouse mobile went from Performance 24–33 / LCP 7.6–7.8s / CLS 0.23 to 67–72 / 3.5–3.8s / 0.
- QA Phase 5 (accessibility): skip link, visible focus rings, Escape closes the mobile menu, reduced-motion support, announced form errors, 44px mobile tap targets, 15px minimum mobile body text, `#0a756c` hover text on light backgrounds, marquee copies hidden from screen readers and descriptive hero alt text on all breakpoints.
- QA Phase 6 (content and SEO): every page now has its own canonical, Open Graph and Twitter tags (they all pointed to the homepage before); titles 50–60 and descriptions 140–160 characters with no duplicates; homepage FAQ JSON-LD now matches the visible FAQ; JSON-LD logo fixed (old `/og-image.png` was a 404) and "Charge Entry" renamed to "Medical Billing"; grammar and brand-name fixes; auto-reply email now replies to info@. Numbers, claims, pricing, CST and legal text left for the owner.
- QA Phase 6 Round B (owner-approved): pricing 4–9% everywhere incl. Terms; claim submission 24–48 hours everywhere; headline stats reworded as the billing team's own results (not company-wide client data); absolute stat cards in services-data.ts replaced with process statements; About photo alt made neutral (AI-generated image, not the real team); Facebook URL now facebook.com/swiftbilling.
- QA Phase 6 Round C: all em/en dashes removed from copy, metadata, JSON-LD, alt text and emails (218 before, 0 after; dashes remain only in code comments); ranges written with "to"; stock phrases ("nothing falls through the cracks", "leaving on the table", "No black boxes", "from day one", the multi-state enrollment line) kept to one use each.
- QA Phase 6 Round A: "HIPAA Compliant" wording (no "certified"); Central Time; "No long-term contracts"; onboarding 5 to 7 business days; names Provider Credentialing, OB/GYN, athenahealth; Footer "Why Us" link; TrustBar counter server-renders its final value; JSON-LD now LocalBusiness + ProfessionalService with sameAs, image and openingHoursSpecification; sitemap lastModified fixed at 2026-10-03 (update `LAST_MODIFIED` in app/sitemap.ts after real content changes); neutral hero image alt (AI-generated image).
- Nav cleanup: "Why Us" now links to #why-us (About section); "Our Approach" links to #testimonials and is in the mobile menu only (`mobileOnly` in components/Nav.tsx) because the desktop bar overflows at 1280px with it; Footer has "Why Choose Us" (#why-us) and "Our Approach" (#testimonials); About badge reads "HIPAA Compliant / BAA with every client"; JSON-LD uses only openingHoursSpecification.
- Privacy Policy and Terms rewritten in plain English (text only, same layout): Clink Nexus LLC named as the operator; "Originally published 2023. Last updated October 3, 2026."; Privacy now covers the contact form, HubSpot chat and cookies, Google Analytics, Vercel Analytics, server logs, service providers, state privacy rights and children under 13; Terms list all 11 services (rendered from lib/services-data.ts), 4 to 9% fees with the service agreement governing, results wording, Texas law and Travis County courts.
- Footer "Cookie Settings" button (`showHubSpotCookieBanner` in components/HubSpotLoader.tsx) loads HubSpot if needed and reopens the consent banner. The HubSpot cookie banner is restyled in app/globals.css (frosted navy, teal accent, site buttons; selectors #hs-banner-parent #hs-eu-cookie-confirmation ...). HubSpot only shows the banner on the live domain, not on localhost. Under 960px it sits 104px from the bottom so it clears the chat bubble.
- Book a Call page (`/book-a-call`): HubSpot meetings scheduler (30 minutes, Google Meet, visitor's time zone). Every "Book a Free Consultation" link (Hero, Services CTA strip, FAQ, Footer contact column) now goes there; "Get Free Audit" buttons still go to the audit form; the Contact form submit button is unchanged. Contact has a "Prefer to talk? Book a 30 minute call" line, the Footer has a "Book a Call" link, and the page is in the sitemap. CSP report-only allows static.hsappstatic.net (script) and meetings-na2.hubspot.com (frame). The HubSpot iframe has a fixed 756px height because HubSpot's auto resize does not accept the na2 domain.
- Phase 7 Round 1: removed the unsourced "Versus 14 to 18% in-house" line from Results (Cost to Collect card now explains the percentage model); new homepage "Switching Billing Companies?" section after Process plus 3 switching FAQs (FAQ JSON-LD follows automatically); new `/pricing` page (Footer link, sitemap, mobile menu only because the desktop Nav has no room at 1280px); contact form has optional State and Monthly Collections selects, included in the owner email and validated against fixed lists on the server; Privacy Policy lists the two new optional fields; shared `PageHero` now used by Book a Call and Pricing. Contact submit button reads "Get My Free Audit".
- Phase 7 Round 2: desktop Nav drops the email and adds Pricing; new `/security`, `/ehr-integrations` and `/about` pages built from shared `PageSections` + `PageHero` (PricingFAQ renamed `PageFAQ`); TrustStrip and the EHR page share `lib/platforms.ts`; sitemap and Footer list About, Pricing, EHR Integrations and Security; Footer "HIPAA Compliant" and the About HIPAA badge link to `/security`, TrustStrip disclaimer links to `/ehr-integrations`. Copy: "our portal" replaced with "a secure method we agree on with you"; security wording is now "encrypted connections, access limited to the billing staff assigned to your account, and access you can revoke at any time" (no 256-bit, audit logging or security review claims); "Most EHRs work with our process. Ask us about yours."; Contact form heading "Get Your Free Audit". Fixed 3 mobile tap targets under 44px (Nav logo, Specialties and Why Choose Us text links).

---

## 8. Known issues / to-do

1. Resend: the `swiftbillingrcm.com` domain must be verified in Resend, or contact form emails fail.
2. FAQ accordion buttons have no `aria-controls`.

---

## 9. How to work on this project (instructions for Claude)

- Match the design system in section 6. Reuse existing patterns and components before creating new ones.
- Service content changes go in `lib/services-data.ts`, not in the page files.
- Keep contact details exactly as listed in section 1.
- After every change, run `npx tsc --noEmit --skipLibCheck` and report the result.
- Don't add fake testimonials, invented clients or unverifiable stats.
- Make only the change requested; ask before larger restructures.
- No em dashes or en dashes in any copy. Write number ranges with 'to'. Avoid repeated stock phrases.
