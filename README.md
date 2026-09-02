# Aladesuyi Praise Kolade — Portfolio

Personal portfolio site, built with React, TypeScript, Tailwind CSS, and Vite.

Live: (add your deployed URL here once live)

## Making edits

All the actual content lives in `src/data/` as plain, readable files — you
never need to touch the design/layout code to update text, add a project, or
change a link.

| To change...                          | Edit this file                |
|----------------------------------------|--------------------------------|
| Name, bio, tagline, stats, resume link | `src/data/profile.ts`         |
| Contact info & social links            | `src/data/profile.ts`         |
| Work experience                        | `src/data/experience.ts`      |
| Skills & percentages                   | `src/data/skills.ts`          |
| Services offered                       | `src/data/services.ts`        |
| Projects (add one, add a live/GitHub link) | `src/data/projects.ts`    |
| Testimonials                           | `src/data/testimonials.ts`    |

For projects specifically: each entry has a `live` and `repo` field. Leave
either as `""` (empty) if you don't have that link yet — the button for it
just won't show up on the card. Fill it in later and it appears automatically.

## Running locally

```bash
npm install
npm run dev        # local dev server with hot reload
npm run build       # production build, output in dist/
npm run preview     # preview the production build locally
```

## Deploying

Push to GitHub, then import the repo into Netlify or Vercel. Both auto-detect
Vite projects — no special config needed. Build command: `npm run build`,
output directory: `dist`.
