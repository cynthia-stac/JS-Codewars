function squareDigits(num){
 const number = num.toString().split('')
 const nber = number.map((n) => {return n * n}).join('')
 return Number(nber)
}