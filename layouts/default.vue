<template>
  <v-app>
    <v-toolbar app color="primary" dark>
      <v-flex class="text-xs-center">
        <span class='title font-weight-bold'>Kevin Marrec</span>
      </v-flex>
    </v-toolbar>
    <v-content>
      <v-container fill-height>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app color="primary" dark class="pa-3">
      <v-spacer></v-spacer>
      <div class="ml-2">v{{ version }}</div>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { version } from '~/package.json'

@Component
export default class LayoutDefault extends Vue {
  version = version
}
</script>
