function towerBuilder(nFloors) {
  let tower = []
  
  for(let i = 1; i <= nFloors; i++){
    let spaces = nFloors - i
    let stars = 2 * i - 1
    
    let row = ' '.repeat(spaces) + '*'.repeat(stars) + ' '.repeat(spaces)
    
    tower.push(row)
  }
  
  
  return tower
}


Typescript
