function add(n) {
  function inner(x) {
    return add(n + x);
  }

  inner.valueOf = function() {
    return n;
  };

  inner.toString = function() {
    return n;
  };

  return inner;
}

// Typescript


// export default function add(n: number): any {
//   function inner(next: number): any {
//     return add(n + next);
//   }

//   inner.valueOf = function () {
//     return n;
//   };

 

//   return inner;
// }