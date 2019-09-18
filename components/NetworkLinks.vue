<template>
  <v-row dense>
    <v-col cols="12" class="title text-center">
      Find me on
    </v-col>
    <v-col cols="12">
      <v-row justify="center">
        <v-btn
          v-for="(link, index) in links"
          :key="index"
          class="mx-2"
          color="primary"
          width="88"
          :href="link.url"
          :aria-label="link.label"
          rel="noreferrer noopener"
          target="_blank"
        >
          <v-icon v-text="`$vuetify.icons.${link.icon}`" />
        </v-btn>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { createComponent, reactive } from '@vue/composition-api'

export default createComponent({
  setup () {
    const links: Array<{ icon: string, label: string, url: string }> = reactive([
      { icon: 'github', label: 'Github', url: 'https://github.com/kevinmarrec' },
      { icon: 'twitter', label: 'Twitter', url: 'https://twitter.com/K_Marrec' },
      { icon: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/kevinmarrec' }
    ])

    return {
      links
    }
  }
})
</script>
