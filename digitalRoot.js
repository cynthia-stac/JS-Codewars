// function digitalRoot(n) {
//  const result = n.toString().split('')
//  if (result.length === 1){
//    return n
//  }
//   else {
//     let sum = result.reduce((acc, val) => acc + Number(val), 0)
//     return digitalRoot(sum)
//   }
// }

function digitalRoot(n){
    const num = n.toString().split('')
    return (num.length === 1) ? n : digitalRoot(num.reduce((acc, k) => acc + Number(k), 0))
}

