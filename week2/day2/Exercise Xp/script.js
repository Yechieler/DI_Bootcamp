// Exercise 1: Simple If/Else Statement
// Instructions
// Create 2 variables, x and y. Each of them should have a different numeric value.
// Write an if/else statement that checks which number is bigger.
// If x equals 5 and y equals 2, the program should display:

// x is the biggest number

// let x = 20;
// let y = 30;

// if (x > y) {
//     console.log("x is the biggest number")
// } else if (x == y) {
//     console.log("x and y are the same")
// } else 
// console.log("y is the biggest number")


/************************************************ */

// Exercise 2: Chihuahua


// Instructions
// Create a variable called newDog where it’s value is “Chihuahua”.
// Check and display how many letters are in newDog.
// Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
// Check if the variable newDog is equal to “Chihuahua”
// if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
// else, console.log ‘I dont care, I prefer cats’

// let newDog = "Chihuahua";
// console.log(newDog.length);
// console.log(newDog.toUpperCase());
// console.log(newDog.toLowerCase());

// if (newDog = "Chihuahua") {
//     console.log("I love Chihuahuas, it’s my favorite dog breed");
// } else {
//     console.log ("I dont care, I prefer cats")
// }



/******************************************************* */




// Exercise 3: Even Or Odd


// Instructions
// Prompt the user for a number and save it to a variable.
// Check whether the variable is even or odd.
// If it is even, display: “x is an even number”. Where x is the actual number the user chose.
// If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.


// let pickNumber = prompt("pick a number");
// if (pickNumber % 2 ==0 ) {
//     console.log("x is an even number.")
// } else {
//     console.log("x is an odd number.")}


    // note: when to diveide a number by 2 and the % is = 0 then this # is divisible by 2 and its even. 


/********************************************/

// Exercise 4 : Switch Case

//Using this code, answer the questions below:

// let whatHappens;
// let direction;

// switch (direction) {
//     case "forward":
//         break;
//         whatHappens = "you encounter a monster";
//     case "back":
//         whatHappens = "you arrived home";
//         break;
//         break;
//     case "right":
//         whatHappens = "you found a river";
//         break;
//     case "left":
//         break;
//         whatHappens = "you run into a troll";
//         break;
//     default:
//         whatHappens = "please enter a valid direction";
// }
// 1.What is the returned value when the value of the direction variable is “forward”


//nothing. break;


// 2.What is the returned value when the value of the direction variable is “back”

// "you arrived home"

// 3.What is the returned value when the value of the direction variable is “right”

// you found a river

// 4.What is the returned value when the value of the direction variable is “left”

// break;

/********************************************/

// Exercise 5: Group Chat

// Instructions
// let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]
// 1.Using the array above, console.log the number of users in a group chat based on the following rules:

//2. If there is no users (the users array is empty), console.log “no one is online”.

// 3.If there is 1 user, console.log “<name_user> is online”.

// 4.If there are 2 users, console.log “<name_user1> and <name_user2> are online”.

// 5.If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.

// For example, if there are 5 users, it should display:

// name_user1, name_user2 and 3 more are online



let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];



switch(users.length) {
    case 0:
        console.log("no one is online.");
        break;
    case 1:
        console.log(users[0]);
        break;
    case 2:
        console.log(users[0] + " " + users[1]);
        break;
    default:
        console.log(`${users[0]} ${users[1]} ${(users.length-2)} more online`);
        
    
}



