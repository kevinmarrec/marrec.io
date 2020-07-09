export const buildModules = [
  '@nuxt/typescript-build',
  [
    '@nuxtjs/tailwindcss', {
      configPath: '~/config/tailwind.config.js',
      cssPath: '~/assets/css/tailwind.pcss'
    }
  ]
]

export const modules = [
  [
    '@nuxtjs/pwa',
    {
      workbox: {
        clientsClaim: false
      }
    }
  ]
]
