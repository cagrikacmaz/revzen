# Revzen investor site

Bilingual (Turkish / English) web version of the Revzen investor presentation, October 2026.
Built with Astro as a static site and published on GitHub Pages.

- Turkish: `/revzen/tr/`
- English: `/revzen/en/`
- The root `/revzen/` redirects based on the browser language (Turkish by default).

## Development

```bash
npm install
npm run dev      # local dev server
npm test         # calculator acceptance tests (Vitest)
npm run build    # static build into dist/
```

All copy lives in `src/i18n/tr.ts` and `src/i18n/en.ts`. Components read from these files only.
The scenario calculator logic is in `src/lib/calc.ts` and is covered by `src/lib/calc.test.ts`.

The deck PDF is served from `public/Dinamik_Yapay_Pencere_Yatirimci_Sunumu.pdf`.
If the file is missing at build time, the download links are hidden automatically.

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`: tests, Astro build, then GitHub Pages deploy.
`site` and `base` are set in `astro.config.mjs` for the `revzen` repository name.

## Privacy and access: read this before sharing

- Every page carries `<meta name="robots" content="noindex, nofollow">` and `robots.txt` disallows all crawling.
  There is no sitemap and the Open Graph image contains no financial figures.
  This keeps the site out of search results, but it is **not access control**.
- The published GitHub Pages site is reachable by **anyone who has the link**.
- With a public repository, the source code and every figure in it are also visible on GitHub.
- GitHub Pro only makes the repository private. The Pages site itself stays public.
- If real access control is needed later, the option is **Cloudflare Pages + Cloudflare Access**
  (free tier, login with a one-time code sent by email). The `dist/` output of this project can be
  deployed there as is, after changing `site` and `base` in `astro.config.mjs`.
