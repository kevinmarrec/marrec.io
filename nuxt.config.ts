import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  app: {
    buildAssetsDir: '/assets/'
  },
  buildModules: [
    '@kevinmarrec/nuxt-pwa',
    '@unocss/nuxt'
  ],
  unocss: {
    preflight: true,
    icons: true
  },
  pwa: {
    manifest: {
      name: 'Marrec.io',
      short_name: 'Marrec.io',
      background_color: '#111827',
      theme_color: '#3B82F6'
    },
    meta: {
      name: 'Kevin Marrec | Marrec.io',
      author: 'Kevin Marrec',
      description: 'Kevin Marrec, Full-stack Developer.',
      mobileAppIOS: true,
      ogHost: 'https://marrec.io',
      twitterCard: 'summary',
      twitterSite: '@K_Marrec',
      twitterCreator: '@K_Marrec'
    }
  }
})
