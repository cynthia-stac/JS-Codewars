function makeNegative(num) {
  if (typeof num === 'number'){
    if (num === 0){
    return 0
  }
  else if(num < 0){
    return num
  }
  else {
    return -num
  }
  }
  else{
    return "Not a number"
  }
  
}