function swapHeadAndTail(arr) {
    if (arr.length === 1) return arr
 let mid = Math.floor(arr.length / 2)
 let head = arr.slice(0, mid)
 let tail = arr.slice(-mid)
 let half = arr[mid]
 
 return (arr.length % 2 === 0) ? [...tail, ...head] : [...tail, half, ...head]
}