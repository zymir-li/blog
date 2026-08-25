# Zymir's Blog

A personal blog and library built with Astro and AstroPaper.

## Local development

```sh
pnpm install
pnpm dev
```

The site runs at `http://localhost:4321` by default.

## Content

- Posts: `src/content/posts/`
- Library: `src/content/library/`
- Library covers: `src/assets/library/`

Posts and library entries are also available inside the Obsidian vault through
the `70_Blog` links. The files in this repository are the canonical public
copies.

## Build

```sh
pnpm build
```

The production site is generated in `dist/`. Pushes to `main` are deployed to
GitHub Pages by the workflow in `.github/workflows/deploy.yml`.

## Theme

Based on [AstroPaper](https://github.com/satnaing/astro-paper), licensed under
the MIT License.
