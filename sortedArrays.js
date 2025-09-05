function mergeArrays(a, b) {
  
  const firstSort = a.sort((x, y) => x - y)
  const secondSort = b.sort((x, y) => x - y)
  const merged = a.concat(b)
  const sorted = merged.sort((x, y) => x - y)
  
  return [...new Set(sorted)]
}