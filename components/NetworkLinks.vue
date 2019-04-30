<template>
  <v-flex text-xs-center>
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
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class NetworkLinks extends Vue {
  links = [
    { icon: 'github', label: 'Github', url: 'https://github.com/kevinmarrec' },
    { icon: 'twitter', label: 'Twitter', url: 'https://twitter.com/K_Marrec' },
    { icon: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/kevinmarrec' }
  ]
}
</script>

<style lang="scss" scoped>
  .v-btn {
    width: 88px;
  }
</style>
