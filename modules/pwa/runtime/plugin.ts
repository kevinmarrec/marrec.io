export default defineNuxtPlugin(() => {
  useHead({
    meta: [
      { name: 'theme-color', content: '#3B82F6' }
    ],
    link: [
      { rel: 'icon', href: '/icon.png' },
      { rel: 'apple-touch-icon', href: '/icon.png' },
      { rel: 'manifest', href: '/manifest.json' }
    ]
  })

  if (process.client && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
    })
  }
})
