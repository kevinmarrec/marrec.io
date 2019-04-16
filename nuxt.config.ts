import { build, css, head, hooks, manifest, meta, modules, utils } from './config'

export default {
  build,
  css,
  head,
  hooks,
  manifest,
  meta,
  modern: utils.isProduction,
  modules,
  watch: ['~/config/*']
}
