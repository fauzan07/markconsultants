# Mark Consultants

A responsive, single-page corporate website for Mark Consultants, an Indian IT consulting and technology solutions company. The site uses Next.js App Router, React, SCSS modules, locally served Unsplash photography, `next/font`, `react-icons`, and a Nodemailer contact API.

## Local setup

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Open `http://localhost:3000`.

If you use npm instead, `npm install` and `npm run dev` work with the included package manifest.

## SMTP configuration

Add the following values to `.env.local` or your hosting provider's environment variables. Never commit real credentials.

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
MAIL_TO=mk@markconsultants.in
MAIL_CC=Sales@markconsultants.in
```

The `/api/contact` route validates the form again on the server, rejects invalid email addresses and Indian mobile numbers, uses a hidden honeypot field, and rate-limits repeated requests. When SMTP is configured, it sends the lead to `MAIL_TO` with `MAIL_CC` copied and sends a short auto-reply to the customer.

The office address intentionally remains `[ADD OFFICE ADDRESS HERE]` in the content, LocalBusiness schema, and map embed until the confirmed address is available. Replace the About image at `public/images/about-team.jpg` when the user's supplied photo is provided.

## Build and deploy

For Vercel, import the repository, keep the default Next.js build settings, add the SMTP environment variables, and deploy. For a VPS, install Node.js 20+, run `pnpm install`, set `.env.local` or process environment variables, run `pnpm build`, then use `pnpm start` behind Nginx or another reverse proxy. The app listens on `PORT` when provided and defaults to 3000.

## Main folders

- `app/` — layout, page, and contact API route.
- `components/` — header, form, FAQ and floating actions.
- `styles/` — SCSS variables, mixins and global reset.
- `public/images/` — local visual assets.
- `plan.md` and `TODO.md` — implementation decisions and outcome tracking.
