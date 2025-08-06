function hasLoop(indices) {
  if (!Array.isArray(indices) || indices.length === 0) {
    return false;
  }

  const allElements = new Set();
  let current = 0;

  while (current < indices.length) {
    if (allElements.has(current)) {
      return true;
    }
    allElements.add(current);
    current = indices[current];
  }

  return false;
}