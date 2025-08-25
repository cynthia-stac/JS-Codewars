function narcissistic(value) {
 const nums = value.toString().split('')
 const power = nums.length
 const sum = nums.reduce((accumulator, num) => {
    return accumulator + Math.pow(Number(num), power);
  }, 0);
  
  return sum === value
}