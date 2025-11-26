function toWeirdCase(string){
  return string.split(' ').length === 1 ? string.split('').map((v, i) => (i === 0 || i % 2 === 0) ? v.toUpperCase() : v.toLowerCase()).join('') :
  string.split(' ').map((w, i) => w.split('').map((v, i) => (i === 0 || i % 2 === 0) ? v.toUpperCase() : v.toLowerCase()).join('')).join(' ')
}