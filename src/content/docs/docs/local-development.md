---
title: Local development
description: Safe commands and boundaries for working on this public case-study site.
---

This repository contains the public site only. It does not contain the Flutter app, backend source, private environment files, or deployment credentials.

## Build the site

```sh
npm ci
npm run dev
npm run build
node tools/check-sanitized.mjs
```

The sanitization check scans `src`, `public`, and `dist`. Keep fictional data in examples and never add secrets, private service configuration, or patient records.

The Pages workflow builds with Node 24, runs sanitization before and after the build, and publishes the generated site.

[Read the security notes](/docs/security/) or return to the [overview](/docs/).
