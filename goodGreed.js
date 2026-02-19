function score( dice ) {
 let counts = {}
 let total = 0
 
 for (let num of dice){
   counts[num] = counts[num] ? counts[num] + 1 : 1
 }
 for (let num in counts) {
    let count = counts[num]
    num = Number(num)

    if (count >= 3) {
      if (num === 1) {
        total += 1000
      } else {
        total += num * 100
      }
      count -= 3
    }

   
    if (num === 1) {
      total += count * 100;
    }

    if (num === 5) {
      total += count * 50;
    }
  }

  return total;
}