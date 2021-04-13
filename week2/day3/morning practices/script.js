//Exercise 1

// Create a structured HTML file linked to a JS file

// 1. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

// Sample Output: //"0 is even" //"1 is odd" //"2 is even"

 
// for (let i = 0;i<=15;i++){
//     if (i % 2 == 0) {
//         console.log(i + " is an even number")
//     } else {
//         console.log(i + " is an odd number")
//     }
// }

// example 

// for (let counter = 0; counter <= 15; counter ++){
//     if (counter % 2 == 0){
//         // checking if the number is divisible by 2
//         console.log(counter + " is an even number")
//     }
//     else {
//         console.log(counter + " is an odd number")
//     }
// }


// /*************************************
//  * debugging.. a way to check the code bit by bit
//  ****************************************** */

// /*********************************************** */

// //for/in loop

// let color = ["a","b","c","d","e","f"]
// for (i=0;i<=10;i++){
// i = color[i] + "!!!"
// }
// console.log(color);



// //Simple for loop
// let colors = [];
// ​
// for (let counter = 1; counter <= 4; counter++){
// 	colors.push("yellow")
// }
// ​
// console.log(`the array colors is ${colors}`)
// ​
// //other example
// let userAge = prompt("How old are you");
// let cars = []
// ​
// for (let counter=1; counter <= 10; counter++){
// 	if (userAge == 18){
// 		cars.push("Mazda")
// 	} else {
// 		console.log("You are not old enough")
// 	}
// }
// ​
// console.log(cars)
// ​
// ​
// // loop and array
// ​
// ​
// // go through the array
// // console.log() each element of the array
// ​
// let colors=["blue","yellow","red", "pink", "green"]
// ​
// for (let i = 0; i < colors.length ; i++) {
// 	console.log(colors[i])
// }
// ​
// // 1st loop : console.log(colors[0]) --> "blue"
// // 2nd loop : console.log(colors[1]) --> "yellow"
// // 3rd loop : console.log(colors[2]) --> "red"
// ​
// ​
// //other example
// let colors=["blue","yellow","red", "pink", "green"]
// ​
// for (let i = 0; i < colors.length ; i++) {
// 	colors[i] = colors[i] + "!"
// }
// ​
// // for of with arrays
// for (let col of colors){
// 	console.log(col)
// }
// ​
// console.log(colors)
// ​
// ​
// //for in with objects
// ​
// let icecream = {
// 	name:"golda",
// 	adress:"tlv"
// }
// ​
// for (let ob in icecream){
// 	console.log(icecream[ob])
// }
​//
// ​
// //while loops
// ​
// let userName = prompt("What is your name?")
// ​
// while (userName == "David") {
// 	console.log("In the while loop")
// 	userName = prompt("What is your name?")
// }
// ​
// // break keyword
// for (let i = 0; i < 10; i++) {
//   if (i === 3) { 
//       break;
//    }
//   console.log("The number is " + i);
// }
// ​
//continue keyword
// for (let i = 0; i < 10; i++) {
//   if (i === 3) { 
//       continue;
//    }
//   console.log("The number is " + i);
// }
// Collapse




