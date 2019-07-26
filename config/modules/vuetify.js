import * as mdi from '@mdi/js'
import colors from 'vuetify/es5/util/colors'

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
  },
  theme: {
    themes: {
      light: {
        primary: colors.teal.base
      }
    }
  }
}]
