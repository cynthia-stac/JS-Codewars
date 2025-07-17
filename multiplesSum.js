function sumMul(n,m){
let sum = 0;
if ((typeof n === 'number' && n > 0) && (typeof m === 'number' && m>0)){ 
for (let i=n; i < m; i+=n){
  if (i%n === 0){
      sum +=  i;
  }
  else {
      sum += 0;
  }
}
return sum;
  }
  else{
    return "INVALID"
  }
}
