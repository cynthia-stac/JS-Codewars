function multiples(m, n){
  const multiples = []
  if (m <= 0 || !Number.isInteger(m)) {
    return "Invlid input!"
  }
  for (let i = 1; i <= m; i++) {
    multiples.push(n * i)
  }
  return multiples;
}
