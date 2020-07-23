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
      ripple.classList.add('ripple')
      ripple.style.top = (event.clientY - container.y) + 'px'
      ripple.style.left = (event.clientX - container.x) + 'px'

      el.insertBefore(ripple, el.firstChild)

      const transitionDuration = (+getComputedStyle(ripple).transitionDuration.slice(0, -1) * 1000)

      const size = Math.sqrt(
        (container.width + Math.abs(container.width / 2 - ripple.offsetLeft) * 2) ** 2 +
        (container.height + Math.abs(container.height / 2 - ripple.offsetTop) * 2) ** 2
      )

      setTimeout(() => { ripple.style.transform = `scale(${size})` })
      setTimeout(() => { finished = true }, transitionDuration)

      const stop = () => {
        setTimeout(() => {
          ripple.style.opacity = '0'

          setTimeout(() => {
            el.removeEventListener('mouseup', stop)
            el.removeEventListener('mouseleave', stop)
            ripple.parentNode && ripple.parentNode.removeChild(ripple)
          }, transitionDuration)
        }, finished ? 0 : 200)
      }

      el.addEventListener('mouseup', stop)
      el.addEventListener('mouseleave', stop)
    })
  }
}

export default rippleDirective
