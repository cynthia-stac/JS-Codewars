function isPangram(string){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let chars = string.toLowerCase().split('').sort().filter(v => v>= 'a' && v <= 'z')
   return [... new Set(chars)].join('') === alphabet
}