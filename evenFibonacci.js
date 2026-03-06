function fibonacci(max) {
    let arr = []
    for(let i = 0; i < max; i++) {
        if(i === 0) arr.push(0)
        else if(i === 1) arr.push(1)
        else arr.push(arr[i - 2] + arr[i - 1])

        if(arr[i] > max) break
    }

    return arr.filter(v => v < max).filter(v => v % 2 == 0).reduce((s,v) => s + v, 0)

}