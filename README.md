# Personal Portfolio & Technical Blog

A dark-themed engineering portfolio and technical blog built with **Astro**, **Tailwind CSS**, **MDX**, **KaTeX** (LaTeX math), **Expressive Code**, and built-in **Instant Search** (`⌘K` / `/`).

## Features

- **Dark-Only Theme**: Engineered around a deep obsidian palette (`#0a0c10`) with high-contrast typography and custom browser surfaces.
- **LaTeX Math Support**: Write inline (`$E = mc^2$`) and display (`$$...$$`) equations directly in `.md` or `.mdx` posts via `remark-math` and `rehype-katex`.
- **IDE-Grade Code Blocks**: Powered by `astro-expressive-code` with file headers, line highlights, and copy-to-clipboard buttons.
- **Instant Site Search (`⌘K` / `/`)**: Static JSON search index (`/search-index.json`) generated at build time, searchable via a keyboard-accessible `<dialog>` modal across articles, projects, and experience.
- **Static Export Ready**: Deploys out of the box to **Vercel**, **Netlify**, or **GitHub Pages** (`dist/`).

## Quick Start

```bash
bun install
bun run dev       # Start local dev server at http://localhost:4321
bun run build     # Build static site into ./dist
bun run preview   # Preview production build locally
```

## Authoring Technical Blog Posts

Create a `.md` or `.mdx` file in `src/content/blog/`:

```markdown
---
title: "Your Technical Post Title"
description: "A concise summary of the post."
pubDate: 2026-10-24
tags: ["systems", "math", "rust"]
draft: false
---

Inline math works with $\mathcal{O}(n \log n)$ and block math uses double dollar signs:

$$
\mathrm{Attention}(Q, K, V) = \mathrm{softmax}\!\left(\frac{QK^\top}{\sqrt{d_k}}\right)V
$$
```

## Updating Portfolio & Experience

Edit `src/data/site.ts` to update your name, bio, social links, career history (`EXPERIENCE`), and portfolio projects (`PROJECTS`).
