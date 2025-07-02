function multiply(a, b) {
  if (a !== undefined && b !== undefined) {
    return a * b;
  } else if (Array.isArray(a)) {
    return a.map(num => num * 2);
  } else if (typeof a === "number") {
    return a * 2;
  } else {
    return null;
  }
}
console.log(multiply(3, 4));        
console.log(multiply(5));           
console.log(multiply([1, 2, 3]));    
console.log(multiply("hello"));      


