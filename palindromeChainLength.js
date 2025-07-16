var palindromeChainLength = function(n) {
    let count = 0;
    function isPalindrome(x) {
  return ( x.toString().toLowerCase() == x.toString().toLowerCase().split('').reverse().join(''))? true:false
  }
    while (!isPalindrome(n)) {
        n = n + Number(n.toString().split('').reverse().join(''), 10);
        count++;
    }
    
    return count;
}

