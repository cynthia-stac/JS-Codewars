String.prototype.isUpperCase = function (){
    if (this === null) return false
    return this.toString() === this.toString().toUpperCase()
}