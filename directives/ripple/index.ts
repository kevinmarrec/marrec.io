import { DirectiveOptions } from 'vue'
import './styles.pcss'

const rippleDirective: DirectiveOptions = {
  bind (el) {
    el.addEventListener('mousedown', (event: MouseEvent) => {
      // const storedPosition = el.style.position

      el.style.position = 'relative'
      el.style.overflow = 'hidden'

      const container = el.getBoundingClientRect()
      const size = container[container.width > container.height ? 'width' : 'height']

      const ripple = document.createElement('div')
      ripple.classList.add('ripple')

      el.insertBefore(ripple, el.firstChild)

      setTimeout(() => {
        ripple.style.top = (event.pageY - container.y - size / 2) + 'px'
        ripple.style.left = (event.pageX - container.x - size / 2) + 'px'
        ripple.style.width = ripple.style.height = size + 'px'
        // el.style.position = storedPosition
      })

      el.addEventListener('mouseup', () => {
        ripple.parentNode && ripple.parentNode.removeChild(ripple)
      })
    })
  }
}

export default rippleDirective
