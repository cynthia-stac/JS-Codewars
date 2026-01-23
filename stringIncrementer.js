function incrementString (strng) {
    let arr = strng.split('')
    if (isNaN(arr[strng.length - 1])) return `${strng}1`
    let n
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i]) && arr.slice(i).every(v => !isNaN(v))) {
            n = i
            break
        }
    }
    let originalNum = strng.slice(n)
    let numberSec = String(Number(originalNum) + 1)
    numberSec = numberSec.padStart(originalNum.length, '0')
    return `${strng.slice(0, n)}${numberSec}`
}