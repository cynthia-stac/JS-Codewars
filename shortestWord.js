function findShort(s){
  if (s.length === 0) return 'Not long enough'
   
  let arr = s.split(' ')
  let shortest = arr[0]
  for(let c of arr){
      shortest = (c.length < shortest.length) ? c : shortest 
  }
  return shortest.length
}