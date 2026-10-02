# Proposal — a booking website for Pictopia Photobooth

## 1. What we learned about Pictopia
Pictopia Photobooth is run by Juliette Barrera and Kenneth David, with bases in **Brgy. Estipona, Pura, Tarlac** and **Magalang, Pampanga**. It's a young business, and a busy one. In the last two weeks of September 2026 alone, the Facebook page posted albums from a wedding, an 18th birthday, a combined 1st birthday and christening at Tagpuan sa Nayon in Pura, and a 7th-anniversary celebration. Each album has 200–375 photos.

Their packages are clear and competitively priced:
- **₱3,500** for 3–4 shots per print (including the classic photo strip)
- **₱5,500** for 2 shots per print
- **₱6,000** for 1 shot per print (including Polaroid style)

Every package includes 2 hours of unlimited shots, lighting and a backdrop, props, a free custom layout, digital copies, on-site staff and a standee frame. No deposit is required.

Their standout feature is **pause time**: they stay up to 4 hours and run the booth for 2, pausing 1–2 hours during the event program. The owners say competitors don't offer this, and right now customers can't see it anywhere.

## 2. Current web presence — what's holding them back
| Problem | Evidence |
|---|---|
| The website is a single empty page | sites.google.com/view/pictopiaphotobooth shows only a banner and a button. It has no photos, prices, services or contact details |
| The promo is out of date | The site still advertises "up to ₱2,000 discount", which the owners say has ended |
| Booking is a Google Form with no prices | Customers have to message to learn the price, the most common question in this category |
| Three different phone numbers are in use | 0916 565 7183 (page intro), 0992 242 8425 (cover photo), 0954 275 5709 (booking form) |
| The business is hard to find by name | Searching "Pictopia Photobooth Tarlac" returns competitors and a Jakarta business with the same name |
| No reviews | The Facebook page shows "Not yet rated (0 reviews)" and no Google Business Profile exists |

Local competitors such as The Memoria Booth (6.1K followers, bridal-expo awards) and KN Photo & Mirror Booth also rely on Facebook messages. **None has a website where a customer can see the price and request a date.**

## 3. What the new site does
- **"Check my date" everywhere.** The main action is one tap away on every page, with a sticky bar on mobile. The date field in the hero shows straight away whether a date is open.
- **Prices up front, explained with prints.** Each package is shown as the print it produces, so the "fewer photos = bigger photos = higher price" logic makes sense at a glance.
- **The booth-hours planner.** Customers place their 2 booth hours around their own program, labelling the pause "18 roses" or "program & dinner", and add extra hours at ₱1,000 each. This turns pause time into something customers can see and try for themselves.
- **A 5-step booking request with a live total:** event → print & setup (backdrop color and finish, standee or magnetic) → booth hours → details → review. It ends with a confirmation page, an "Add to calendar" file, and buttons to message or call. The total adds up correctly at every step, and the travel fee is shown as "quoted after booking".
- **Real proof, honestly shown.** A "Recently at the booth" list shows real, dated events (no client names) linking to the Facebook albums. There are no invented reviews or ratings.
- **Built for their customers:** event types they actually serve (binyag, debut, weddings, church and corporate), a partner enquiry form for caterers and stylists, and a mobile-first layout.
- **Quality:** Lighthouse scores 95–97 for performance, 100 for accessibility and 100 for best practices. SEO scores 66 only because the demo is deliberately set to `noindex`. Every page has structured data built only from verified facts (LocalBusiness, FAQPage).

## 4. Demo vs full build
| Feature | Demo (now) | Full build |
|---|---|---|
| Availability | Sample booked dates | Synced to the owners' Google Calendar |
| Booking requests | Stored in the visitor's browser only | Sent to the owners by SMS/email/Messenger, with an admin list |
| Content editing | Developer edits code | Simple CMS for prices, events and FAQs |
| Photos | Illustrations only | Their event photos, with permission |
| Payments | None (no deposit) | Optional GCash/Maya reservation fee if they ever want one |
| Search & reviews | `noindex` | Indexed site, Google Business Profile setup, review-request link |
| Analytics | None | Conversion tracking on booking requests |
| Domain & hosting | Vercel preview URL | Custom domain (e.g. pictopiaphotobooth.com) |

## 5. Content to confirm with the client
**Sample content (marked in `content/` with `sample: true`):**
- "We reply within 24 hours": the confirmation page and FAQ
- Booked dates on the calendar are generated sample data
- Minimum booking notice of 2 days
- Booth start times offered (7:00 AM – 8:00 PM) and the maximum of 3 extra hours in the planner
- Default pause labels for each event type (e.g. "18 roses, candles & dinner")
- Legal pages: templated, need legal review and a cancellation policy

**Assets needing permission:**
- The Pictopia logo (supplied by the agency, also their Facebook profile picture)
- Any Facebook event photos for the live site. These need the owners' permission and consideration of guest consent

## 6. Open questions
1. Should the other two numbers (0992 242 8425, 0954 275 5709) be removed from the Facebook cover and booking form, so customers only see 0916 565 7183?
2. How is the travel fee worked out (by town, by distance, a flat fee per province)? Showing a guide price would remove another back-and-forth.
3. When is payment due, and what's the cancellation policy?
4. How many events can they cover on the same day? This affects how availability should work.
5. Do they have a DTI/BIR registration we can show for trust?
6. Should they keep using the Facebook page for soft copies, or would they like private album links per event?

## 7. Next steps
1. Walk the owners through the demo on their phone, starting with the booth-hours planner.
2. Confirm the sample content and open questions above.
3. Agree scope for the full build (calendar sync, notifications, CMS, domain).
4. Collect photo permissions and set up a Google Business Profile.
5. Launch, then add a review request to every confirmation.
