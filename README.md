# SKOUT LABS website

A complete five-page company website for SKOUT LABS, a South African software company. Includes Home, About, Apps, Contact, and a company-website-only Privacy Policy. Budget Skout, Recipe Skout, and Travel Skout are explicitly in development. Expedition Skout is featured separately as a game in development on Home and Apps.

## Stack

Next.js App Router, React, strict TypeScript, Tailwind CSS v4, Sass, Lucide icons, and locally bundled Manrope. Pages are prerendered. There is no database, contact form, tracking, or application backend. Normal Next.js hosting provides image optimization; a portable static export is also supported.

## Local setup

Use Node.js 20.9+ (Node 24 LTS recommended) and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. If port 3000 is occupied, use the URL printed by Next.js.

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

`npm run typecheck` first generates Next.js route types, so it also works on a fresh checkout. Run type generation and builds sequentially because they share `.next`.

## Structure

```text
app/                    Pages, global styles, metadata, sitemap and robots
  about/ apps/ contact/ privacy/
  icon.png/ social-card.png/    Generated site icon and share card
components/
  layout/               Header, Footer, Container
  home/                 Hero, introduction, collection, values and CTA
  apps/                 Data-driven cards, product sections and status badges
  games/                Dedicated games showcase
  ui/                   BrandLogo, Button, SectionHeading
styles/main.scss        Site stylesheet entry point (Sass @use)
  globals/              Brand tokens, resets, typography and accessibility
  layout/               Container, Header and Footer styles
  components/           Reusable UI styles
  pages/                Page-specific styles and their responsive rules
lib/apps.ts             Application data and future links/screenshots
lib/games.ts            Game data, status and future links
lib/site.ts             Company contact, navigation, domain and metadata helper
public/assets/logos/    Original supplied logo files
scripts/check-assets.mjs Asset readiness check
```

## Brand colours and design

Edit brand tokens in `styles/globals/_variables.scss` and styles in the matching `styles/layout/`, `styles/components/`, or `styles/pages/` partial. Keep responsive rules in the partial they affect and retain their relative order. `styles/main.scss` loads the modules with Sass `@use`; brand defaults load before Header/Footer logo overrides to preserve equal-specificity behaviour. The container partial exposes its responsive rules through a mixin emitted after the page modules, preserving the original wide-screen Privacy page width. Components reference existing selectors through `className`. The entry point is imported in `app/layout.tsx` and separately in `app/global-error.tsx` because that fallback replaces the layout. Keep Tailwind imports and utility aliases in `app/globals.css`. The original `--skout-bone`, `--skout-teal`, and `--skout-orange` values also have Tailwind aliases (`bg-bone`, `text-teal`, etc.). Derived darker teal and orange colours provide readable text and focus states. Manrope fonts are bundled locally, so browsers do not contact Google Fonts.

## Applications

Update `lib/apps.ts` to edit descriptions, planned features, status, logos, and links. Add another object conforming to `SkoutApp` with a unique `id` to show another app on Home and Apps automatically. Set `appStoreUrl`, `googlePlayUrl`, or `futureUrl` only when the actual link is ready; null links render no buttons. `screenshots` accepts `{ src, alt }` entries. Do not change status to `Available` until the product has launched.

## Replace the logos

All five original logos are included, copied from the local Skout Labs asset folders and visually matched to the supplied references. To replace them, retain these filenames:

```text
public/assets/logos/skout-labs.png
public/assets/logos/budget-skout.png
public/assets/logos/recipe-skout.png
public/assets/logos/travel-skout.png
public/assets/logos/expedition-skout.png
```

Run `npm run check:assets`, restart the dev server or rebuild, and visually check all four images. Images use `object-fit: contain` to preserve proportions. The company logo automatically becomes the icon and is included in the generated social card on rebuild. No screenshots, social accounts, phone number or address are required for this version.

## Configure a production domain

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin, without a path. Add the same variable to your hosting project's environment and rebuild. Neither proposed domain is hard-coded. Without this value, canonical URLs and social image URLs are omitted, and the sitemap has no entries. Both the sitemap and social metadata become complete after configuring the domain.

## Deploy to Vercel

1. Push this project to your Git repository.
2. Import the repository in Vercel and select the Next.js framework preset.
3. Use `npm ci` for installation and `npm run build` for the build; retain the default Next.js output setting.
4. Add `NEXT_PUBLIC_SITE_URL` for the final domain in the production environment.
5. Add the domain in project settings, follow the displayed DNS instructions, and deploy.
6. Verify HTTPS, all pages, social previews, images, and the email link on the deployed site.

## Other hosting providers

Netlify can deploy the standard Next.js build through its Next.js integration. For Cloudflare Pages or any static host:

```sh
npm run build:static
```

Publish `out/`. This mode exports all pages and disables server image optimization (Next.js Image still preserves image layout and lazy loading). Configure the host to serve directory index files and `404.html`. For optimized images on this mode, supply appropriately compressed originals or add a supported image CDN loader later. To return to standard hosting, run `npm run build` again before `npm start`.

## Before publishing

- Run the asset check and review the logo presentation.
- Register the domain, configure the production origin, and rebuild.
- Review company details and the simple website privacy wording against the chosen host's actual practices; this draft is not legal advice.
- Verify receipt of a test email sent by you to skoutlabs.dev@gmail.com.
- Run lint, type checks, production build, and asset checks.

The copyright year reflects the build year; rebuild at the start of a new year for prerendered hosting. The privacy date is deliberately explicit and should change only when the policy is revised. This website alone does not establish eligibility or guarantee acceptance into any developer programme.

## Browser verification

With the production server running in another terminal:

```sh
npx playwright install chromium
npm run test:browser
```

The browser check covers the five main pages plus maintenance and missing-page screens at 320, 360, 390, 480, 768, 1024, 1440 and 1920 pixels, image loading, horizontal overflow, WCAG A/AA automated accessibility checks, mobile menu keyboard behaviour, navigation links, app anchors, metadata endpoints and the 404 page. Screenshots are saved in the ignored `artifacts/` directory. Set `SKOUT_TEST_URL` to test a different local server. Automated checks supplement manual review; they do not certify accessibility.

Games are managed separately in `lib/games.ts` and rendered by `components/games/GamesSection.tsx`. Add another game to that list to include it in the games sections and Apps navigation. Leave store links null until available. Expedition Skout gameplay, platforms and release date have not been specified, so no claims about them are published.

## Error screens and maintenance

Missing URLs use the branded 404 screen. `app/error.tsx` catches page rendering errors with a retry action; `app/global-error.tsx` provides a standalone fallback for root-layout failures. These require the app to reach the browser: a complete hosting outage or first-visit offline connection needs a hosting-level fallback.

Preview the maintenance screen at `/maintenance`. To show it across the site, set `SKOUT_MAINTENANCE=1` before building and deploying; unset it (or set to `0`) and rebuild to reopen. This works with both normal and static builds. The maintenance preview is excluded from indexing. For temporary downtime in production, configure your host to serve the maintenance page with HTTP 503 and a Retry-After header; the build-time screen alone does not change response status codes.
