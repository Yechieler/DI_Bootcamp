//functions

/* declaration */
// function showMessage() {
//   /* do something */
// }
//
// function sum(a, b) {
//   return a + b;
// }
//
// const sum = function(a+b){
//   return a + b;
// }
//
// const sum = (a,b) =>{
//
// }

// sayHi("John");
// function sayHi(name) {
//   console.log(`Hello, ${name}` );
// }

/* Function Expression */
// const sum = function(a, b) {
//   return a + b;
// };
// console.log(sum);

// sayHi("John");
// const sayHi = function(name) {
//   console.log( `Hello, ${name}` );
// };
// sayHi("John");


/* Local variables */
// function showMessage(a,arr) {
//   let message = "Hello, I'm JavaScript!"; // local variable
//   console.log(message);
// }
// showMessage();
// console.log(message);
//
/* Outer variables */
// let message = 'John';
// function showMessage() {
//   let message = 'Hello, ' + userName;
//   console.log(message);
// }
// showMessage(); // Hello, John

//
/* modify Outer variables */
// let userName = 'John';
// function showMessage() {
//   userName = "Bob"; // (1) changed the outer variable
//   let message = 'Hello, ' + userName;
//   return message;
// }
// console.log(userName);
// showMessage();
// console.log(userName);
//
// /**********************************************************
// Global variables
// Variables declared outside of any function,
// such as the outer userName in the code above, are called global.
//
// Global variables are visible from any function
// (unless shadowed by locals).
//
// It’s a good practice to minimize the use of global variables.
// Modern code has few or no globals.
// Most variables reside in their functions.
// Sometimes though, they can be useful to store project-level data.
// *************************************************************/
//
/* Parameters */
// function showMessage(from, text) { // arguments: from, text
//   console.log(from + ': ' + text);
// }
// showMessage('Ann', 'Hello!');
// showMessage('Ann', "What's up?");
//
// /* Default values */

// function a(x,y = 7){
//   console.log(x,y);
// }
// a(9,9)

// function getUsers() {
//   let arr = ['zivuch','eli','igor','galina'];
//   return arr;
// }
// function showMessage(from, users = getUsers()) {
//   users.forEach( (item,i) => {
//     if(i==1) console.log(`${from} ${item}`);
//   })
// }
// // showMessage("Hello");
// showMessage("Bye", 'zivuch');
//
// function showMessage(from, text = anotherFunction()) {
//   // anotherFunction() only executed if no text given
//   // its result becomes the value of text
// }
//
//
/* Alternative default parameters */
// function showMessage(text) {
//   if (text === undefined) {
//     text = 'empty message';
//   }
//   console.log(text);
// }
// showMessage();

// if text parameter is omitted or "" is passed, set it to 'empty'
// function showMessage(text) {
//   return text || 'empty';
// }
// console.log(showMessage('gggggggg'))

// if there's no "count" parameter, show "unknown"
// function showCount(count) {
//   console.log(count ?? "unknown");
// }
// showCount(0);
// showCount();
// showCount('');

/* Returning a value */
// function sum(a, b) {
//   return a + b;
// }
// let result = sum(1, 2);
// console.log(result);

// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }
// let age = 16;
// if ( checkAge(age) ) {
//   console.log('Access granted');
// } else {
//   console.log('Access denied');
// }


/******************************************************
Naming a function
Functions are actions. So their name is usually a verb.
It should be brief, as accurate as possible and describe
what the function does, so that someone reading the code
gets an indication of what the function does.

It is a widespread practice to start a function with a verbal
prefix which vaguely describes the action.
There must be an agreement within the team on the meaning
of the prefixes.

For instance, functions that start with "show"
usually show something.

Function starting with…
"get…" – return a value,
"calc…" – calculate something,
"create…" – create something,
"check…" – check something and return a boolean, etc.

Examples of such names:
showMessage(..)     // shows a message
getAge(..)          // returns the age (gets it somehow)
calcSum(..)         // calculates a sum and returns the result
createForm(..)      // creates a form (and usually returns it)
checkPermission(..) // checks a permission, returns true/false


One function – one action
A function should do exactly what is suggested by its name, no more.
Two independent actions usually deserve two functions,
even if they are usually called together
(in that case we can make a 3rd function that calls those two).
******************************************************/

/* Nested Functions */
// function x(){
//   var sayhelloo = "Hello";
//   function y() {
//     console.log(sayhelloo);
//   }
//   return y;
// }
// let say = x();
// console.log(say());
// closurs
// parent do not have access to children
// but children have access to parent

