import extractorSvelte from '@unocss/extractor-svelte'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
import { defineConfig } from 'unocss'

export default defineConfig({
  extractors: [extractorSvelte()],
  presets: [presetUno(), presetIcons()],
})
