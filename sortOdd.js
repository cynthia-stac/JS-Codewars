function sortArray(array) {
  let odd = array.filter(v => v % 2 !== 0).sort((a, b) => b - a)
  let even = array.filter(v => v % 2 === 0).reverse()
  return array.map(v => v % 2 != 0 ? odd.pop() : even.pop())
}