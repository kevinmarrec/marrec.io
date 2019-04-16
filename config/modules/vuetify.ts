import { isProduction } from '../utils'

export default ['@nuxtjs/vuetify', {
  css: !isProduction,
  materialIcons: false,
  treeShake: isProduction
}]
