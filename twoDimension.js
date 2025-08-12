function trianglePerimeter(triangle) {
 
  function distance(p1, p2) {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

 
  const sideAB = distance(triangle.a, triangle.b);
  const sideBC = distance(triangle.b, triangle.c);
  const sideCA = distance(triangle.c, triangle.a);

 
  return sideAB + sideBC + sideCA;
}
