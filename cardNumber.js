function validate(n){
    let str = String(n).split('').map(v => Number(v))
    let double = str.length % 2 ? 
    str.map((v, idx) => idx % 2 ? v * 2 : v ) : 
    str.map((v, idx) => idx % 2 ? v : v * 2 )
    
    
    return double.map(v => v > 9 ? v - 9 : v)
    .reduce((sum, val) => sum + val, 0)
    % 10 === 0
}