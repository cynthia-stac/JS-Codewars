function twiceAsOld(dadYearsOld, sonYearsOld) {
  return dadYearsOld>2*sonYearsOld? dadYearsOld-2*sonYearsOld : 2*sonYearsOld-dadYearsOld;
}
console.log(twiceAsOld(36, 7));