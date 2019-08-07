export default {
  devModules: [
    '@nuxtjs/vuetify'
  ],
  modules: [
    '@nuxt/typescript-build',
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
    defaultAssets: false,
    optionsPath: '~/vuetify/index.js'
  },

  webfontloader: {
    google: {
      families: ['Roboto:100,300,400,500,700,900&display=swap']
    }
  }
}
