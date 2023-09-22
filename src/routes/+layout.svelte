<script lang="ts">
  import { fly } from 'svelte/transition'

  import { pwaInfo } from 'virtual:pwa-info'
  import { useRegisterSW } from 'virtual:pwa-register/svelte'

  import '@unocss/reset/tailwind.css'
  import '@unocss/reset/tailwind.css'
  import 'uno.css'
  import 'uno.css'

  import { afterNavigate } from '$app/navigation'

  import type { LayoutData } from './$types'

  export let data: LayoutData

  const { updateServiceWorker } = useRegisterSW({
    onNeedRefresh() {
      updateServiceWorker()
    },
  })

  let reverse = false
  let lastIndex = 0

  afterNavigate(() => {
    lastIndex = history.state['sveltekit:index']
  })

  function myIn(el: Element) {
    document.body.style.overflow = 'hidden'
    return fly(el, { x: reverse ? '-100%' : '100%', duration: 1000 })
  }

  function myOut(el: Element) {
    return fly(el, { x: reverse ? '100%' : '-100%', duration: 1000 })
  }

  function onPopState(event: PopStateEvent) {
    reverse = event.state['sveltekit:index'] < lastIndex
  }
</script>

<svelte:head>
  {#if pwaInfo}
    <!-- eslint-disable-next-line -->
    {@html pwaInfo.webManifest.linkTag}
  {/if}
</svelte:head>

<svelte:window on:popstate={onPopState} />

<div class="h-full w-full relative">
  {#key data.url}
    <div
      class="h-full w-full absolute"
      data-url={data.url}
      in:myIn
      out:myOut
      on:introend={() => {
        reverse = false
      }}
    >
      <slot />
    </div>
  {/key}
</div>

<style>
  :global(html, body, #svelte-app) {
    height: 100%;
  }
</style>
