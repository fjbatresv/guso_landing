# Guso case study

A bilingual public case study for a patient healthcare app, built with Astro and Starlight. The English landing is at `/`, the Spanish landing at `/es/`, and technical notes at `/docs/`.

The repository contains site code and high-level product documentation only. Examples use fictional patient and prescription details. Product content and brand are © Javier Batres; the site code is available under the MIT License.

## Local workflow

```sh
npm ci
npm run dev
npm run build
node tools/check-sanitized.mjs
```

The sanitizer checks `src`, `public`, and `dist` for private identifiers, unapproved emails, and image metadata. GitHub Pages builds with Node 24 and deploys from `main`. Set the repository variable `PAGES_CUSTOM_DOMAIN` to use the custom domain.

## Design and content

See [DESIGN.md](DESIGN.md) for the token set and critique against the approved brief. Product screenshots are reconstructed with fictional content; no live account or service is required.
