function findOdd(A) {
const count = { }

for (let num of A ){
count[num] = (count[num] || 0) +1
 }

for (let num in count ){
if(count[num] % 2 !==0){
  return Number(num) ;
}
}
}