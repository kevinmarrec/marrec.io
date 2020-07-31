import { DirectiveOptions } from 'vue'
import './styles.pcss'

const rippleDirective: DirectiveOptions = {
  bind (el, binding) {
    if (binding.value === false) {
      return
    }

    el.style.position = 'relative'
    el.style.overflow = 'hidden'

    el.addEventListener('mousedown', (event: MouseEvent) => {
      let finished = false

      const container = el.getBoundingClientRect()

      const ripple = document.createElement('div')
      ripple.className = 'ripple'

      el.insertBefore(ripple, el.firstChild)

      const transitionDuration = (+getComputedStyle(ripple).transitionDuration.slice(0, -1) * 1000)

      const size = Math.sqrt(
        (container.width + Math.abs(container.width / 2 - (event.clientX - container.x)) * 2) ** 2 +
        (container.height + Math.abs(container.height / 2 - (event.clientY - container.y)) * 2) ** 2
      )

      ripple.style.top = (event.clientY - container.y - size / 2) + 'px'
      ripple.style.left = (event.clientX - container.x - size / 2) + 'px'
      ripple.style.width = size + 'px'
      ripple.style.height = size + 'px'


      setTimeout(() => { ripple.style.transform = 'scale(1)' })
      setTimeout(() => { finished = true }, transitionDuration)

      const stop = () => {
        setTimeout(() => {
          ripple.style.opacity = '0'

          setTimeout(() => {
            el.removeEventListener('mouseup', stop)
            el.removeEventListener('mouseleave', stop)
            ripple.remove()
          }, transitionDuration)
        }, finished ? 0 : transitionDuration / 2)
      }

      el.addEventListener('mouseup', stop)
      el.addEventListener('mouseleave', stop)
    })
  }
}

export default rippleDirective
