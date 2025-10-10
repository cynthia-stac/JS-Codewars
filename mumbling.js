function accum(s) {
	const letters = s.split('')

    return letters.map((v,idx) => v.toUpperCase() + v.toLowerCase().repeat(idx)).join('-');
}