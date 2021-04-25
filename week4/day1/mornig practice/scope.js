// let b = 3, d = b, u = b;
// const tree = ++d * d*b * b++ +
//  + --d+ + +b-- +
//  + +d*b+ +
//  u
//
// console.log(tree);
// 163
// 4 4 3 3 = 144
// 3 4 = 7
// 3 3 = 9
// 3


// JAVASCRIPT VARIABLES
// ------------------------------------------------
// var
// let (new in ECMAScript 6)
// const (new in ECMAScript 6)
// ------------------------------------------------
// Code blocks
// If a variable is declared inside a code block {...},
// it’s only visible inside that block.
// ------------------------------------------------
// {
//   let message = "Hello"; // only visible in this block
//   console.log(message);
// }
// console.log(message);
// ------------------------------------------------
// {
//   // show message
//   var message = "Hello";
//   console.log(message);
// }
// {
//   // show another message
//   let message = "Goodbye";
//   console.log(message);
// }
// ------------------------------------------------
// let message = "Hello";
// console.log(message);
// let message = "Goodbye";
// console.log(message);
// ------------------------------------------------
// if, for, while and so on,
// if (true) {
//   let phrase = "Hello!";
//   console.log(phrase);
// }
// console.log(phrase);
// ------------------------------------------------
// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }
// console.log(i);
// ------------------------------------------------
// function sayHi() {
//   phrase = "Hello";
//   console.log(phrase);
//   var phrase;
// }
// sayHi();
// ------------------------------------------------
// Nested functions
// function nested(){
//   let b = "outer variable";
//   return innerNested = function() {
//     console.log(b);
//     let a = "hello";
//   }
// }
// let c = nested();
// console.log(c());

// function sayHiBye(firstName, lastName) {
//   // helper nested function to use below
//   const getFullName = function() {
//     return firstName + " " + lastName;
//   }
//   // console.log( "Hello, " + getFullName() );
//   // console.log( "Bye, " + getFullName() );
//   return getFullName;
// }
// let a = sayHiBye('Eli','Israeli');
// console.log(a);
// console.log(a());
// ------------------------------------------------
// function makeCounter() {
//   let count = 0;
//   return function() {
//     return count++;
//   };
// }
// let counter = makeCounter()
// let counter2 = makeCounter();
// // console.log(counter);
// // console.log(counter2);
// console.log( counter() );
// console.log( counter() );
// console.log( counter() );
// console.log( counter2() );
// console.log( counter2() );
// ------------------------------------------------
// Clear memory
// function f() {
//   let value = 123;
//   return function() {
//     console.log(value);
//   }
// }
// console.log(g);
// console.log(g());
// ------------------------------------------------
// function f() {
//   let value = Math.random();
//   return function() {
//     console.log(value);
//   };
// }
// let arr = [f(), f(), f()];
// ------------------------------------------------
// function f() {
//   let value = 123;
//   return function() {
//     console.log(value);
//   }
// }
// let g = f(); // the value stays in memory
// g = null; // memory is cleaned up
// ------------------------------------------------
// Exercises
// -----------------------------------------------
// function makeCounter() {
//   let count = 0;
//   return function() {
//     return count;
//   };
// }
// let counter = makeCounter();
// let counter2 = makeCounter();
// console.log( counter() ); // 0
// console.log( counter() ); // 1
// console.log( counter2() ); // 0
// console.log( counter2() ); // 1
// ------------------------------------------------
// function Counter() {
//   let count = 0;
//   this.up = function() {
//     return ++count;
//   };
//   this.down = function() {
//     return --count;
//   };
// }
// let counter = new Counter();
// let counter1 = new Counter();
// console.log( counter.up() ); // 1
// console.log( counter.up() ); // 2
// console.log( counter.down() ); // 1
// console.log( counter1.up() );
// console.log( counter1.up() );
// console.log( counter1.down() );
// ------------------------------------------------
// let phrase = "Hello";
// if (true) {
//   let user = "John";
//   function sayHi() {
//     console.log(phrase,user);
//   }
// }
// sayHi();
// ------------------------------------------------
//
// let x = 1;
// function func() {
//   console.log(x); // ?
//   let x = 2;
// }
// func();


// // /* default parameters */
// function a(p = 10,a = 3){
//   return p + a
// }
// let b = a()
// console.log(b);


/* arrow function */
// function namefunc(x, y){
//   console.log(x+y);
// }
// namefunc(1,5)
//
// const namefunc = function(x) {
//   console.log(x);
// }
// namefunc(5);
//
// const namefunc = (x,y) => {
//   console.log(x+y);
// }
// namefunc(8,5);


// let x = 6;
// let y = 6;
// if(x>y){
//   console.log('greater');
// }
// else{
//   console.log('less');
// }

// let c = (x>y) ? 'greater' : 'less' ;
// console.log(c);
// //
// const b = (x= 10,y=6) => {
//   return (x>y) ? true : false;
// }
// console.log(b(5));

// let str = 'Hello';
// let message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
// console.log(str + " " + "\n"+
//   "John" + " " + message);
// console.log(`${str},
//   John ${message}`);

let arr = [1,2,3,4,5];
// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
console.log(arr);
arr.forEach( (item,i,arr1) => {
  arr1[i] = item+2;
});
console.log(arr);


// arr.forEach((item, ziv)=>{
//   if(item%2==0){
//     // return true;
//     console.log(item);
//   }
// })
// arr.some((item) => {
//   // console.log(item%2==0);
//   return(item%2==0);
// });
// arr.every((item)=> {
//   return (item==5);
// })

// console.time('timer');
// var ret = [];
// for(let i = 0; i < 100000; i++) {
//   // ret[i]=i;
//   ret.push(i);
// }
// console.timeEnd('timer');
// function reverseArr(input) {
//     var ret = [];
//     for(var i = input.length-1; i >= 0; i--) {
//         ret[ret.length] = input[i];
//     }
//     return ret;
// }
//
// var b = [3,5,7,8];
// console.log('b',b);
// b = reverseArr(b);
// console.log('reverse',b);

// let arr = ['a','b','c']
// console.log(arr.includes('b'));

// let arr = [1,2,[3,4,[6,7]],5];
// console.log(arr.flat(2));
// const fruits = ['apple', 'banana', 'mango', 'guava'];

// function checkAvailability(arr, val) {
//   return arr.some(item => {
//     return val === item
//   });
// }
// console.log(checkAvailability(fruits, 'kela'));   // false
// console.log(checkAvailability(fruits, 'banana')); // true

// let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// let ordinal = ["th","st","nd","rd"];
// color.forEach((item,i,arr) =>{
//   let str = (i<3) ? ordinal[i+1] : ordinal[0];
//   arr[i] = `${i+1}${str} choice is ${item}`;
// });
// console.log(color);


let color1 = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
color1.forEach((item,i) =>{
  console.log(`${i+1}# choise is ${item}`);
});


// function is_string(val){
//   return (typeof val === 'string') ? true : false;
// }
// console.log(is_string('hello'));
// console.log(is_string([1,2,4]));








// #############
