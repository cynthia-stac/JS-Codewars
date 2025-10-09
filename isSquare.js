var isSquare = function(n){
  return (typeof(Math.sqrt(n)) === 'number')  && ((Math.sqrt(n) > 0)) && Number.isInteger(Math.sqrt(n))
}
