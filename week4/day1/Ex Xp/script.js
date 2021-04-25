// What is the value of "a in all the following functions.
// #1
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a);       //3
// }


// //#2
// var a = 0;
// function q2() {
//     a = 5; 
// }                     //undefined  

//  function q22() {
//    alert(a);
//  }                       //undefined


// // //#3
// function q3() {
//     window.a = "hello";
// }                         //undefined         
// console.log(q3())


// function q32() {
//     alert(a);
// }                         //undefined   

// //#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a);
// }                             // alert test

//#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// }
// alert(a);       // a = 5 inside and alerts twice.



// Exercise 2 : Ternary Operator
// Instructions
// Change the conditional into a ternary and assign the function to a variable called experiencePoints.

// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }


// let winBattle =true;
// const experiencePoints = function experiencePoints() {

//     return (winBattle ? 10 : 1);
// }

// console.log(experiencePoints());


// Exercise 3 : Colors
// Instructions
// Using this array :

// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Hint : Use the array methods taught in class.

// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// for (let i = 0; i < colors.length; i++) {
//     let element = `${i + 1}# choice is ${colors[i]}`;
//     console.log(element);
// }

// Exercise 4 : Colors #2
// Instructions
// Using these arrays :

// let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let ordinal = ["th","st","nd","rd"];
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class.

// let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let ordinal = ["st","nd","rd","th"];


//     color.forEach((colors, i) => {
//         if (i<=3) {
//             console.log(`${[i +1]}${ordinal[i]} choice is ${color[i]}`)
//         } 
//         else{
//             console.log(`${[i +1]}${ordinal[3]} choice is, ${color[i]}`);
//         }
//     });

// Exercise 5 : Is It A String ?
// Instructions
// Write a JavaScript function that checks whether the value of an input is a string or not.
// console.log(isString('hello')); 
// //true
// console.log(isString([1, 2, 4, 0]));
// //false

    
// function isString(param) {
//         if (typeof(param) === 'string'){
//             console.log('is a string');
//         } else {
//             console.log("isn't a string");
//         }

//     };
//     isString("string");
//     isString(2);
    
// ex 5 arrow function

    // const isString = param =>{ typeof(param) === 'string' ?  console.log('is a string') : console.log('is a string')}
    // isString(88);


    // Exercise 6 : Bank Details
    // Instructions
    // In this exercise, you have to decide which type of variables you have to use:
    
    // Create a global variable called bankAmount which value is the amount of money currently in your account.
    // Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
    // Create an array with all your monthly expenses - both positive and negative (money made and money spent).
    // Example : let details = ["+200", "-100", "+146", "+167", "-2900"]
    // Create a program that modifies the expenses so that they will include taxes (multiply each expense by the VAT).
    // Display your current bankAccount standing at the end of the month.


    let bankAmount = 3000;
    let vat = 1.17;
    let details = ["+200", "-100", "+146", "+167", "-2900"]
for (let i = 0; i < details.length; i++) {
    bankAmount = bankAmount + details[i] * vat;
    console.log(bankAmount);
}  
    




