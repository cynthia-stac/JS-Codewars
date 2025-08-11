function equableTriangle(a, b, c) {
  const perimeter = a + b + c;
  const s = perimeter / 2; // semi-perimeter
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area === perimeter;
}
