# Pictopia Photobooth — demo website

A proposal demo for Pictopia Photobooth (Tarlac & Pampanga). Built with Next.js 16 (App Router), TypeScript and Tailwind CSS v4.

The site is styled as the production site would look, with no demo banner. **However, the forms are still front-end only.** Booking requests, partner enquiries and newsletter sign-ups are validated in the browser and stored only in `localStorage`; nothing reaches Pictopia. Connect `submitBookingRequest` (and the two other forms) to a real backend before sending real customers to it. There is no payment step: the business takes no deposit, so Stripe isn't used.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (type-checks)
npm run lint
```

Requires Node 20.9+.

## Environment variables

Copy `.env.example` to `.env.local`.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_AGENCY_NAME` | Footer credit ("Website by …"), defaults to CK David |
| `NEXT_PUBLIC_SITE_URL` | Deployed URL, used in metadata, the sitemap and JSON-LD |

## Where things live

| Path | What |
|---|---|
| `content/` | All business facts, prices, FAQs and events. Each item has a `source` ID pointing into `research/sources.md`, or `sample: true` |
| `lib/booking.ts` | Pricing, simulated availability, validation, local persistence and `.ics` generation. **Swap `isDateBooked` and `submitBookingRequest` for a real calendar/API in the paid build** |
| `components/HoursPlanner.tsx` | The booth-hours planner (2 operating hours around a 1–2 hour pause) |
| `components/PrintPreview.tsx`, `HeroBooth.tsx` | Hand-drawn SVG illustrations (no stock photos used) |
| `research/`, `plan/` | Research, sources, feature map, sitemap and design plan |

## Demo behaviours to know
- Booked dates on the calendar are generated sample data (about 30% of weekends).
- Bookings need 2 days' notice.
- The whole site is `noindex` and `robots.txt` disallows all crawlers, so the demo never competes with the business's own pages. Remove both before launch (`app/layout.tsx` → `robots`, and `app/robots.ts`).

## Deploy (Vercel)

```bash
npx vercel          # preview
npx vercel --prod   # production
```

Set the two environment variables in the Vercel project settings.
