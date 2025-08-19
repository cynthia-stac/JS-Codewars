function evenOrOdd(number) {
  if (typeof number === 'number'){
    return (number % 2 === 0)?  "Even":"Odd"
  }
}