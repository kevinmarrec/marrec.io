<script setup>
const author = 'Kevin Marrec'
const title = `${author} | Marrec.io`
const description = `${author}, Full-stack Developer.`

useMeta({
  title,
  meta: [
    { name: 'author', content: author },
    { name: 'description', content: description },
    { name: 'og:type', content: 'website' },
    { name: 'og:title', content: title },
    { name: 'og:site_name', content: title },
    { name: 'og:description', content: description },
    { name: 'og:url', content: 'https://marrec.io' },
    { name: 'og:image', content: 'https://marrec.io/img/me.jpg' },
    { name: 'og:image:type', content: 'image/jpeg' },
    { name: 'og:image:height', content: '256' },
    { name: 'og:image:width', content: '256' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', content: '@K_Marrec' },
    { name: 'twitter:creator', content: '@K_Marrec' }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/icon.png' }
  ],
  htmlAttrs: {
    lang: 'en'
  },
  bodyAttrs: {
    class: 'bg-cool-gray-900 text-white'
  }
})

const networkLinks = [
  { icon: 'github', label: 'GitHub', link: 'https://github.com/kevinmarrec' },
  { icon: 'twitter', label: 'Twitter', link: 'https://twitter.com/K_Marrec' },
  { icon: 'linkedin', label: 'LinkedIn', link: 'https://www.linkedin.com/in/kevinmarrec' }
]
</script>

<template>
  <main class="container h-screen mx-auto flex flex-col justify-center items-center">
    <img src="/img/me.jpg" alt="avatar" class="w-64 h-64 rounded-full border-4 border-blue-400">
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
        <SvgIcon :name="icon" />
      </a>
    </div>
  </main>
</template>
