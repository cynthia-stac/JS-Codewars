function solve(a, b) {
  let divisor = 2;

  while (b > 1) {
    if (b % divisor === 0) {
      if (a % divisor !== 0) return false;

      
      while (b % divisor === 0) {
        b /= divisor;
      }
    }
    divisor++;
  }

  return true;
}