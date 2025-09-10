function removeChar(str){
 if (str.length >= 2){
   return str.split('').filter((el,index) => index !== 0 && index !== str.length - 1  ).join('')
 }

}