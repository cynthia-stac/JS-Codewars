function sumPairs(ints, s) {
  let seen = new Set();

  for (let i = 0; i < ints.length; i++) {
    let current = ints[i];
    let needed = s - current;

    if (seen.has(needed)) {
      return [needed, current];
    }

    seen.add(current);
  }

  return undefined;
}


Typescript

