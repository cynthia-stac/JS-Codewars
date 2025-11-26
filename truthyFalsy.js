function _if(bool, func1, func2) {
  if (bool == true){
    return func1()
  }
  return func2()
}