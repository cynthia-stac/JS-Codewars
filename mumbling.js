function accum(s) {
	const letters = s.split('')

    return letters.map(v => v.toUpperCase() + v.toLowerCase().repeat(letters.indexOf(v) + 1)).join('-');
}