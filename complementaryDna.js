function dnaStrand(dna){
let result = ''
for(let d of dna){
  if(d === 'A') result += 'T'
  else if (d === 'T') result += 'A'
  else if (d === 'C') result += 'G'
  else if (d === 'G') result += 'C'
 }
  return result
}


// Typescript

// export class Kata {
//   static dnaStrand(dna: string) {
//     let result = ''
//     for(let d of dna){
//         if(d === 'A') result += 'T'
//         else if (d === 'T') result += 'A'
//         else if (d === 'C') result += 'G'
//         else if (d === 'G') result += 'C'
//        }
//     return result
//   }
// }