/* currying */
// const x = (a ,b) =>  a * b;
// console.log( x(5,6) );
//
// const y = (a) => {
//     return (b) => {
//       return a * b;
//     }
// }

// const y = (a) => (b) => a * b;
// //
// const VAT = 1.17;
// let m = y(VAT);
// console.log(m);
// // console.log(m(200));

//
// const z = y(2);
// console.log(z);
// console.log( z(50) );

/* compose */
// const x = (a, b) => {
//   return (c) => {
//     return a(b(c));
//   }
// }
// const x = (a, b) => (c) => a(b(c))
//
// const sum2 = (num) => num * 2;
// const sum = (num) => num + 1;
// console.log( x(sum, sum2)(6) );

/* Object */
// let user = new Object(); // "object constructor" syntax
// let user = {};  // "object literal" syntax

// let myCar = new Object(); // {}
// myCar.name = 'Ford';
// myCar.model = 'Mustang';
// myCar.year = 1969;

// const car = {
//    name: "Fiat",
//    model: "500",
//    color: "white"
// }
// const name = car.name;
// const model = car.model;
// const color = car.color;
// console.log(name);

/* Destructuring */
// let { model,name,color } = car;
// console.log(name,color,model);

// function x(a){
//   const {model,name,color} = a;
//   return `${model} ${name} ${color}`
// }
// console.log(x(car));

/* Object properties */
// const obj = {
//     name: "Fiat",
//     model: "500",
//     color: "white"
//  }
// console.log(obj);

// const a  = "names";
// const b = "model";
// const obj = {
//   [a] : "Fiat",
//   [b]: "500",
//   // color: "white"
// }
// // console.log(obj);
// console.log(obj[a]);


// obj[a] = 'volvo';
// console.log(obj);

// const name = ["Fiat",'ALFA','MAZDA'];
// const model = "500";
// // //
// const obj2 = {
//    name,
//    model,
// }
// console.log(obj2);
// //
// const obj4 = {
//   name,
//   model
// }
// console.log('name=',obj4.name);


// reference type
// by referens vs by value
// let a = 5;
// let b;
// b = a;
// b++;
// console.log(a);
// console.log(b);
//
// let arr1 = [1,3,4];
// let arr2 = arr1
// // console.log('arr1',arr1);
// // console.log('arr2',arr2);
// arr2[1] = 5;
// console.log("arr1",arr1);
// console.log("arr2",arr2);

// let obj1 = { value: 10 }
// let obj2 = obj1;
// let obj3 = { value: 10 }
// obj2.value = 15;
// console.log('obj1',obj1.value); // 10
// console.log('obj2',obj2.value); // 15
// console.log('obj3',obj3.value); // 10
// // //
// const arr3 = [1,3,4];
// let arr4 = [].concat(arr3);
// let arr4 = [...arr3];
// // let arr4 = arr3;
// // arr4[2] = 6;
// console.log('arr3',arr3);
// console.log('arr4',arr4);

// let obj5 = { value: 10 }
// // let obj4 = Object.assign({},obj5)
// let obj4 = {...obj5}
// // // // console.log('obj4', obj4);
// obj4.value = 20;
// console.log('obj5',obj5);
// console.log('obj4',obj4);
// //
// let obj6 = {
//   value: 10,
//   name:'ziv',
//   age: 16,
//   email: 'zivuch@gamil.com'
// }
// let objNew = Object.assign({},obj6)
// let objNew = {...obj6};
// objNew.value = 9;
// console.log('obj6', obj6);
// console.log('objNew', objNew);

// let obj1 = {
//    a: 'java',
//    b: {
//      type: 'script'
//    }
// }
// console.log(obj1.a + obj1.b.type);
// let obj2 = {...obj1}
// console.log(obj1);
// console.log(obj2);
// obj1.a = "c++";
// console.log(obj1); // java
// console.log(obj2); // c++
// obj2.b.type = 'css';
// console.log('obj1', obj1);
// console.log('obj2', obj2);

// deep cloning
let obj1 = {
   name: 'Jhon',
   lastname: {
     b:'Dho'
   },
}
console.log(obj1);
const objJson = JSON.stringify(obj1)
console.log(objJson);

let obj2 = JSON.parse(objJson);
console.log(obj2);
obj1.lastname.b='bla bla';
console.log('obj1',obj1);
console.log('obj2',obj2);
// // console.log(JSON.stringify(obj1));
// // console.log('newInObj', obj2);
// obj2.lastname.b = 'html';
// console.log('obj1', obj1.lastname.b);
// console.log('obj2', obj2.lastname.b);
