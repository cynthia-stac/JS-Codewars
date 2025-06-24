function isReallyNaN(val){
  if (typeof((val)) === 'undefined'){
    return false;
  }
  else{
    return isNaN(val);
  }
}
console.log (isReallyNaN(1));
