export default ['@nuxtjs/google-analytics', {
  debug: {
    sendHitTask: process.env.NODE_ENV === 'production'
  },
  id: 'UA-131596114-1',
  set: [
    { field: 'anonymizeIp', value: true }
  ]
}]
