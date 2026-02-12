function rot13(str) {
  const normal = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const rotated = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"

  let result = ""

  for (let char of str) {
    if (normal.includes(char)) {
      let index = normal.indexOf(char)
      result += rotated[index]
    } else {
      result += char
    }
  }

  return result
}