const getSlideSizeJS = () => {
  document.addEventListener('mousedown', (e1) => {
    const startX = e1.clientX
    const startY = e1.clientY
    document.addEventListener('mouseup', (e2) => {
      const endX = e2 .clientX
      const endY = e2.clientY
      const lauchSpeed = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2))
    })
  })
}

const getSlideSizeTS = () => {
  document.addEventListener('mousedown', (e1) => {
    const startX: number = e1.clientX
    const startY: number = e1.clientY
    document.addEventListener('mouseup', (e2) => {
      const endX: number = e2 .clientX
      const endY: number = e2.clientY
      const lauchSpeed: number = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2))
    })
  })
}