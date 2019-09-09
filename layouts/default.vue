<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-flex text-center>
        <span class="headline font-weight-bold">
          Marrec.io
        </span>
      </v-flex>
    </v-app-bar>
    <v-content>
      <v-container fill-height>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app color="primary" dark>
      <v-spacer />
      <span>v{{ version }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import { VBtn } from 'vuetify/lib'
import { version } from '~/package.json'

export default createComponent({
  components: {
    VBtn
  },

  head () {
    return {
      title: 'Kevin Marrec',
      titleTemplate: '%s | Marrec.io'
    }
  },

  setup () {
    return {
      version
    }
  }
})
</script>
