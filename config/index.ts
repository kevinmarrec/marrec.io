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
  watch: ['~/config/*']
}
