function decodeMorse(morseCode) {
  morseCode = morseCode.trim();
  let words = morseCode.split("   ");

  let decoded = words.map(word => {
    let letters = word.split(" ");
    return letters.map(code => MORSE_CODE[code]).join("");
  });

  return decoded.join(" ");
}