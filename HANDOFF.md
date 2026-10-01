# Handoff for Claude Code

This is my portfolio site. It was written in a cloud session that couldn't install npm packages, so **it has never been built or run**. Your job is to get it building and running, check it carefully, and finish the items below without changing the design direction.

## Who it's for

I'm Ibrahim Adeshina, a software engineer in Glasgow specialising in backend systems (Python, Django, FastAPI, PostgreSQL, TypeScript). The site is for UK recruiters and hiring engineers. It should say who I am in five seconds and prove it with one deep featured project.

## Design (keep this)

Direction "B, commit log": dark navy, one amber accent, calm and precise.

- **Colours** (tokens at the top of `src/styles/global.css`): ground `#0E1B33`, deeper band `#0A1529`, raised `#12213F`, lines `#26385F` / `#3A4E78`, text `#E6EBF5`, muted `#9AA8C4`, accent amber `#F4B740` (text on amber is navy).
- **Type:** Instrument Sans for everything, weight 600 for headings, with tight negative letter-spacing on large headings. IBM Plex Mono only for real code (the SQL demo, code in case studies). Never use mono for labels.
- **Motion:** one entrance on page load (headline, then hero body: fade and 8px rise, `cubic-bezier(0.23, 1, 0.32, 1)`, about 500ms). After that, motion only in response to the user: buttons scale to 0.97 when pressed, colour transitions of 160ms, and the "Run the transfer" replay. No scroll-triggered animations, no hover effects on every card, no parallax. `prefers-reduced-motion` must turn motion off.
- **Avoid:** all-caps eyebrow labels, `→` on links, middle-dot separators, gradient washes, identical rounded cards with soft shadows, emoji. Numbering is only for real sequences (the four transfer steps are a real sequence).
- **Page order:** header (with a CV button that's always visible) → hero (headline, intro, Download CV + View selected work, facts list) → featured project (tag, title, description, links, SQL demo, four numbered steps, evidence) → More work → About (with photo) → Experience (vertical timeline) → Contact (big headline, email with copy button, links) → footer.

## How it's built (keep this)

- Astro, plain CSS (global tokens plus scoped component styles), no Tailwind, no React. Keep dependencies minimal so the site never rots.
- `src/site.config.ts` holds all personal text. Projects are Markdown files in `src/content/projects/`, using the schema in `src/content.config.ts`.
- Exactly one project has `featured: true`. The featured layout is generic: it renders `description`, `highlights` (numbered when `highlightsAreSteps`), `evidence` and an optional `demo` looked up by name in `src/components/demos/index.ts`.
- A project gets a case study page at `/projects/<id>/`, and a "Read the case study" link, **only** if its Markdown file has body text. None do yet, which is intentional.

## Tasks

1. `npm install astro` and `npm install -D @astrojs/check typescript`. Use the current stable Astro. If the content collections API differs from what's written (`src/content.config.ts` uses the `glob` loader, `astro/zod` and `render()` from `astro:content`), adapt it to the installed version.
2. Run `npm run build` and fix every error and type error. Then run `npm run dev` and open the site.
3. Check it in a browser at 390px, 768px and 1440px wide:
   - No horizontal scroll at 390px.
   - The header wraps cleanly on phones.
   - The SQL demo scrolls sideways inside its own box on phones instead of stretching the page.
   - The facts list and the More work rows stack properly.
4. Test the interactions:
   - "Run the transfer" replays the SQL line by line, and works when clicked again mid-replay.
   - "Copy email" copies and briefly shows "Copied".
   - Both CV buttons download the PDF.
   - Every link goes somewhere real (no `#` placeholders).
5. Accessibility: run a Lighthouse or axe check and fix anything real. Check visible keyboard focus everywhere, the skip link, text contrast of at least 4.5:1 (check `--code-comment` on the dark code background in particular), and the alt text on the photo.
6. Create `public/og.png` at 1200×630 for link previews. Use the navy ground, my name, "Software engineer, specialising in backend systems", an amber dot, and optionally the photo on the right. You can make it with a small one-off script, but don't add a runtime dependency for it.
7. Aim for Lighthouse 95+ on performance, accessibility, best practices and SEO for mobile. Fonts currently load from Google Fonts. Self-host them only if that clearly improves things without adding much complexity.
8. Ask me for my domain, then set `site` in `astro.config.mjs`.
9. `git init`, make a first commit, and help me push to a new GitHub repo `IbraCoded/portfolio`. Then walk me through the Cloudflare steps in `README.md`.

## Facts to keep accurate

All content comes from my CV (`public/Ibrahim_Adeshina_CV.pdf`). Don't invent numbers, employers, dates or results. If something is missing, ask me.
