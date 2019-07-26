<template>
  <v-flex text-center>
    <div class="mt-4 title">
      Find me on
    </div>
    <div class="mt-2">
      <v-layout justify-center>
        <v-btn
          v-for="(link, index) in links"
          :key="index"
          class="mx-2"
          color="primary"
          dark
          width="88"
          :href="link.url"
          :aria-label="link.label"
          rel="noreferrer noopener"
          target="_blank"
        >
          <v-icon v-text="`$vuetify.icons.${link.icon}`" />
        </v-btn>
      </v-layout>
    </div>
  </v-flex>
</template>

<script lang="ts">
import { state } from 'vue-function-api'

export default {
  name: 'NetworkLinks',
  setup () {
    const links: Array<{ icon: string, label: string, url: string }> = state([
      { icon: 'github', label: 'Github', url: 'https://github.com/kevinmarrec' },
      { icon: 'twitter', label: 'Twitter', url: 'https://twitter.com/K_Marrec' },
      { icon: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/kevinmarrec' }
    ])

    return {
      links
    }
  }
}

</script>
