// Exercise 1 : Keyless Car
// Instructions

//1 Ask the user for their age, and save the value to a variable.
//2 Create a function called checkDriverAge() that will notify the user if they are permitted to drive. They must be at least 18 to drive.
//2.1 if the user is too young, alert “Sorry, you are too young to drive this car. Powering off”
//2.2 if the user is old enough, alert “You are old enough to drive, Powering On. Enjoy the ride!”
//2.3 if the user just turned 18, alert “Congratulations on your first year of driving. Enjoy the ride!”

// let userAge = parseFloat(prompt("how old are you?"))
// function checkDriverAge() {
//     if (userAge<18) {
//         alert(`Sorry, you are ${userAge}. That is too young to drive this car. Powering off`)
//     } else if (userAge>18) {
//         alert(`You are old enough to drive, Powering On. Enjoy the ride!`)
//     } else {
//         alert(`Congratulations on your first year of driving. Enjoy the ride!`)

//     }
// }   
// checkDriverAge();

//3 Instead of using prompt to ask the user for their age, have the checkDriverAge() function accept an argument age.

// function checkDriverAge(age) {
//     if (age<18) {
//         alert(`Sorry, you are ${age}. That is too young to drive this car. Powering off`)
//     } else if (age>18) {
//         alert(`You are old enough to drive, Powering On. Enjoy the ride!`)
//     } else {
//         alert(`Congratulations on your first year of driving. Enjoy the ride!`)

//     }
// }   
// checkDriverAge(25);

/******************************************** */

// Exercise 2 : What’s In My Wallet ?
// Instructions

//1 Given a item price and an array representing the amount of change in your pocket, determine whether or not you can afford the item.
// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// Quarters  = 0.25
// Dimes = 0.10
// Nickels = 0.05
// Pennies = 0.01
// To illustrate:
// changeEnough([25, 20, 5, 0], 4.25) should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)

// Examples

// changeEnough([2, 100, 0, 0], 14.11) ➞ false
// changeEnough([0, 0, 20, 5], 0.75) ➞ true

// function changeEnough([quarters,dimes,nickels,pennies],itemPrice ) {
//     let pocket = (quarters==0.25) + (dimes==0.10) + (nickels==0.05) + (pennies==0.01);
//     console.log(pocket)
//     if (pocket>=itemPrice) {
//         console.log(true)
//         return true;
//     }
//    else {
//     console.log(false)
//     return false;
//   }
// }
// changeEnough([0,0,20,5],0.75);






// Exercise 3: Find The Multiples Of 23
// Instructions
// Write a js function that console.logs all multiples of 23 less than 500, at the end return the sum of all the multiples.

function multipleof23() {
    let multiple = 0;
    let arr = []

    while(multiple <= 500) {
        arr.push(multiple);
        multiple += 23;
    }
    console.log(arr);
    let total = 0;

    for(i in arr) {
        total += arr[i];
    }
    console.log(total)
}

multipleof23();





// function multiplesOf(numbers) {
//     var multiples = numbers[0];
  
//     for (var i = 0; i < numbers.length; i++) {
//       if (numbers[i] % multiples === 0) {
//         multiples = numbers[i];
//       }
//     }
  
//     return multiples;
//   }
  
//   console.log(multiplesOf([4, 5, 6, 7, 8], 2));



// Exercise 4 : Amazon Shopping
// Instructions

// let amazonBasket = {
//     glasses: 1,
//     books: 2,
//     floss: 100
// }
// Create a function called checkBasket().
// It should:
// prompt the user for an item
// let the user know if the item is in the basket
// Hint: Use the in keyword inside the conditional

let amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
}
function checkBasket(params) {
    prompt("choice an item.")
}