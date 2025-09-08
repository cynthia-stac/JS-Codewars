// function noSpace(x){
//  return x.split('').filter(el => el !== " " ).join('')
// }

function noSpace(x){
 return x.replaceAll(" ","")
}