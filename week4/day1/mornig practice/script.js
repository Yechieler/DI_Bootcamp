// let b = 3, d = b, u = b;
// const tree = ++d * d*b * b++ +  // 4*9*3 + 1 = 109
//  + --d+ + +b-- +  //
//  + +d*b+ +  
//  u
//  console.log(tree);

//  console.log( 144+5+9);

// //  4 * 3 * 3*3 * 4 + 5 + 

// for (let index = 0; index < 3; index++) {
//     console.log(index);
    
// }
// console.log(index);

function makeWorker() {
    let name = "Pete";
    return function() {
      return name;
    };
  }
  let name = "John";
  let work = makeWorker();
  console.log(work()); 

//   function returns a function that returns name



array.forEach(element => {
    
});