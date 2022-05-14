import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  buildModules: [
    '@unocss/nuxt',
    './modules/pwa'
  ],
  unocss: {
    preflight: true,
    icons: true
  }
})
