# Wakely Marketing Site — CLAUDE.md

## Project Overview

A full rebuild of getwakely.com — a marketing site for Wakely, an iOS app that delivers personalized morning news briefings. The site's primary goal is waitlist signups (beta launching soon), with App Store redirect added later.

**Core value proposition: "Wake Up Informed"**

The app replaces doom scrolling with a calm, curated morning news briefing personalized to the user. Target audience: productivity-minded people aged 22-38 who take their mornings seriously.

---

## Tech Stack

- **Framework**: React + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Animations**: Framer Motion
- **Deployment**: Vercel
- **Waitlist**: Supabase (email capture to a `waitlist` table)
- **Fonts**: Load from Google Fonts — choose distinctive, characterful fonts that feel premium and minimal. Avoid Inter, Roboto, Arial, Space Grotesk.

---

## Design Direction

**Aesthetic: Clean & minimal — Apple-style but with a distinct Wakely identity**

- Light background, lots of white space, restrained use of color
- Primary brand color: sky blue (match the logo — `#38bdf8` or similar)
- Accent: warm white/off-white for backgrounds, near-black for text
- Typography-forward — let the copy breathe, generous line height
- Subtle animations on scroll — nothing flashy, just elegant reveals
- Mobile-first — this will be viewed on phones primarily
- The logo is a 3D blue icon mark (W shape in a circle with dots) — use it in the nav and hero
- NEVER use purple gradients, generic layouts, or cookie-cutter AI aesthetics
- One thing that makes this site unforgettable: the hero should feel like waking up — soft light, calm energy, morning atmosphere

---

## Site Structure

Multi-page site with React Router. Each section gets its own route so it never feels cramped.

```
/ → Home (Hero + brief intro + CTA to waitlist)
/features → Features & How It Works
/social-proof → Testimonials & Reviews
/waitlist → Waitlist Signup (primary conversion page)
/pricing → Pricing
/faq → FAQ
```

### Shared Components
- `Navbar` — logo left, nav links right, "Join Waitlist" CTA button. Sticky. Subtle blur backdrop on scroll.
- `Footer` — minimal. Logo, links, copyright.

---

## Pages — Detailed Spec

### / — Home
- **Hero**: Full viewport. Headline: "Wake Up Informed." Subheadline: 1-2 lines about what Wakely does. CTA button: "Join the Waitlist" → /waitlist. Logo mark displayed prominently. Morning atmosphere — think soft gradients, light and calm.
- **Brief feature teaser**: 3 icons with one-liners below the fold. Links to /features.
- **Social proof strip**: "X people on the waitlist" counter (pulled from Supabase count) + 1-2 short pull quotes. Links to /social-proof.
- **Final CTA**: One more waitlist CTA before footer.

### /features — Features & How It Works
- Section 1: "How It Works" — 3 steps with icons/illustrations: 1. Tell us what you care about. 2. Wake up to your briefing. 3. Start your day ahead.
- Section 2: Feature grid — 4-6 features with icon, title, 1-2 sentence description. Examples: Personalized to you, No doom scrolling, Ready when you wake up, Curated sources, Audio option (if applicable), Daily consistency.
- Visual: iPhone mockup or abstract representation if no real screenshots available yet.

### /social-proof — Testimonials
- Grid or staggered layout of testimonial cards
- 6-8 placeholder testimonials to start — real ones added later
- Star ratings, name, short quote
- "X people already on the waitlist" banner

### /waitlist — Waitlist Signup
- This is the most important page — treat it like a landing page within the site
- Headline: "Be First to Wake Up Informed."
- Subheadline: "Beta is almost here. Get early access."
- Email input + "Join Waitlist" button
- On submit: POST to Supabase `waitlist` table (columns: `id`, `email`, `created_at`)
- Success state: "You're on the list. We'll be in touch." — no page reload, inline confirmation
- Error state: handle duplicate emails gracefully ("You're already on the list!")
- Show live waitlist count below the form: "Join X others already waiting"

### /pricing
- Simple, clean pricing page
- Placeholder tiers for now — Free and Pro
- Free: Basic morning briefing
- Pro: Fully personalized, more sources, audio, priority access — $X/month (TBD)
- Pricing is placeholder — do not hardcode final numbers, mark all with {/* PLACEHOLDER */}

### /faq
- Accordion-style FAQ
- 8-10 placeholder questions covering: What is Wakely, When does it launch, How does personalization work, Is it free, What platforms, How do I get early access, Data privacy
- Clean expand/collapse animation via Framer Motion

---

## Supabase Integration

- Use Supabase JS client (`@supabase/supabase-js`)
- `.env` variables:
  ```
  VITE_SUPABASE_URL=
  VITE_SUPABASE_ANON_KEY=
  ```
- Waitlist table schema:
  ```sql
  create table waitlist (
    id uuid default gen_random_uuid() primary key,
    email text unique not null,
    created_at timestamp with time zone default now()
  );
  ```
