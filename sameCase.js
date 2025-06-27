function sameCase(a, b) {
    
    if (typeof a !== 'string' || typeof b !== 'string' || 
        a.length !== 1 || b.length !== 1 || 
        !isLetter(a) || !isLetter(b)) {
        return -1;
    }
    
    if ((a === a.toLowerCase() && b === b.toLowerCase()) || 
        (a === a.toUpperCase() && b === b.toUpperCase())) {
        return 1;
    }
    
    return 0;
}
    function isLetter(char) {
    return char.toLowerCase() !== char.toUpperCase();
}
