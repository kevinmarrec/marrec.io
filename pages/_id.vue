<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup (_props, { root: { $route } }) {
    return {
      id: $route.params.id
    }
  }
})
</script>

<template>
  <main class="container h-screen mx-auto flex flex-col justify-center items-center">
    {{ id }}
  </main>
</template>