- RLS: enable RLS, allow insert from anon, allow select count from anon (for live counter)

---

## Environment Variables (.env.example)

```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

---

## Running the App

```bash
npm install
npm run dev
```

Runs on `http://localhost:5173`

---

## Deployment

- Deploy to Vercel
- Connect GitHub repo, auto-deploy on push to main
- Add env vars in Vercel dashboard

---

## Assets

- Logo file: `src/assets/logo.png` — user must drop the logo image into this path manually before running
- Do not use placeholder logo — if logo file is missing, use text "Wakely" in brand blue as fallback

---

## Failure Rules

- BLOCKING: Site must render without console errors
- BLOCKING: Waitlist form must handle errors gracefully — no crashes on duplicate email or network failure
- BLOCKING: All routes must resolve correctly — no 404s on direct navigation
- BLOCKING: Supabase keys must come from `.env`, never hardcoded
- BLOCKING: Site must be fully responsive — mobile, tablet, desktop
- NON-BLOCKING: Real testimonials, final pricing, and App Store link added later
- NON-BLOCKING: Animations can be simplified if performance is an issue

---

## General Rules

- Never commit `.env`
- Use React Router `<Link>` not `<a>` for internal navigation
- Keep components small and focused — one component per file
- Framer Motion for scroll reveals — staggered, subtle, not distracting
- All placeholder content clearly marked with `{/* PLACEHOLDER */}` so it's easy to find and replace later
- Read the full Progress Log before writing any code in a new session
- Never delete Progress Log entries — only append

---

## Progress Tracking

Claude Code must maintain the Progress Log below. After completing any page or significant chunk of work, append an entry in this format:

```
### [Page/Phase] — [short title] — Session N
- What was built
- Files created or modified
- Any deviations from spec and why
- What comes next
```

Rules:
- NEVER delete previous log entries — only append
- Read the full Progress Log before writing any code in a new session
- If spec conflicts with what was already built, log the conflict and resolve conservatively
- If a BLOCKING rule was hit and worked around, document it

---

## Progress Log

### Foundation + Home Page — Project Init & Home — Session 1
- Initialized Vite + React project with `npm create vite@latest . -- --template react --overwrite`
- Installed dependencies: tailwindcss, @tailwindcss/vite, framer-motion, react-router-dom, @supabase/supabase-js (used --legacy-peer-deps due to Vite 8 / @tailwindcss/vite peer dep conflict)
- Set up Tailwind CSS v4 via @tailwindcss/vite plugin with custom theme (wakely-blue, wakely-dark, wakely-offwhite, Playfair Display + DM Sans fonts)
- Set up React Router with all 6 routes: /, /features, /social-proof, /waitlist, /pricing, /faq
- Built shared Navbar (sticky, blur backdrop on scroll, mobile hamburger menu, logo fallback) and Footer components
- Built full Home page with: hero (morning gradient, "Wake Up Informed." headline, CTA), 3-feature teaser section, social proof strip (live Supabase count + 2 placeholder quotes), final CTA
- Built ScrollReveal component using Framer Motion for staggered scroll animations
- Set up Supabase client in src/lib/supabase.js with getWaitlistCount() — reads from .env, gracefully returns 0 if keys not configured
- Created .env.example with VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY
- Placeholder pages created for /features, /social-proof, /waitlist, /pricing, /faq (stub content only)
- **Deviation**: The `--overwrite` flag on Vite scaffold deleted the original CLAUDE.md, .env, and logo files from the root. CLAUDE.md was recreated from memory. User must re-add logo.png to src/assets/logo.png and .env to root.
- **Deviation**: Used Vite 8 (latest scaffolded version) with --legacy-peer-deps for @tailwindcss/vite compatibility
- All routes verified working, 0 console errors
- Files created: src/main.jsx, src/index.css, src/App.jsx, src/lib/supabase.js, src/components/Navbar.jsx, src/components/Footer.jsx, src/components/ScrollReveal.jsx, src/pages/Home.jsx, src/pages/Features.jsx, src/pages/SocialProof.jsx, src/pages/Waitlist.jsx, src/pages/Pricing.jsx, src/pages/FAQ.jsx, .env.example, .gitignore (updated), index.html, vite.config.js
- **What comes next**: Build out remaining pages (Features, SocialProof, Waitlist, Pricing, FAQ) in future sessions

