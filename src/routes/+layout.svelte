<script lang="ts">
  import { pwaInfo } from 'virtual:pwa-info'
  import { useRegisterSW } from 'virtual:pwa-register/svelte'

  import '@unocss/reset/tailwind.css'
  import 'uno.css'

  const { updateServiceWorker } = useRegisterSW({
    onNeedRefresh() {
      updateServiceWorker()
    },
  })
</script>

<svelte:head>
  {#if pwaInfo}
    <!-- eslint-disable-next-line -->
    {@html pwaInfo.webManifest.linkTag}
  {/if}
</svelte:head>

<slot />

<style>
  :global(html, body, #svelte-app) {
    height: 100%;
  }
</style>
