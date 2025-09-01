function isValidWalk(walk){
    return (walk.length === 10 && walk.filter(el => el === 'n').length === walk.filter(el => el === 's').length && walk.filter(el => el === 'w').length === walk.filter(el => el === 'e').length)? true : false
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))