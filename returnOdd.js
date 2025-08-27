function findOdd(A) {
const count = { }

for (let num of A ){
count[num] = (count[num] || 0) +1
 }

// for (let num in count ){
// if(count[num] % 2 !==0){
//   return Number(num) ;
// }
// }

return count
}

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))