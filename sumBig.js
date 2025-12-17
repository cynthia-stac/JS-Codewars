
6 kyu
Tribonacci Sequence
JavaScript:
function tribonacci(signature,n){
 
  let result = signature.slice(0, n)
  
  for(let i = 3;i < n ;i++){
    result.push(result[i-1] + result[i-2] + result[i-3])
  }
  
  return result
}
8 minutes agoRefactorDiscuss
4 kyu
Adding Big Numbers
JavaScript:
function add(a, b) {
  let result = ''
  let carryingNum = 0
  let i = a.length - 1
  let j = b.length - 1

  while (i >= 0 || j >= 0 || carryingNum) {
    let sum = (i >= 0 ? a[i--] - 0 : 0) + (j >= 0 ? b[j--] - 0 : 0) + carryingNum

    result = (sum % 10) + result
    carryingNum = sum > 9 ? 1 : 0
  }

  return result
}