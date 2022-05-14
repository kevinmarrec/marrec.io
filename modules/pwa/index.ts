import { join } from 'path'
import { defineNuxtModule } from '@nuxt/kit'
import icon from './icon'
import manifest from './manifest'
import meta from './meta'
import workbox from './workbox'
import type { PWAOptions, PWAContext } from './types'

const modules = { icon, manifest, meta, workbox }

export default defineNuxtModule<PWAOptions>({
  meta: {
    name: 'pwa'
  },
  defaults: nuxt => ({
    icon: {
      source: null,
      sizes: [],
      fileName: 'icon.png',
      targetDir: 'icons'
    },
    manifest: {
      name: process.env.npm_package_name,
      short_name: process.env.npm_package_name,
      description: process.env.npm_package_description,
      lang: 'en',
      start_url: nuxt.options.app.baseURL + '?standalone=true',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#000000',
      icons: []
    },
    meta: {
      name: process.env.npm_package_name,
      author: process.env.npm_package_author_name,
      description: process.env.npm_package_description,
      favicon: true,
      mobileApp: true,
      mobileAppIOS: false,
      appleStatusBarStyle: false,
      theme_color: undefined,
      lang: 'en',
      ogType: 'website',
      ogSiteName: true,
      ogTitle: true,
      ogDescription: true,
      ogImage: true,
      ogHost: undefined,
      ogUrl: true,
      twitterCard: undefined,
      twitterSite: undefined,
      twitterCreator: undefined
    },
    workbox: {
      workboxVersion: '6.5.3',
      workboxUrl: null
      // TODO: More Workbox options
    }
  }),
  setup (options, nuxt) {
    if (nuxt.options.dev) { return }

    const pwa: PWAContext = {
      ...options,
      _buildDir: join(nuxt.options.buildDir, 'pwa')
    }

    for (const name in modules) {
      if (pwa[name] === false) { continue }
      modules[name](pwa)
    }

    const { nitro } = nuxt.options
    nitro.publicAssets = nitro.publicAssets || []
    nitro.publicAssets.push({ dir: pwa._buildDir })
  }
})
