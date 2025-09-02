// function createPhoneNumber(numbers){
//   return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6).join('')}`
// }

function createPhoneNumber(numbers){
  let helper = '(xxx) xxx-xxxx'
  
  for (let i=0; i < numbers.length; i++){
    helper = helper.replace('x', numbers[i])
  }
  
  for(number of numbers){
    helper = helper.replace('x', number)
  }
  
  
  return helper
}