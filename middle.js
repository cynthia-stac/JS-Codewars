function getMiddle(s) {
  let mid = Math.floor(s.length/2)
  if (s.length === 1)  return s
  return (s.length %  2 === 0) ? s.slice(mid-1, mid+1):s.slice(mid, mid+1)
  
}