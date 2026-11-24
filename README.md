# embarky.github.io

Personal website of Hang Yang: https://embarky.github.io

Built with [Astro](https://astro.build) on the [Starfolio](https://github.com/webrating/starfolio) template (MIT).
Every push to `main` is built and deployed to GitHub Pages by `.github/workflows/deploy.yml`.

## Edit the content

Almost everything lives in one file, `src/data/resume.tsx`:

- `description` and `summary`: the intro and the About text (Markdown)
- `sections`: turn sections on or off and change their order
- `education`, `work`, `skills`, `projects`: the timeline, skill chips and project cards
- `contact.social`: links shown in the bottom dock

Site settings, colours and font size are in `src/data/config.ts`. Project images go in `public/projects/`.
Blog posts go in `src/content/blog/*.mdx`; add a navbar entry in `resume.tsx` when the first post is published.

## Run locally

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # static site in dist/
```
