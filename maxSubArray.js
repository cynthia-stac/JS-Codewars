var maxSequence = function(arr) {
  let maxSum = 0
  let currentSum = 0

  for (let num of arr) {
    currentSum += num

    if (currentSum < 0) {
      currentSum = 0
    }

    if (currentSum > maxSum) {
      maxSum = currentSum
    }
  }

  return maxSum
}