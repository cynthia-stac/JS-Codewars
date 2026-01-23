function betterThanAverage(classPoints, yourPoints) {
  return classPoints
    .reduce((sum, point) => sum + point, 0)/classPoints.length < yourPoints
}