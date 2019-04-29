import * as icons from '@mdi/js'

const paths = {
  github: icons.mdiGithubCircle,
  linkedin: icons.mdiLinkedin,
  twitter: icons.mdiTwitter
}

export default Object.keys(paths).reduce((result, key) => {
  result[key] = `svg-${paths[key]}`
  return result
}, {})
