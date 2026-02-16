function tripledouble(num1, num2) {
  let s1 = num1.toString()
  let s2 = num2.toString()

  for (let i = 0; i <= 9; i++) {
    let triple =`${i}${i}${i}`
    let double = `${i}${i}`

    if (s1.includes(triple) && s2.includes(double)) {
      return 1
    }
  }
  return 0
}