function cleanString(s) {
 let result = []
 
 for(let char of s){
   (char === '#') ? result.pop() : result.push(char)
 }
  return result.join('')
}

// Typescript

// export function cleanString(s: string): string {
//  let result = []
 
//  for(let char of s){
//    (char === '#') ? result.pop() : result.push(char)
//  }
//   return result.join('')
// }