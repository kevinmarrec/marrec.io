<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup () {
    return {
      networkLinks: [
        { icon: 'github', label: 'GitHub', link: 'https://github.com/kevinmarrec' },
        { icon: 'twitter', label: 'Twitter', link: 'https://twitter.com/K_Marrec' },
        { icon: 'linkedin', label: 'LinkedIn', link: 'https://www.linkedin.com/in/kevinmarrec' }
      ]
    }
  }
})
</script>

<template>
  <main class="container h-screen mx-auto flex flex-col justify-center items-center">
    <!-- <img src="/img/me.jpg" alt="avatar" class="w-64 h-64 rounded-full border-4 border-green-600"> -->
    <!-- <h1 class="font-400 text-3xl mt-4">
      <span class="text-green-600">K</span>evin <span class="text-green-600">M</span>arrec
    </h1>
    <h2 class="text-green-600 text-xl">
      [Test] Passionate Developer [Test]
    </h2> -->
    <div class="flex text-white mt-6">
      <a
        v-for="{ icon, label, link } in networkLinks"
        :key="icon"
        v-ripple
        :aria-label="label"
        rel="noreferred noopener"
        target="_blank"
        class="rounded-lg bg-green-600 text-lg font-semibold hover:bg-green-500 px-8 py-2 mx-2"
      >
        <Icon :name="icon" />
      </a>
    </div>
  </main>
</template>
