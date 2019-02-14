<template>
  <v-app>
    <v-toolbar app color="primary" dark>
      <v-flex text-xs-center>
        <span class="title font-weight-bold">Marrec.io</span>
      </v-flex>
    </v-toolbar>
    <v-content>
      <v-container fill-height>
        <nuxt/>
      </v-container>
    </v-content>
    <v-footer app color="primary" dark class="pa-3">
      <v-spacer></v-spacer>
      <span>v{{ version }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { version } from '~/package.json'

@Component({
  head () {
    return {
      title: 'Kevin Marrec',
      titleTemplate: '%s | Marrec.io'
    }
  }
})
export default class LayoutDefault extends Vue {
  version = version
}
</script>
