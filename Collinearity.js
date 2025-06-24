function collinearity( x1,y1, x2,y2 ) {
  if(x1===0 && y1 === 0) return true;
  if(x2===0 && y2 === 0) return true;
  return x1 * y2 === x2 * y1;
}

console.log(collinearity(1,2,2,4)); 
