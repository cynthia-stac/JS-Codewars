// function hexStringToRGB(hexString) {
//   let hex = hexString.toUpperCase()
//   hex = hexString.replace('#','')
  
//   let r = parseInt(hex.slice(0,2) ,16)
//   let g = parseInt(hex.slice(2,4) ,16)
//   let b = parseInt(hex.slice(4,6) ,16)
  
//   return {r ,g ,b}
// }

//Refactoring

function hexStringToRGB(hexString) {

  return {r : parseInt(hexString.slice(1,3) ,16),
          g : parseInt(hexString.slice(3,5) ,16),
          b : parseInt(hexString.slice(5) ,16)
         }
}