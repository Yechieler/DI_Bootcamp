// Exercise 1 : Function With Two Parameters
// Instructions
// Create a one line function that receives two numbers as parameters and returns the sum.

// const func = (num1, num2) => 
/*******************************
 * 
 */

// Exercise 2 : Closure
// Instructions
// Analyse the code below, and before executing it, predict the outcome of the last line.

// const addTo = x => y => x + y;
// var addToTen = addTo(10);
// console.log( addToTen(3));  // i thought 60 
                            // logs 13.
//addTo holds 10. 

// Exercise 3 : Currying
// Instructions
// Analyse the code below, and before executing it, predict the outcome of the last line.
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// curriedSum(30)(1)

// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// console.log( curriedSum(30)(1));  
 //i thought 31 but washt sure

 //logs 31

//  Exercise 4 : Currying
// Analyse the code below, and before executing it, predict the outcome of the last line.
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)
// add5(12)

// const sum = (a, b) => a + b  //testing limits
// const curriedSum = (a) => (b) => a+b

// const add5 = curriedSum(5)
// const add3 = curriedSum(3)  //testing limits

// console.log(curriedSum());
// console.log(add5(12));     
// console.log(add3(17));  //testing limits

// will be 17
// answer 17 
/**************************************** */
// Exercise 5 : Composing
// Analyse the code below, and before executing it, predict the outcome of the last line.
// const compose = (f, g) => (a) => f(g(a));
// const add1 = (num) => num + 1;
// const add5 = (num) => num + 5;
// compose(add1, add5)(10)

// const compose = (f, g) => (a) => {
//     // f(g(a));
// console.log(f,g,a);
// }
// const add1 = (num) => num + 1;
//                                         // num = 15, 15 + 1 
// const add5 = (num) => num + 5;         //num = 10, 10 +5
// console.log(compose(add1, add5)(10));   //(a)=10

// add1(add5(10))
// 6 10 
// answer 16


const compose = (f, g) => (a) => f(g(a));
    
const add1 = (num) => num + 1;
                                        
const add5 = (num) => num + 5;         
console.log(compose(add1, add5)(10));
