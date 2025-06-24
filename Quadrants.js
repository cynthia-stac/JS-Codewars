function quadrant(x, y) {
  if (x > 0 && y > 0) {
    return 1;
  } else if (x < 0 && y > 0) {
    return 2;
  } else if (x < 0 && y < 0) {
    return 3;
  } else if (x > 0 && y < 0) {
    return 4;
  } else if (x === 0 && y === 0) {
    return 'Origin';
  } else if (x === 0) {
    return 'On the Y-axis';
  } else if (y === 0) {
    return 'On the X-axis';
  }
}
 
console.log(quadrant(1, 2));
