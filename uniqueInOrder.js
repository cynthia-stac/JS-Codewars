var uniqueInOrder=function(iterable){
  
  return iterable.split('').filter((item, index) => item !== iterable[index - 1])
}