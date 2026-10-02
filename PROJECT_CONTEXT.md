# SwiftBilling RCM — Project Context

> Paste this file at the start of a new Claude chat. It describes everything built so far.
> **Working rule:** the owner gives the prompt; Claude writes the code only — no redesigning things that weren't asked for.
> Last updated: 2026-10-01

---

## 1. The business

| Item | Value |
|---|---|
| Company | **SwiftBilling RCM** (never write "SwiftBilling RCM RCM") |
| What it does | Medical billing & revenue cycle management (RCM) for independent US healthcare practices |
| Website | https://www.swiftbillingrcm.com |
| Email | info@swiftbillingrcm.com |
| Phone | +1 (512) 737-7488 → `tel:+15127377488` |
| Address | 5900 Balcones Dr #7192, Austin, TX 78731, USA |
| Hours | Mon–Fri · 8am–6pm CST |
| Coverage | All 50 US states, 20+ specialties |
| Pricing (for copy/FAQ) | 4–7% of collections, no setup fee, no long-term contracts |
| Key claims used in copy | 98% clean claim rate · free 24-hour revenue audit · 5–7 day onboarding · HIPAA compliant, BAA signed with every client · CPC-certified coders · CAQH credentialing |
| Socials | LinkedIn `linkedin.com/company/swiftbilling-rcm/` · Facebook `facebook.com/swiftbillingrcm/` · Instagram `instagram.com/swiftbillingrcm/` |

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
| Analytics | Google Analytics `G-PHYRLHP00K` (next/script `lazyOnload`: loads after the page finishes loading) · HubSpot `js-na2.hs-scripts.com/246275410.js` (loaded by `components/HubSpotLoader.tsx` on the first scroll, click, touch or keypress, or after 8 seconds) · **Vercel Analytics** (`@vercel/analytics`, `<Analytics />` in layout — added Oct 2026; must be enabled in the Vercel dashboard) |
| Env vars | `RESEND_API_KEY` (in `.env.local` locally and in Vercel project settings) |

| Linting | **ESLint 9** + `eslint-config-next` (flat config `eslint.config.mjs`; ignores `.next`, `out`, `node_modules`, `.claude`) |

**Commands:** `npm run dev` (localhost:3000) · `npm run build` · `npm run lint` · type check: `npx tsc --noEmit --skipLibCheck`
**Shell:** Windows — use PowerShell; `npx` isn't available in Git Bash on this machine.

---

## 3. File map

```
app/
  layout.tsx            Root layout: default metadata, JSON-LD (LocalBusiness + WebSite), GA, HubSpot, Vercel Analytics
  page.tsx              Homepage (section order below), homepage canonical + FAQPage JSON-LD
  globals.css
  api/contact/route.ts  Contact form → Resend (owner notification + auto-reply), rate limit 5/min/IP, honeypot field "website", sanitize + email validation
  services/page.tsx     Services hub (uses ServicesHero)
  services/<slug>/page.tsx   11 service pages, each renders <ServicePageLayout service={getService(SLUG)} heroImage=... />
  privacy-policy/page.tsx, terms/page.tsx
  not-found.tsx         Branded 404: Nav, "Page not found", Back to Home + View Our Services, Footer (noindex)
  sitemap.ts, robots.ts, icon.tsx, apple-icon.tsx, opengraph-image.tsx
components/
  Nav, Hero, TrustStrip, TrustBar, Results, Services, Specialties, About,
  BelowFold (Process, Testimonials, FAQ, Audit, Contact: server-rendered, each in its own code chunk),
  Process, Testimonials, FAQ, Audit, Contact, Footer, FadeIn,
  ServicePageLayout (template for all service pages), ServicesHero (services hub hero),
  AccordionItem (single FAQ accordion item, used by the homepage FAQ and service page FAQs),
  BreakpointImage (next/image that only downloads at one breakpoint via <picture>; used for the homepage and service heroes),
  MotionProvider (LazyMotion + domAnimation wrapper in layout; components use `m.*`, not `motion.*`),
  HubSpotLoader (loads HubSpot on first interaction or after 8s)
lib/services-data.ts    Single source of truth for all 11 services (copy, features, process, stats, FAQs, meta)
lib/seo.ts              pageMetadata(): per-page title, description, canonical, Open Graph and Twitter tags (use it on every new page)
lib/home-faqs.ts        Homepage FAQ data, used by the visible FAQ and the homepage FAQPage JSON-LD (keeps them identical)
public/                 Hero images, about photo, logos/, signature.png
next.config.ts          Image formats/sizes, remotePatterns (images.pexels.com), security headers
```

---

## 4. Homepage — section order (`app/page.tsx`)

| # | Component | Section id | Notes |
|---|---|---|---|
| 1 | `Nav` | — | Fixed; transparent → white on scroll. Links: Services (`/services`), Specialties, Process, Why Us (`/#testimonials`), FAQ. Email + phone + "Get Started" CTA → `#audit`. Mobile drawer. |
| 2 | `Hero` | — | Full-bleed `/hero-home.png` (+ mobile version) |
| 3 | `TrustStrip` | — | "Compatible With Leading Healthcare Platforms": infinite logo marquee of 11 EHR/clearinghouse platforms, grayscale → color on hover, fallback letter badge, disclaimer |
| 4 | `TrustBar` | `stats` | Stat cards |
| 5 | `Results` | — | Dark navy results band |
| 6 | `Services` | `services` | 6 numbered service cards + "Not sure where your revenue is leaking?" CTA strip |
| 7 | `Specialties` | `specialties` | Specialty cards + textured dark CTA banner (medical cross grid, EKG line, circuit rings) |
| 8 | `About` | `why-us` | "Experienced Billing Professionals You Can Trust": 5 bullet points, `/about-photo.png` with stat overlay + floating HIPAA/CPC badges |
| 9 | `Process` | `process` | 4 steps with time badges (Same Day / 24–48 Hours / Ongoing / < 30 Days), connector line, CTA strip |
| 10 | `Testimonials` | `testimonials` | **Not testimonials anymore.** "Built Around Transparency & Performance": 6 trust cards (Reporting, Account Mgmt, Faster Claims, Specialty Expertise, HIPAA, Denial Reduction) + dark philosophy strip with founder line and 4 stat tiles |
| 11 | `FAQ` | `faq` | Sticky left column + 6-item accordion |
| 12 | `Audit` | `audit` | Free audit CTA, dark gradient |
| 13 | `Contact` | `contact` | Contact cards + guarantees strip + form (name, practice_name, email, specialty, message) → `/api/contact` |
| 14 | `Footer` | — | Pre-footer CTA band, links, socials, Privacy/Terms, HIPAA · BAA · 50 States |

Sections 9–13 are loaded through `BelowFold.tsx` (dynamic import, `ssr: false`) for performance.

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
