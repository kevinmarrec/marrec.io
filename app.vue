<script setup>
const author = 'Kevin Marrec'
const title = `${author} | Marrec.io`
const description = `${author}, Full-stack Developer.`

useHead({
  title,
  meta: [
    { name: 'author', content: author },
    { name: 'description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://marrec.io' },
    { property: 'og:title', content: title },
    { property: 'og:site_name', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: 'https://marrec.io/img/me.jpg' },
    { property: 'og:image:type', content: 'image/jpeg' },
    { property: 'og:image:height', content: '256' },
    { property: 'og:image:width', content: '256' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', content: '@K_Marrec' },
    { name: 'twitter:creator', content: '@K_Marrec' }
  ],
  htmlAttrs: {
    lang: 'en'
  },
  bodyAttrs: {
    class: 'bg-cool-gray-900 text-white'
  }
})

const networkLinks = [
  { icon: 'i-mdi-github', label: 'GitHub', link: 'https://github.com/kevinmarrec' },
  { icon: 'i-mdi-twitter-circle', label: 'Twitter', link: 'https://twitter.com/K_Marrec' }
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
