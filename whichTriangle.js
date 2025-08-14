var typeOfTriangle = function (sideA, sideB, sideC) {
  if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA) {
        return "Not a valid triangle";
    }
   else if (sideA === sideB && sideB === sideC) {
        return "Equilateral";
    }
 
    else if (sideA === sideB || sideA === sideC || sideB === sideC) {
        return "Isosceles";
    }
    
    else if(sideA !== sideB || sideB !== sideC || sideA !== sideC) {
        return "Scalene";
    }
    else {
      return "Invalid input"
    }
}