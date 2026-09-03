# Riham Awol — Personal Portfolio

A modern, animated personal portfolio built with plain HTML/CSS/JS — no build
step required. Sage green, brown, beige & neutral color palette.

## Structure

```
index.html        Page markup
css/style.css      Styling, palette, animations
js/script.js       Scroll reveal, nav, typing effect, project cards
assets/            Put riham.jpg (your photo) here
```

## Adding your photo

Drop a square image at `assets/riham.jpg`. Until it's there, the hero shows an
"RA" monogram placeholder automatically — the page still looks complete either way.

## Editing projects

Project cards are data-driven — edit the `projects` array at the top of
`js/script.js` to add, remove, or reorder projects.

## Running locally

No build tools needed — just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
```

## Deploying

Works as a zero-config static site on **Vercel**, **Netlify**, or **GitHub Pages** —
just point them at this repo, no framework/build settings needed.
