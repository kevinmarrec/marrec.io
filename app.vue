<script setup>
useHead({
  bodyAttrs: {
    class: 'bg-cool-gray-900 text-white',
  },
})

const networkLinks = [
  { icon: 'i-mdi-github', label: 'GitHub', link: 'https://github.com/kevinmarrec' },
  { icon: 'i-mdi-twitter-circle', label: 'Twitter', link: 'https://twitter.com/K_Marrec' },
]
</script>

<template>
  <main class="container h-screen mx-auto flex flex-col justify-center items-center">
    <img role="img" src="/img/me.jpg" srcset="/img/me2x.jpg 2x" alt="avatar" class="w-64 h-64 rounded-full border-4 border-blue-400">
    <h1 class="text-3xl mt-5">
      <span class="text-blue-400">K</span>evin <span class="text-blue-400">M</span>arrec
    </h1>
    <h2 class="text-blue-400 text-xl mt-2">
      Passionate Developer
    </h2>
    <div class="flex mt-6">
      <a
        v-for="{ icon, label, link } in networkLinks"
        :key="icon"
        :href="link"
        :aria-label="label"
        rel="noreferred noopener"
        target="_blank"
        class="rounded-lg bg-blue-500 hover:bg-opacity-90 px-8 py-2 mx-2"
      >
        <div :class="`${icon} text-white text-2xl`" />
      </a>
    </div>
  </main>
</template>
