<template>
  <v-layout column>
    <v-layout column justify-center align-center>
      <v-avatar :size="avatarSize">
        <img src="/img/me.jpg" alt="avatar" class="elevation-10" style="border: 4px solid black;">
      </v-avatar>
      <h1 class="mt-4 display-1 primary--text font-weight-medium">
        Kevin Marrec
      </h1>
      <div class="mt-3 text-center">
        <p>wants to let you know that</p>
        <p class="primary--text font-weight-bold">
          His website is under construction !
        </p>
      </div>
    </v-layout>
    <NetworkLinks />
  </v-layout>
</template>

<script lang="ts">
import { createComponent, computed } from '@vue/composition-api'
import NetworkLinks from '~/components/NetworkLinks.vue'

export default createComponent({
  name: 'PageIndex',

  components: {
    NetworkLinks
  },

  setup (_props, { root: { $vuetify } }) {
    return {
      avatarSize: computed(() => $vuetify.breakpoint.mdAndUp ? '200' : '170')
    }
  }
})
</script>
