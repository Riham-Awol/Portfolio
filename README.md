# Riham Awol — Personal Portfolio

A modern personal portfolio built with **Next.js** (App Router), **TypeScript**,
and **Tailwind CSS v4**, animated with **Framer Motion**. Cherry red / dark
navy palette, with a real, dedicated route for every page and project.

## Stack

- Next.js 16 (App Router, statically generated pages + one API route)
- TypeScript
- Tailwind CSS v4 (theme tokens in `app/globals.css`)
- Framer Motion (scroll reveals, animated counters, hover interactions)
- Resend (contact form / chat widget email delivery)

## Structure

```
app/
  layout.tsx                Root layout: fonts, Header, Footer, FloatingChat
  page.tsx                  Homepage: Hero, About/Skills teasers, Featured Work, Contact CTA
  about/, skills/, projects/, resume/, contact/   One route per nav item
  projects/[slug]/page.tsx  One statically generated page per project
  api/contact/route.ts      Sends contact form + chat messages via Resend
  icon.tsx, apple-icon.tsx  Dynamically generated favicon / touch icon
components/
  Header.tsx, Footer.tsx    Shared nav + footer (used on every route)
  ContactForm.tsx           The /contact page form
  FloatingChat.tsx          Site-wide floating "quick chat" widget
  sections/                 Page content: Hero, About, Skills, Projects, Contact, Resume, teasers
lib/
  projects.ts               Single source of truth for all project content
public/
  riham.jpg                 Profile photo
  resume/                   Resume PDF + temporary degree PDF, plus their preview thumbnails
```

## Contact form & chat widget — email delivery

Both the `/contact` form and the floating chat widget POST to `/api/contact`,
which sends the message to `rihamha1920@gmail.com` via
[Resend](https://resend.com). **This requires one environment variable:**

```
RESEND_API_KEY=re_your_key_here
```

Set it in Vercel under Project Settings → Environment Variables. To get a key:

1. Sign up at resend.com **using rihamha1920@gmail.com** (their free/sandbox
   tier only allows sending to the account's own email until you verify a
   custom domain — matching the signup email avoids needing that step).
2. Create an API key and add it as `RESEND_API_KEY` in Vercel.
3. Redeploy.

If the key is missing or sending fails for any reason, both the form and the
chat widget automatically fall back to opening the visitor's email app with
the message pre-filled, so messages are never silently lost.

## Editing projects

All project content (name, tagline, description, features, tech stack, GitHub
link) lives in one place: the `projects` array in `lib/projects.ts`. It powers
both the homepage grid and every `/projects/<slug>` page — add an entry there
and the new project page is generated automatically at build time, no other
files need to change.

## Updating your resume / degree

Replace the files in `public/resume/` (`riham-awol-resume.pdf`,
`riham-awol-degree.pdf`) and their preview thumbnails (`resume-thumb.jpg`,
`degree-thumb.jpg`) — the `/resume` page just links to those paths.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Building

```bash
npm run build
npm run start
```

## Deploying

Zero-config on **Vercel** — just import the repo (remember to set
`RESEND_API_KEY` per above).
