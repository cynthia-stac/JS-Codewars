function solution(num) {
  const romanObj = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  let result = ""
  const symbols = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]

  for (let symbol of symbols) {
    while (num >= romanObj[symbol]) {
      result += symbol
      num -= romanObj[symbol]
    }
  }

  return result
}
