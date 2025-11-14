String.prototype.camelCase=function(){
  return this.split(' ').filter(v => v.length > 0).map(v => v[0].toUpperCase() + v.slice(1).toLowerCase()).join('')
}