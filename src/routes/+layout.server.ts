import type { LayoutServerLoad } from './$types'

export const prerender = 'auto'

export const load: LayoutServerLoad = async ({ url }) => {
  return {
    url: url.pathname,
  }
}
