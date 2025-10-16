// var uniqueInOrder=function(iterable){
  
//   return iterable.split('').filter((item, index) => item !== iterable[index - 1])
// }


var uniqueInOrder=function(iterable){
  let iterables = typeof iterable === 'string'? iterable.split(''):iterable
  return iterables.filter((item, index) => item !== iterable[index - 1])
}