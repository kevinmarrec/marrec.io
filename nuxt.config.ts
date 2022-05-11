import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  buildModules: [
    '@unocss/nuxt'
  ],
  unocss: {
    preflight: true,
    icons: true
  }
})
