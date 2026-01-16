function dirReduc(arr){
  const directions = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    EAST: "WEST",
    WEST: "EAST"
  }

  let result = []

  for (let dir of arr) {
    let last = result[result.length - 1]

    if (last === directions[dir]) {
      result.pop()
    } else {
      result.push(dir)
    }
  }

  return result
}
