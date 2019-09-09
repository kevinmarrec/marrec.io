import head from './head'
import manifest from './manifest'
import meta from './meta'
import modules from './modules'

export default {
  build: { publicPath: '/assets/' },
  css: ['~/assets/style/app'],
  head,
  manifest,
  meta,
  modern: process.env.NODE_ENV === 'production',
  ...modules,
  plugins: ['~/config/plugins/function']
}
