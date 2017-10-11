// Mock window.requestAnimationFrame
global.requestAnimationFrame = callback => {
  return setTimeout(callback, 0)
}
