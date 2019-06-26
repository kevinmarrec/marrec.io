import * as mdi from '@mdi/js'

const icons = {
  github: mdi.mdiGithubCircle,
  linkedin: mdi.mdiLinkedin,
  twitter: mdi.mdiTwitter
}

export default ['@nuxtjs/vuetify', {
  defaultAssets: false,
  icons: {
    iconfont: 'mdiSvg',
    values: icons
  }
}]
