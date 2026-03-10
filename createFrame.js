const frame = (text, char) => {

    let longText = Math.max(...text.map(t => t.length)) + 4
    let target = [char.repeat(longText)]
    text.forEach(word => {
        if(word.length < longText)
            target.push(char+' '+word+' '.repeat(longText-2 - word.length-1)+char)
        else
            target.push(char+' '+word+' '+char)
    })
    target.push(char.repeat(longText))

    
    return target.join('\n')
}