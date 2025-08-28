// Solution 1

// function solution(number){
//    let result = 0
//   if (number < 0) return 0
//   for (let i = 0 ; i < number ; i++){
//     if(i % 3 === 0 || i % 5 === 0){
//       result += i
//     }
//   }
//   return result
// }

// Solution 2

function solution(number){
return (number < 0)? 0 : [...Array(number).keys()].filter(n => n%3 === 0 || n%5 === 0).reduce((n, el) => n + el , 0)
}