### All Pages — Full Page Build-out — Session 1 (continued)
- Built /features page: "How It Works" 3-step flow with numbered icons, 6-feature grid (Personalized, No doom scrolling, Ready when you wake up, Curated sources, Audio option, Daily consistency), iPhone mockup placeholder, CTA
- Built /social-proof page: waitlist count banner, masonry-style testimonial grid with 8 placeholder testimonials (star ratings, initials avatar, name, role), CTA
- Built /waitlist page: full landing-page treatment with email form, Supabase insert with duplicate detection (23505 error code), success/duplicate/error states, live waitlist count, trust signals (no spam, early access, free to start)
- Built /pricing page: Free and Pro tiers side-by-side, Pro tier featured with dark bg and blue ring, all prices marked PLACEHOLDER, FAQ link
- Built /faq page: 8-question accordion with Framer Motion AnimatePresence for expand/collapse animation, plus icon rotates to X on open
- All pages include scroll-reveal animations, waitlist CTAs, and consistent Wakely design language
- All pages verified working on desktop (1280px) and mobile (390px), 0 console errors across all routes
- Mobile hamburger menu verified functional
- Files modified: src/pages/Features.jsx, src/pages/SocialProof.jsx, src/pages/Waitlist.jsx, src/pages/Pricing.jsx, src/pages/FAQ.jsx
- **User action needed**: Re-add logo.png to src/assets/logo.png (deleted by Vite scaffold --overwrite). Re-add .env with Supabase credentials.
- **What comes next**: Polish, real content, Supabase integration testing with real credentials, deployment to Vercel

### Design Polish + Overflow Fix — Session 1 (continued)
- **Root cause 1**: Custom `* { margin: 0 }` in index.css was overriding Tailwind v4's `mx-auto` (`margin-inline: auto`), causing all centered containers to be left-aligned. Fixed by removing the `*` rule — Tailwind v4 preflight already handles the reset.
- **Root cause 2**: Hero gradient blob (`w-[min(1200px,150vw)]`) in Home.jsx was 1200px wide, extending past the viewport and causing horizontal scrollbar + dead whitespace on the right side of every page. Fixed by adding `#root { overflow-x: clip }` in index.css — `clip` prevents horizontal overflow without creating a new scroll container (unlike `overflow: hidden`).
- Redesigned Home page hero: two-line headline with blue gradient text on "Informed.", gradient W logo mark, dark CTA button with hover lift, secondary "See how it works" link, subtler morning atmosphere gradients
- Redesigned feature cards: rounded backgrounds with borders, gradient icon backgrounds, hover effects with shadow
- Redesigned social proof section: "TRUSTED BY EARLY ADOPTERS" label, star ratings on testimonial cards, avatar initials with gradient background, proper containment
- Redesigned final CTA: two-tone heading with blue accent, subtle sky gradient background
- Upgraded Navbar: active link highlighting via useLocation, gradient W logo fallback, dark CTA button
- Changed text color from #1a1a1a to #111111 for stronger contrast
- Widened FAQ accordion container from max-w-2xl to max-w-3xl for better page balance
- Files modified: src/index.css, src/pages/Home.jsx, src/components/Navbar.jsx, src/App.jsx, src/pages/FAQ.jsx
- Verified 0 horizontal overflow on Home, FAQ, and Features at 1040px viewport width
- Verified 0 console errors across all pages
- **What comes next**: Real content, Supabase integration testing, deployment to Vercel

### Horizontal Overflow Fix — Root Cause — Session 1 (continued)
- **Diagnosis**: Ran `document.querySelectorAll('*').forEach(el => { if (el.scrollWidth > document.documentElement.clientWidth) console.log(el) })` to find the exact offending elements
- **Root cause**: A decorative gradient blob in the Home hero had `w-[min(1200px,150vw)]`. On a 1025px viewport, this resolved to 1200px — 175px wider than the viewport, causing a horizontal scrollbar and dead whitespace on every page
- **Fix**: Changed the blob to `w-[80vw] max-w-[800px]` so it always fits within the viewport. No `overflow-x: hidden` bandaid needed.
- Removed the previous `#root { overflow-x: clip }` bandaid from index.css
- Removed `overflow-x-hidden` class from App.jsx wrapper div
- Verified 0 overflowing elements on Home, FAQ, and Features at 1025px viewport using the diagnostic script
- Files modified: src/pages/Home.jsx, src/index.css, src/App.jsx

### Scrollbar Gutter Fix — Session 1 (continued)
- Windows browsers reserve space for scrollbar gutter, causing perceived dead whitespace on the right
- Added `scrollbar-gutter: stable` and `overflow-x: hidden` to `html` in index.css — tells the browser to always reserve scrollbar space consistently, preventing layout shift
- Added `overflow-x: hidden` and `width: 100%` to `body` in index.css
- Added `overflow-x-hidden` and `w-full` classes to root `<div>` in App.jsx
- Also kept the previous fix: hero gradient blob sized to `w-[80vw] max-w-[800px]` instead of `w-[min(1200px,150vw)]`
- Verified on Home, FAQ, and Pricing pages — no horizontal scrollbar, no dead whitespace, 0 console errors
- Files modified: src/index.css, src/App.jsx
- **What comes next**: Real content, Supabase integration testing, deployment to Vercel
