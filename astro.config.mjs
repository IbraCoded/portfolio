// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  // Your domain. It is used for share-preview images and canonical links.
  site: 'https://ibracoded.dev',

  // The stylesheet is small, so inline it and save a round trip on mobile.
  build: { inlineStylesheets: 'always' },

  // Fonts are downloaded from Google at build time and served from this site.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Instrument Sans',
      cssVariable: '--font-instrument-sans',
      weights: ['400 700'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'IBM Plex Mono',
      cssVariable: '--font-plex-mono',
      weights: [400],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'monospace'],
    },
  ],
});
