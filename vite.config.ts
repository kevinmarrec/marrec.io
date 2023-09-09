import { sveltekit as SvelteKit } from '@sveltejs/kit/vite'
import { SvelteKitPWA } from '@vite-pwa/sveltekit'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    UnoCSS(),
    SvelteKit(),
    SvelteKitPWA({
      manifest: {
        name: 'Marrec.io',
        short_name: 'Marrec.io',
        description: 'Website of Kevin Marrec',
        theme_color: '#3B82F6',
        background_color: '#111827',
        icons: [
          {
            src: 'icons/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'icons/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        navigateFallback: '/404.html',
        additionalManifestEntries: [{ url: '/404.html', revision: null }],
      },
    }),
  ],
})
