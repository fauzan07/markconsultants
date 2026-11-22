# Mark Consultants Website Plan

## Implementation approach

Build a single-page Next.js App Router website with server rendering for the marketing content and small client components for the mobile navigation, service pre-selection, FAQ accordion, testimonials, and contact form. Use SCSS variables, mixins, global styles, and component-scoped SCSS modules. Keep the page content semantic and crawler-visible in the initial HTML. The contact API uses Nodemailer only when SMTP variables are configured and returns a safe, actionable error otherwise.

The page is organized as a reusable section system: Header, Hero, About, Vision & Mission, Services, Why Us, Stats, Industries, Process, Testimonials, FAQ, CTA, ContactForm, Contact details, Footer, and FloatingButtons. Images are local assets in `public/images` with descriptive alt text and gradient overlays for consistent art direction. The address remains the requested placeholder until the business provides a real office location.

Project structure:

- `app/layout.js`: root metadata, font loading, global stylesheet, LocalBusiness JSON-LD.
- `app/page.js`: server-rendered single-page content and section composition.
- `app/page.module.scss`: page-level layout and section treatments.
- `app/api/contact/route.js`: validated lead capture, honeypot, in-memory rate limit, Nodemailer email delivery.
- `components/`: interactive and reusable UI modules.
- `styles/`: SCSS variables, mixins, and globals.
- `public/images/`: compressed, locally served royalty-free photography.
- `public/manus-routes.json`, `public/robots.txt`, `public/sitemap.xml`: route and crawler support.
- `README.md`, `.env.example`: setup and deployment handoff.

## Design direction

Three possible styles:

1. **Calm command center** — 0.06 probability.
2. **High-contrast digital atelier** — 0.08 probability.
3. **Quiet enterprise editorial** — 0.07 probability.

Chosen style: **Calm command center**.

- **Design Movement:** Contemporary B2B SaaS editorial design fused with a calm operations dashboard.
- **Core Principles:** Trust before spectacle; clear hierarchy; generous breathing room; evidence-led confidence.
- **Color Philosophy:** Deep navy anchors the brand in stability, electric blue signals practical momentum, and teal marks security and human support. Pale blue-gray surfaces keep dense service content easy to scan.
- **Layout Paradigm:** Offset editorial sections with asymmetric image frames, narrow content rails, and one strong focal statement per viewport instead of uniform centered grids.
- **Signature Elements:** Numbered eyebrow labels, a faint blueprint grid texture, and pill-shaped trust markers with small status dots.
- **Interaction Philosophy:** Every interaction should clarify the next action. Hover states lift cards gently; focus states are obvious; service quotes carry the selected context into the contact form.
- **Animation:** Use short 180–260ms ease-out transitions, subtle hero float, and intersection-based reveal only where it improves hierarchy. Respect `prefers-reduced-motion`.
- **Typography System:** Poppins 700/800 for headings and Inter 400/500/600 for body and UI. Oversized hero type steps down sharply at tablet and mobile breakpoints.
- **Brand Essence:** Mark Consultants makes complex IT feel governable for growing Indian businesses; practical, protective, progressive.
- **Brand Voice:** Direct, reassuring, and operational. Example lines: “Turn IT complexity into confident momentum.” “Secure the systems your business depends on.”
- **Wordmark & Logo:** A compact monogram built from two offset blue/teal brackets beside the wordmark, evoking an open system being made orderly.
- **Signature Brand Color:** Electric blue `#1E6BFF`, reserved for action, links, and the primary edge of the brand.

## Delivery decisions

- Contact details retain `[ADD OFFICE ADDRESS HERE]` rather than inventing an address.
- The About image uses the locally downloaded team image because no separate uploaded photo was present in the workspace; it is isolated so it can be replaced at `public/images/about-team.jpg` later.
- The Google Maps panel is a safe placeholder URL until the address is provided.
- SMTP secrets are never committed; only `.env.example` is included.
