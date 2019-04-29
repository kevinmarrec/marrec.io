import build from './build'
import css from './css'
import head from './head'
import hooks from './hooks'
import manifest from './manifest'
import meta from './meta'
import modules from './modules'
import { isProduction } from './utils'

export default {
  build,
  css,
  head,
  hooks,
  manifest,
  meta,
  modern: isProduction,
  modules,
  watch: ['~/config/*'],
  // Temporary config, should be in `~/config/modules/webfont-loader`
  // https://github.com/Developmint/nuxt-webfontloader/pull/15 - waiting release
  webfontloader: {
    google: {
      families: ['Roboto:300,400,500,700', 'Lobster:400']
    }
  }
}
