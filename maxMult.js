function maxMultiple(divisor, bound){
  const mySet = new Set();
  for(let n=1; n <= bound;n++){
     if(n % divisor === 0 ){
    mySet.add(n);
  }
  }
  return Math.max(...mySet);
}
