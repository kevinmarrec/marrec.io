import build from './build'
import { isProduction } from './env'
import head from './head'
import manifest from './manifest'
import meta from './meta'
import { buildModules, modules } from './modules'
import plugins from './plugins'

export default {
  build,
  buildModules,
  components: true,
  generate: {
    fallback: true
  },
  head,
  manifest,
  meta,
  modern: isProduction && 'client',
  modules,
  plugins,
  telemetry: false
}
