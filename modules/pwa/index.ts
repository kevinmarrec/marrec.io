import { defineNuxtModule, createResolver, addTemplate, addPlugin, addPluginTemplate } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'pwa'
  },
  setup (_, nuxt) {
    if (nuxt.options.dev) { return }

    const { resolve } = createResolver(import.meta.url)

    const pwaAssetsDir = resolve(nuxt.options.buildDir, 'pwa')

    addTemplate({
      src: resolve('./templates/sw.js'),
      dst: resolve(pwaAssetsDir, 'sw.js'),
      write: true
    })

    addTemplate({
      src: resolve('./templates/manifest.json'),
      dst: resolve(pwaAssetsDir, 'manifest.json'),
      write: true
    })

    addPlugin(resolve('./runtime/plugin'))

    const { nitro } = nuxt.options
    nitro.publicAssets = nitro.publicAssets || []
    nitro.publicAssets.push({ dir: pwaAssetsDir })
  }
})
