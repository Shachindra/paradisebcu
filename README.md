# Paradise | Brigade Cornerstone Utopia

Residents' site for Paradise at Brigade Cornerstone Utopia, Varthur, Bengaluru. It is a static Next.js site, built with pnpm, for GitHub Pages.

## Develop

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit the site

Notices, home sizes, amenities, emergency lines, and association contact details live in [`src/content/site.ts`](src/content/site.ts).

- Set `associationEmail` and `associationPhone` before the contact form and directory show a real address.
- Replace the sample notices. Each sample has `sample: true`. Remove that flag on a real circular.
- The logo is [`src/assets/logo.png`](src/assets/logo.png). The browser icon is [`src/app/icon.png`](src/app/icon.png).

## Build

```bash
pnpm build
```

The static site is written to `out/`. `output: 'export'` is set so GitHub Pages can host the files without a Node server. Image optimization is off for the same reason.

A project site is served from `/<repository>/`. The Pages workflow sets that prefix from `actions/configure-pages`. Local `pnpm dev` and `pnpm build` leave the prefix empty, so the site stays at `/`.

## GitHub Pages

1. Push the repository to GitHub.
2. In **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main`. The workflow [`.github/workflows/pages.yml`](.github/workflows/pages.yml) builds `out/` and deploys it.

Trailing slashes are on, so each route is a folder with `index.html`. That matches how GitHub Pages serves clean URLs.
