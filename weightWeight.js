function orderWeight(str) {

  
  str = str.trim()

  
  if (str === "") {
    return ""
  }

  
  let numbers = str.split(" ")

 
  function getWeight(numStr) {
    let sum = 0

    for (let i = 0; i < numStr.length; i++) {
      sum += Number(numStr[i])
    }

    return sum
  }


  numbers.sort(function(a, b) {

    let weightA = getWeight(a)
    let weightB = getWeight(b)

    if (weightA > weightB) {
      return 1
    }

    if (weightA < weightB) {
      return -1
    }

    
    if (a > b) {
      return 1
    }

    if (a < b) {
      return -1
    }

    return 0
  })

  
  return numbers.join(" ")