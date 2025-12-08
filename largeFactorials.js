function factorial(n) {
  if (n < 0) return null;
  if (n === 0 || n === 1) return "1";
  
  let result = [1];
  
  for (let i = 2; i <= n; i++) {
    let curryingNum = 0;
    
    for (let j = 0; j < result.length; j++) {
      let product = result[j] * i + curryingNum;
      result[j] = product % 10;
    curryingNum = Math.floor(product / 10);
    }
    
    while (curryingNum > 0) {
      result.push(curryingNum % 10);
      curryingNum = Math.floor(curryingNum / 10);
    }
  }
  
  return result.reverse().join('');
}