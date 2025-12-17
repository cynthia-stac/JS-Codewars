function add(a, b) {
  let result = ''
  let carryingNum = 0
  let i = a.length - 1
  let j = b.length - 1

  while (i >= 0 || j >= 0 || carryingNum) {
    let sum = (i >= 0 ? a[i--] - 0 : 0) + (j >= 0 ? b[j--] - 0 : 0) + carryingNum

    result = (sum % 10) + result
    carryingNum = sum > 9 ? 1 : 0
  }

  return result
}