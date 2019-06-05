import icons from './icons'

declare module 'vue/types/vue' {
  interface Vue {
    $vuetify?: any
  }
}

export default ['@nuxtjs/vuetify', {
  defaultAssets: {
    icons: false
  },
  icons: {
    iconfont: 'mdiSvg',
    values: icons
  }
}]
