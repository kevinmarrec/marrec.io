export default {
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify'
  ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/google-analytics',
    'nuxt-webfontloader'
  ],

  'google-analytics': {
    debug: {
      sendHitTask: process.env.NODE_ENV === 'production'
    },
    id: 'UA-131596114-1',
    set: [
      { field: 'anonymizeIp', value: true }
    ]
  },

  vuetify: {
    defaultAssets: {
      icons: false
    },
    optionsPath: '~/vuetify/index.js'
  }
}
