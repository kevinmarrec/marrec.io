import { build, head, manifest, meta } from './config'

const isProduction: boolean = process.env.NODE_ENV === 'production'

export default {
  modern: isProduction,
  // Watch config subfiles
  watch: ['~/config/*'],
  head,
  meta,

  css: [
    '~/assets/style/app.styl'
  ],

  /*
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
    id: 'UA-131596114-1',
    debug: {
      sendHitTask: isProduction
    }
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
  },

  manifest,
  build
}
