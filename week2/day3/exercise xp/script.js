//exercise 1
// practice
// let colors = ["blue","green","purple","red"];
// let choice = ["#1","#2","#3","#4"];

// for (i=0;i<colors.length;i++) {
//     console.log(`My ${choice[i]} choice is ${colors[i]}.`)
// }

//answer
// let colors = ["blue","green","purple","red"];
// let suffixes = ["st","nd","rd","th"]
// for (i=0;i<colors.length;i++) {
//     console.log(`My ${i+1}${suffixes[i]} choice is ${colors[i]}.`)
// }
// bonus

// let colors = ["yellow","red", "blue", "purple", "green"]
// let suffixes = ["st", "nd", "rd", "th"]
// let sentence;
// ​
// for (let i = 0; i < colors.length; i++){
// 	if (i < 3){
// 		sentence = `My ${i+1} ${suffixes[i]} color is ${colors[i]}`;
// 		console.log(sentence)
// 	} else if (i >= 3){
// 		sentence = `My ${i+1} ${suffixes[3]} color is ${colors[i]}`;
// 		console.log(sentence)
// 	}
// }


/******************************* */

// // Exercise 2 : List Of People

// // Instructions
// // let people = ["Greg", "Mary", "Devon", "James"]
// let people = ["Greg", "Mary", "Devon", "James"]


// //1 Write code to remove “Greg” from the people array.

// people.splice(0,1);


// //2 Write code to replace “James” to “Jason”.

// people.splice(2,1, "Jason");


// //3 Write code to add your name to the end of the people array.

// people.push("yechiel");


// //4 Using a loop, iterate through the people array and console.log each person.

// // for (i=0;i<people.length;i++){
// // 	console.log(people[i]);
// // }

// //5 Using a loop, iterate through the people array and after you console.log “Jason” exit the loop.


// for (i=0;i<people.length;i++) {
// 	console.log(people[i]);
// 	if (i===people.indexOf("Jason")) {
// 		break;
// 	} 
// }

// //6 Write code to make a copy of the people array using slice. The copy should NOT include “Mary” or your name.


// console.log(people.slice(1,3));



// //7 Write code that console.logs Mary’s index. take a look at indexOf on google.

// console.log(people.indexOf("Mary"));

// //8 Write code that gives the indexOf “Foo” (this should return -1). Why does it return -1

// console.log(people.indexOf("Foo")); // -1 because it doesnt exist in the Array and Arrays start at 0. 

// //9 Create a variable called last which value is the last element of the array.

// let last = people.length - 1
// console.log(last);  // the answer is 3 since mary was taken out



// // Hint: What is the relationship between the index of the last element in the array and the length of the array?

// console.log(people);
// //when logging people mary is still there since slice makes a copy.

/*******************************************/



// Exercise 3 : Repeat The Question
// Instructions

// Prompt the user for a number, while the number is smaller than 10 continue asking the user for a new number.

// let guessNumber = prompt("Pick a number smaller than 10.")

// do  {
// 	i = prompt("Pick a number smaller than 10.");
// } while (i <10); 



// Tip : Which while loop is more relevant for this situation?

// Hint : Check the data type you receive from the prompt (ie. typeof method)


/************************************** */


// Exercise 4 : Attendance
// Instructions

// let guestList = {
//   randy: "Germany",
//   karla: "France",
//   wendy: "Japan",
//   norman: "England",
//   sam: "Argentina"
// }

// Given the object above where the key is the students name and the value is the country they are from.

// 1.Prompt the student for their name :
// If the name is in the object, console.log the name of the student and the country they come from.
// example: "Hi! I'm [name], and I'm from [country]."
// Hint: Look up the statement if ... in
// If the name is not in the object, console.log: "Hi! I'm a guest."

let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}
let name = prompt("what is your name?")

if (guestList[name] !== undefined){
    console.log(`Hi! I'm ${name}, and I'm from ${guestList[name]}.`);
} else {
    console.log("Hi! I'm a guest.")
}


if (prompt===Object.keys(guestList)) {
	console.log(Object.values(guestList));
}




/**************************************************** 
 * 
*/

// Exercise 5 : Family
// Instructions

//1 Create an object called family with a few key value pairs.

let family = {
	House: 1,
	Pets: 2,
	Children: 7,
	Car: 1
};
// //2 Console.log the keys. (using a for loop).

 for (key in family) {
	  console.log(`${key}: ${family[key]}`);
 }
	
// 	console.log(Object.keys(family));
// }


//3 Console.log the values. (using a for loop).

/******************************************* */

// Exercise 6
// Instructions
// Given the object above, console.log “my name is Rudolf the raindeer”

// let details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }
// let str = '';
// for (property in details) {
//   str += property;
//   str += ' ';
//   str += details[property];
//   str += ' ';
// }
// console.log(str);

// Exercise 7 : Secret Group
// Instructions

// let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society.

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]

let str = '';
console.log(names.sort());


for (let i = 0; i < names.length; i++) {
str += names[i].charAt(0);
}
//the string is and = each name at the 0 posistuion
console.log(str);