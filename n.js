function exR1(n){
    if (n<= 0) return ""
    return exR1(n - 3) + n + exR1(n - 2) + n
}
