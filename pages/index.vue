<template>
  <v-layout column>
    <v-layout column justify-center align-center>
      <v-avatar :size="avatarSize">
        <img src="/img/me.jpg" alt="avatar" class="elevation-10" style="border: 4px solid black;">
      </v-avatar>
      <h1 class="mt-4 display-1 teal--text font-weight-medium">
        Kevin Marrec
      </h1>
      <div class="mt-3 text-center">
        <p>wants to let you know that</p>
        <p class="teal--text font-weight-bold">
          His website is under construction !
        </p>
      </div>
    </v-layout>
    <NetworkLinks />
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import { computed } from 'vue-function-api'

export default Vue.extend({
  name: 'PageIndex',
  components: {
    NetworkLinks: () => import('~/components/NetworkLinks.vue')
  },
  setup (_props, { root: { $vuetify } }) {
    const avatarSize = computed(() => $vuetify.breakpoint.mdAndUp ? '200' : '170')

    return {
      avatarSize
    }
  }
})
</script>
