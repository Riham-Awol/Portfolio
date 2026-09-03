# Riham Awol — Personal Portfolio

A modern personal portfolio built with **Next.js** (App Router), **TypeScript**,
and **Tailwind CSS v4**, animated with **Framer Motion**. Sage green, brown,
beige & neutral color palette, with a real, dedicated route for every project.

## Stack

- Next.js 16 (App Router, statically generated project pages)
- TypeScript
- Tailwind CSS v4 (theme tokens in `app/globals.css`)
- Framer Motion (scroll reveals, animated counters, hover interactions)

## Structure

```
app/
  layout.tsx              Root layout: fonts, Header, Footer, background blobs
  page.tsx                Homepage: composes the section components below
  globals.css             Tailwind import + color/animation tokens
  projects/[slug]/page.tsx  One statically generated page per project
components/
  Header.tsx, Footer.tsx    Shared nav + footer (used on every route)
  Hero/PhotoFrame/TypedRole/StatCounter/ProjectCard/Reveal/BlobBackground
  sections/                Home page sections (Hero, About, Skills, Projects, Contact)
lib/
  projects.ts              Single source of truth for all project content
public/
  riham.jpg                Your photo goes here (see below)
```

## Adding your photo

Drop a square image at `public/riham.jpg`. Until it's there, the hero shows an
"RA" monogram placeholder automatically — no code changes needed.

## Editing projects

All project content (name, tagline, description, features, tech stack, GitHub
link) lives in one place: the `projects` array in `lib/projects.ts`. It powers
both the homepage grid and every `/projects/<slug>` page — add an entry there
and the new project page is generated automatically at build time, no other
files need to change.

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

Zero-config on **Vercel** — just import the repo, no settings needed.
