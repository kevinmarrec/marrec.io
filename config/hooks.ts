export default {
  listen () {
    if (process.send) {
      process.send('ready')
    }
  }
}
