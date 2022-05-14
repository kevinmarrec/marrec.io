import { join } from 'pathe'
import { addPlugin, addTemplate, createResolver } from '@nuxt/kit'
import type { PWAContext } from '../types'

export default (pwa: PWAContext) => {
  if (!pwa.workbox) { return }

  const options = pwa.workbox

  const { resolve } = createResolver(import.meta.url)

  if (!options.workboxUrl) {
    options.workboxUrl = `https://storage.googleapis.com/workbox-cdn/releases/${options.workboxVersion}/workbox-sw.js`
  }

  // Service Worker
  addTemplate({
    src: resolve('./templates/sw.js'),
    dst: join(pwa._buildDir, 'sw.js'),
    write: true,
    options
  })

  // Plugin that registers the Service Worker
  addPlugin({
    src: resolve('./plugin'),
    mode: 'client'
  })
}
