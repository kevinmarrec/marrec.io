import Vue, { DirectiveOptions } from 'vue'

import ripple from './ripple'

const directives: Record<string, DirectiveOptions> = {
  ripple
}

for (const name in directives) {
  Vue.directive(name, directives[name])
}
