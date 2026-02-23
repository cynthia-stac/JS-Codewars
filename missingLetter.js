function findMissingLetter(array) {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const [...tempArr] = array[0] >= 'a' && array[0] <= 'z' ?
     lowerCase.slice(lowerCase.indexOf(array[0]), lowerCase.indexOf(array[array.length - 1] )+ 1) :
     upperCase.slice(upperCase.indexOf(array[0]), upperCase.indexOf(array[array.length - 1] )+ 1)
    return tempArr.filter(v => ! array.includes(v)).join('')
}


// Typescript

// export function findMissingLetter(array:string[]):string
// {
//       const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
//     const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//     const [...tempArr] = array[0] >= 'a' && array[0] <= 'z' ?
//      lowerCase.slice(lowerCase.indexOf(array[0]), lowerCase.indexOf(array[array.length - 1] )+ 1) :
//      upperCase.slice(upperCase.indexOf(array[0]), upperCase.indexOf(array[array.length - 1] )+ 1)
//     return tempArr.filter(v => ! array.includes(v)).join('')
// }