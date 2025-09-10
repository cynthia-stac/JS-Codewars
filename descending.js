function descendingOrder(n){
 const num = n.toString().split('').sort((a, b) => b - a).join('')
 return Number(num)
}