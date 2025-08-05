function womensAge(n) {
  let ageBase = Math.floor(n/2);
  let age = n%2? 21: 20;
  
  return `${n}? That's just ${age}, in base ${ageBase}!`;
}