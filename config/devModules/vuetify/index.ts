import icons from './icons'

declare module 'vue/types/vue' {
  interface Vue {
    $vuetify?: any
  }
}

export default ['@nuxtjs/vuetify', {
  assets: false,
  icons: {
    iconfont: 'mdiSvg',
    values: icons
  }
}]
