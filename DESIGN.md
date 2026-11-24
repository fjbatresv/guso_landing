# Design tokens and critique

## Pass 1 — approved design tokens

- Guso purple `#8E22BF` carries links, brand accents, and primary calls to action. Plum ink `#2B1038` carries headings and the contact close. Lavender mist `#F5F2F9` is the cool page surface; panels are white. Clinical mint `#127A68` signals confirmed doses, always with text. Slate `#5B5566` carries secondary copy.
- Figtree is used for display and headings; Atkinson Hyperlegible is used for body copy. Astro’s Fonts API serves both. Material Symbols Outlined is subset to page glyphs.
- Body copy is 17–18px with a measure under 75 characters. The editorial column is 72rem. Large frames and panels use 28px radii; rows and controls use 12px.
- There is one memorable interaction: the prescription lifecycle timeline. Native `<details>` elements disclose the patient view and system response. The appointment illustration and device frame support the hero without adding another interactive concept.
- Architecture is a static SVG with a text alternative. Motion is limited to timeline opening and one hero entrance; reduced-motion preferences disable transitions and smooth scrolling. Keyboard focus is visible.
- The layout is left-aligned and restrained. It avoids gradient headlines, repetitive cards, all-caps eyebrows, and decoration that competes with the case study.

## Pass 2 — critique against the brief

The result follows the approved purple, plum, lavender, mint, and slate palette with the specified font pairing. The six product capabilities use an open editorial list, while the timeline is the only repeated disclosure interaction. Each recipe step pairs patient-facing feedback with system behavior, including notification delivery and the two-hour expiry. A static diagram and its text alternative describe the mobile app, both APIs, database, Firebase services, scheduled work, and messaging. The release strip uses only the verified 0.0.12–0.0.19 range.

The responsive layout reflows at phone and tablet widths while keeping the architecture diagram readable through horizontal scrolling. Both landing locales include reciprocal language metadata, canonical URLs, unique titles and descriptions, Open Graph details, and structured data. Starlight docs carry article and breadcrumb schema; its 404 omits canonical and is marked noindex. The site includes the source illustrations, dimensions for inline images, a sitemap-linked robots file, keyboard focus, and reduced-motion handling.

The optional UI/UX and SEO skills were unavailable in this environment; those checklists were followed directly. The public copy stays at architecture level and does not reproduce private implementation code or configuration.
