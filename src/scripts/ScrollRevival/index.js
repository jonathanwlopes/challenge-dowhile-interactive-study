export const isScrollRevival = (elementsClass) => {
  let nodeArray = []

  for (let i = 0; i < elementsClass.length; i++) {
    const selectElement = document.querySelector(`.${elementsClass[i]}`)
    nodeArray.push(selectElement)
  }

  ScrollReveal().reveal(nodeArray, {
    delay: 300,
    reset: true,
  })
}
