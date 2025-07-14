function pyramid(balls) {
  var level = 0;
  while (balls >= level+1){
    level++;
    balls = balls - level;
  }
  return level;
}
// Output: 3