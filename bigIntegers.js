function lastDigit(n, m) {
  if (n === 0n && m === 0n) return 1;
  if (m === 0n) return 1n;

  let last = n % 10n; 

  
  let pattern = [];
  for (let i = 1n; i <= 4n; i++) {
    pattern.push((last ** i) % 10n);
  }

 
  let position = m % 4n;
  if (position === 0n) position = 4n;

  return pattern[position - 1n];
}