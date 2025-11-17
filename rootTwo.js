const isSquare = function(arr){
  if (arr.length === 0)
      return undefined
    return arr.flat(Infinity).filter(v => Number.isInteger(Math.sqrt(v))).length  === arr.flat(Infinity).length
}