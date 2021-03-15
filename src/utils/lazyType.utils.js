let timer = null

export default function lazyType(action, delay) {
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
  timer = setTimeout(function() {
    action()
  }, delay)
}
