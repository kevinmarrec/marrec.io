import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  buildModules: [
    '@unocss/nuxt',
    './modules/pwa'
  ],
  unocss: {
    preflight: true,
    icons: true
  },
  pwa: {
    icon: {
      sizes: [384, 512]
    },
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
      mobileAppIOs: true,
      ogHost: 'https://marrec.io',
      twitterCard: 'summary',
      twitterSite: '@K_Marrec',
      twitterCreator: '@K_Marrec'
    }
  }
})
