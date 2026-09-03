# Riham Awol — Personal Portfolio

A modern personal portfolio built with **Next.js** (App Router), **TypeScript**,
and **Tailwind CSS v4**, animated with **Framer Motion**. Cherry red / dark
navy palette, with a real, dedicated route for every page and project.

## Stack

- Next.js 16 (App Router, statically generated pages + a few API routes)
- TypeScript
- Tailwind CSS v4 (theme tokens in `app/globals.css`)
- Framer Motion (scroll reveals, animated counters, hover interactions)
- Postgres (`pg`) — stores contact form / chat messages for the admin inbox
- Resend — optional email copy of the same messages

## Structure

```
app/
  layout.tsx                Root layout: fonts, Header, Footer, FloatingChat
  page.tsx                  Homepage: Hero, About/Skills teasers, Featured Work, Contact CTA
  about/, skills/, projects/, resume/, contact/   One route per nav item
  projects/[slug]/page.tsx  One statically generated page per project
  api/contact/route.ts      Saves contact form + chat messages (+ optional email)
  api/admin/login, logout   Admin session cookie
  admin/page.tsx            Password-protected inbox of saved messages
  icon.tsx, apple-icon.tsx  Dynamically generated favicon / touch icon
components/
  Header.tsx, Footer.tsx    Shared nav + footer (used on every route)
  ContactForm.tsx           The /contact page form
  FloatingChat.tsx          Site-wide floating "quick chat" widget
  AdminLogin.tsx, AdminInbox.tsx   The /admin page's login form and message list
  sections/                 Page content: Hero, About, Skills, Projects, Contact, Resume, teasers
lib/
  projects.ts               Single source of truth for all project content
  db.ts                     Postgres connection + message storage
  adminAuth.ts               Password check + signed session cookie for /admin
public/
  riham.jpg                 Profile photo
  resume/                   Resume PDF + temporary degree PDF, plus their preview thumbnails
```

## Contact form & chat widget — where messages go

Both the `/contact` form and the floating chat widget POST to `/api/contact`,
which **saves every message to a Postgres database** so you can read them at
`/admin` (password-protected, not linked anywhere in the nav). Email is
optional and just an extra copy — set it up too if you want, or skip it.

### 1. Database (required for the admin inbox)

Add a Postgres database from Vercel's **Storage** tab (Vercel → your project →
Storage → Create Database → Postgres, e.g. Neon). Connecting it to the
project auto-injects a connection string env var — copy its value into:

```
DATABASE_URL=postgres://...
```

(Vercel Postgres/Neon integrations usually inject this as `POSTGRES_URL` —
if so, just add a second env var named exactly `DATABASE_URL` with the same
value, since that's the name this app reads.) The `messages` table is
created automatically the first time someone submits a message.

### 2. Admin password (required for the admin inbox)

```
ADMIN_PASSWORD=choose-a-strong-password
```

Set it in Vercel under Project Settings → Environment Variables, then visit
`/admin` on your deployed site and sign in with that password. Sessions are
a signed cookie (HMAC of the password, not the password itself) that lasts
30 days.

### 3. Email copy (optional)

```
RESEND_API_KEY=re_your_key_here
```

1. Sign up at resend.com **using rihamha1920@gmail.com** (their free/sandbox
   tier only allows sending to the account's own email until you verify a
   custom domain — matching the signup email avoids needing that step).
2. Create an API key and add it as `RESEND_API_KEY` in Vercel.

If neither the database nor Resend is configured (or both fail), the form and
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

Zero-config on **Vercel** — just import the repo (remember to set up the
database and `ADMIN_PASSWORD` per above so `/admin` works, and `RESEND_API_KEY`
if you also want email copies).
