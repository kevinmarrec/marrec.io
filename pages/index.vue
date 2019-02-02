<template>
  <v-layout column>
    <v-layout column justify-center align-center>
      <v-avatar :size="avatarSize">
        <img src="/img/me.jpg" alt="avatar" class="elevation-10" :style="`border: 4px solid ${$vuetify.theme.secondary};`">
      </v-avatar>
      <h1 class="mt-4 display-1 primary--text font-weight-medium">Kevin Marrec</h1>
      <div class="mt-2">wants to let you know that</div>
      <code class="mt-2 primary--text">His website is under construction !</code>
    </v-layout>
    <NetworkLinks/>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    NetworkLinks: () => import('~/components/NetworkLinks.vue')
  }
})
export default class PageIndex extends Vue {
  get avatarSize () {
    return this.$vuetify.breakpoint.mdAndUp ? '200' : '170'
  }
}
</script>

<style lang="stylus" scoped>
.v-btn
  min-width 0
</style>
