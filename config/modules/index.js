import gaModule from './ga'
import vuetifyModule from './vuetify'
import webfontLoaderModule from './webfontLoader'

export default {
  devModules: [vuetifyModule],
  modules: ['@nuxtjs/pwa', gaModule, webfontLoaderModule]
}
