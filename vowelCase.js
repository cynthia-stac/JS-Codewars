function encode(string) {
  const vowels = {
    a : 1,
    e : 2,
    i : 3,
    o : 4,
    u : 5
  }
  return string.split('').map(v => v in vowels ? vowels[v] : v).join('')
}

function decode(string) {
    let numbers = {
        1 : 'a',
        2 : 'e',
        3 : 'i',
        4 : 'o',
        5 : 'u'
    }
  return string.split('').map(v => v in numbers ? numbers[v] : v).join('')
}