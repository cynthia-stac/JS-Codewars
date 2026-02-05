function pyramid(n) {
    let arr = []
    if(n === 0) return []
    for(let i = 1; i <= n; i++){
        arr.push([...'1'.repeat(i)])
    }
    return arr.map(v => v.map(s => Number(s)))
}

// Typescript

// export function pyramid(n: number) : Array<Array<Number>> {
//     let arr = []
//     if(n === 0) return []
//     for(let i = 1; i <= n; i++){
//         arr.push([...'1'.repeat(i)])
//     }
//     return arr.map(v => v.map(s => Number(s)))
// }