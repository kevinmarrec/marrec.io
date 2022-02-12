import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  buildModules: [
    '@unocss/nuxt'
  ],
  unocss: {
    preflight: true
  }
})
