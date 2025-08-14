var typeOfTriangle = function (sideA, sideB, sideC) {
  if (typeof sideA !== 'number' || typeof sideB !== 'number' || typeof sideC !== 'number'){
    return "Not a valid triangle"
  }
  else {
     if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA) {
        return "Not a valid triangle";
    }
   else if (sideA === sideB && sideB === sideC) {
        return "Equilateral";
    }
 
    else if (sideA === sideB || sideA === sideC || sideB === sideC) {
        return "Isosceles";
    }
    
    else {
        return "Scalene";
    }
  }
 }