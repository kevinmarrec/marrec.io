<script lang="ts">
  import { pwaInfo } from 'virtual:pwa-info'
  import { useRegisterSW } from 'virtual:pwa-register/svelte'
  import '@unocss/reset/tailwind.css'
  import 'uno.css'

  useRegisterSW({
    onRegisteredSW(_, registration) {
      registration &&
        setInterval(() => {
          registration.update()
        }, 1000 * 10)
    },
  })
</script>

<svelte:head>
  {#if pwaInfo}
    {@html pwaInfo.webManifest.linkTag}
  {/if}
</svelte:head>

<slot />
