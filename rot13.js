function rot13(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const shifted  = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
  
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let index = alphabet.indexOf(char);

    if (index !== -1) {
      result += shifted[index]; 
    } else {
      result += char;
    }
  }
  return result
}