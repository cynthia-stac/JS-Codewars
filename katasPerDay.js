var clonewars = function(kataPerDay) {
  let totalClones = 0;
  let totalKataSolved = 0;

  function simulateClone(kataAbility) {
    if (kataAbility <= 0) return;

    totalClones++;
    for (let k = kataAbility; k > 0; k--) {
      totalKataSolved += k;
      simulateClone(k - 1); 
    }
  }

  simulateClone(kataPerDay);
  return [totalClones, totalKataSolved];


  return [0,0]
}