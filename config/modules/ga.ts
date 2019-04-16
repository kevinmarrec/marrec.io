import { isProduction } from '../utils'

export default ['@nuxtjs/google-analytics', {
  debug: {
    sendHitTask: isProduction
  },
  id: 'UA-131596114-1',
  set: [
    { field: 'anonymizeIp', value: true }
  ]
}]
