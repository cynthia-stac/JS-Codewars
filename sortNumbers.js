function solution(nums){
  if (!nums || nums.length === 0) return []
  return [...nums].sort((a, b) => a - b)
}


// Typescipt

// export function solution(nums: number[]): number[] {
//   if(!nums || nums.length === 0) return []
//   return [...nums].sort((a, b) => a - b)
// }