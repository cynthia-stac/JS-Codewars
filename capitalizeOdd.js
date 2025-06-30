
function capitalizeOdd(word) {
    return word.split('').map((char, index) => {
        return index % 2 !== 0 ? char.toUpperCase() : char;
    }).join('');
}

console.log(capitalizeOdd("JavaScript")); 
console.log(capitalizeOdd("The quick BROWN fox")); 
console.log(capitalizeOdd("cynthia"));