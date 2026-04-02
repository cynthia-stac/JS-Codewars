function pickPeaks(arr) {
  let result = {
    pos: [],
    peaks: []
  };

  let possiblePeak = null;

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1]) {
      possiblePeak = i;
    }
    if (arr[i] > arr[i + 1] && possiblePeak !== null) {
      result.pos.push(possiblePeak);
      result.peaks.push(arr[possiblePeak]);
      possiblePeak = null;
    }
  }

  return result;
}