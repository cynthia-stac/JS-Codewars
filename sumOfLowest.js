function sumTwoSmallestNumbers(numbers) {  
const sorted = numbers.sort((a,b) => a-b)
let sliced = sorted.slice(0, 2)
let sum = 0
for(let i=0; i<sliced.length; i++){
    sum = sum + sliced[i]
}
return sum
}