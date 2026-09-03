# Riham Awol — Personal Portfolio

A modern personal portfolio built with plain HTML/CSS/JS — no build step
required. Sage green, brown, beige & neutral color palette, with a dedicated
detail page for every project.

## Structure

```
index.html               Homepage: hero, about, skills, projects grid, contact
projects/<slug>.html      One page per project (identical shell — content is
                          populated at runtime from js/projects-data.js)
css/style.css             Styling, palette, animations
js/projects-data.js       Single source of truth for all project content
js/layout.js              Shared header + footer, injected on every page
js/home.js                Homepage-only behavior (grid, typed text, counters)
js/project-page.js        Project-page-only behavior (populates content, prev/next)
assets/                   Put riham.jpg (your photo) here
```

## Adding your photo

Drop a square image at `assets/riham.jpg`. Until it's there, the hero shows an
"RA" monogram placeholder automatically — the page still looks complete either way.

## Editing projects

All project content (name, tagline, description, features, tech stack, GitHub
link) lives in one place: the `PROJECTS` array in `js/projects-data.js`. It
powers both the homepage grid and every `/projects/<slug>.html` page.

To add a new project:
1. Add an entry to the `PROJECTS` array with a unique `slug`.
2. Copy `projects/e-commerce.html` to `projects/<slug>.html` and change the
   `data-slug` value on `<body>` to match.

No other files need to change — the new page renders itself from the data.

## Editing the header/footer

Both are shared across every page and defined once in `js/layout.js` —
edit them there instead of in individual HTML files.

## Running locally

No build tools needed — just serve the folder:

```bash
python3 -m http.server 8000
```

(Opening `index.html` directly via `file://` also mostly works, but some
browsers restrict local script access — a local server is more reliable.)

## Deploying

Works as a zero-config static site on **Vercel**, **Netlify**, or **GitHub Pages** —
just point them at this repo, no framework/build settings needed.
