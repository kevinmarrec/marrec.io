import { build, head, hooks, manifest, meta } from './config'

const isProduction: boolean = process.env.NODE_ENV === 'production'

export default {
  build,
  head,
  hooks,
  manifest,
  meta,
  modern: isProduction,
  watch: ['~/config/*'],

  css: [
    '~/assets/style/app.styl'
  ],

  /**
   * Modules
   */

  modules: [
    '@nuxtjs/google-analytics',
    '@nuxtjs/pwa',
    '@nuxtjs/redirect-module',
    '@nuxtjs/vuetify',
    'nuxt-webfontloader'
  ],

  'google-analytics': {
    debug: {
      sendHitTask: isProduction
    },
    id: 'UA-131596114-1',
    set: [
      { field: 'anonymizeIp', value: true }
    ]
  },

  redirect: [
    { from: '/fr', to: '/', statusCode: 301 }
  ],

  vuetify: {
    css: !isProduction,
    materialIcons: false,
    treeShake: isProduction
  },

  webfontloader: {
    google: {
      families: ['Roboto:300,400,500,700']
    }
  }
}
