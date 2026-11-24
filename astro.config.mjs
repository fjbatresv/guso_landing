import { defineConfig, fontProviders } from "astro/config";
import starlight from "@astrojs/starlight";
import sitemap from "@astrojs/sitemap";

const base = process.env.ASTRO_BASE ?? "/";
const site = process.env.ASTRO_SITE ?? "https://guso.fjbatresv.com";

export default defineConfig({
  site,
  base,
  outDir: "./dist",
  fonts: [
    {
      name: "Figtree",
      cssVariable: "--font-display",
      provider: fontProviders.google(),
      weights: [400, 500, 600, 700, 800],
      subsets: ["latin", "latin-ext"],
      fallbacks: ["sans-serif"],
    },
    {
      name: "Atkinson Hyperlegible",
      cssVariable: "--font-body",
      provider: fontProviders.google(),
      weights: [400, 700],
      subsets: ["latin", "latin-ext"],
      fallbacks: ["sans-serif"],
    },
    {
      name: "Material Symbols Outlined",
      cssVariable: "--font-icons",
      provider: fontProviders.googleicons(),
      options: {
        experimental: {
          glyphs: [
            "calendar_month",
            "prescriptions",
            "notifications_active",
            "check_circle",
            "schedule",
            "medical_information",
            "search",
            "health_and_safety",
            "smartphone",
            "arrow_outward",
            "home",
            "event",
            "favorite",
            "person",
          ],
        },
      },
    },
  ],
  integrations: [
    starlight({
      title: "Guso technical notes",
      description:
        "Product and engineering notes for a patient healthcare app.",
      favicon: "/assets/favicon.svg",
      defaultLocale: "root",
      locales: { root: { label: "English", lang: "en" } },
      pagefind: false,
      disable404Route: true,
      customCss: ["./src/styles/starlight.css"],
      components: {
        Head: "./src/components/starlight/Head.astro",
        Search: "./src/components/starlight/Search.astro",
        ThemeSelect: "./src/components/starlight/Empty.astro",
        ThemeProvider: "./src/components/starlight/ThemeProvider.astro",
      },
      sidebar: [
        {
          label: "Product",
          items: [
            { label: "Overview", slug: "docs" },
            { label: "Product areas", slug: "docs/product-areas" },
            { label: "Key flows", slug: "docs/key-flows" },
          ],
        },
        {
          label: "Architecture",
          items: [
            { label: "Mobile app", slug: "docs/mobile-app" },
            { label: "Backend API", slug: "docs/backend-api" },
            { label: "Notifications", slug: "docs/notifications" },
          ],
        },
        {
          label: "Engineering",
          items: [
            { label: "Security", slug: "docs/security" },
            { label: "Decisions", slug: "docs/decisions" },
            { label: "Release history", slug: "docs/release-history" },
            { label: "Local development", slug: "docs/local-development" },
          ],
        },
      ],
    }),
    sitemap({
      i18n: { defaultLocale: "en", locales: { en: "en", es: "es" } },
      serialize(item) {
        const en = new URL("/", site).href;
        return item.url === en || item.url === new URL("/es/", site).href
          ? {
              ...item,
              links: [...(item.links ?? []), { lang: "x-default", url: en }],
            }
          : item;
      },
    }),
  ],
});
