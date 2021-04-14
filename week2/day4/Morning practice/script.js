// let color= ["blue","g","p","r"]
// for (let i=0;i<color.length;i++){

//     for(let j=0;j<color[i].length;j++) {
//         //color[i]=blue length = 4
//     }
// }

// // r is posistion 3
// //r is length 4


// //Nested for loops
// let colors = ["blue", "red", "lightblue"];
// ​
// for (let i = 0; i < colors.length; i++) {
// 	console.log(colors[i])
// 	for (let j = 0; j <= colors[i].length -1; j++) {
// 		console.log(colors[i][j])
// 	}
// }

let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }
  ​
  // Retrieve the country "Japan"
  console.log(guestList["wendy"])
  console.log(guestList.wendy)
  ​
  //loop to go through an object : for in
  for (let key in guestList){
      console.log(guestList[key])
  }
  ​
//   ​
//   //if ... in
//   if ("randy" in guestList){
//       console.log("Hello")
//   } else {
//       console.log("bye")
//   }
//   ​
//   //Exercise 4
//   ​
//   let username = prompt("What is your name ?")
//   ​
//   if (username in guestList){
//       console.log(guestList[username])
//   } else {
//       console.log("bye")
//   }
//   ​

//   Exercise 1
//   1. Create a structured html file linked to a js file

// 2. Write a JS function that takes a parameter: myAge
// 3. Console.log the age of my mum and my dad (my mum is twice my age, and my dad is 1.2 the age of my mum)

// 4. Call the function
// function  age(myAge) {
//     let momAge = 2*myAge
//     let dadAge = 1.2*momAge
//     console.log(`my mum is ${momAge} twice my age ${myAge}, and my dad is ${dadAge}is 1.2 the age of my mum`);
// 	return momAge;
// }
// age(20); 
// console.log (momAge);


/*************************
 * notes
 *************************/

// // FUNCTIONS
// ​
// function fn_name () {
// 	//statement
// }
// ​
// // goal of the function: say hello to the user
// // //declaring a function
// // // inside the parentheses : the parameter
// function sayHello (userName, userAge, isMarried, children) {
// 	console.log(`Hello ${userName}, you are ${userAge}, and married ${isMarried}`)
// 	for (let i = 0; i < children.length; i++){
// 		console.log(children[i])
// 	}
// }
// ​
// // //calling a function - invoking
// // // inside the parenthese : argument
// sayHello("John", 45, true, ["a","b","c"])
// sayHello("Lea", 25, false, ["c","d","b"])
// sayHello("Dan", 55, false, ["t","e","h"])
// ​
// ​
// ​
// // GLOBAL AND LOCAL SCOPE
// ​
// // ----------- 1st example ---------------
// ​
// // variable is a GLOBAL variable
// // GLOBAL SCOPE
// let color = "blue"
// ​
// ​
// // // // LOCAL scope
// // // // THE LOCAL SCOPE ( function, loops, conditionals) CAN USE THE VARIABLES DECLARED IN THE GLOBAL SCOPE
// function favoriteColor(){
// 	console.log(color)
// }
// ​
// favoriteColor()
// ​
// ​
// // ----------- 2nd example ---------------
// // // // //LOCAL SCOPE
// function favoriteColor (){
// 	let usersFavoriteColor = "pink"
// }
// ​
// ​
// //GLOBAL SCOPE
// // THE GLOBAL SCOPE CANNOT USE THE VARIABLES DECLARED IN THE LOCAL SCOPE
// console.log(usersFavoriteColor) //undefined
// ​
// // ----------- 3rd example ---------------
// //  the local variable color and the global variable color have the same name
// ​
// // // //GLOBAL SCOPE
// let color = "blue"
// ​
// // //LOCAL SCOPE
// function favoriteColor (color){
// 	console.log(color) //will console.log "pink"
// }
// ​
// favoriteColor("pink")
// ​
// ​
// // EXERCISE WITH RETURN
// ​
// let mealPrice = [20, 12, 87];
// ​
// //local scope
// function totalAmountRestaurant () {
// 	let sum = 0
// 	for (let i = 0; i < mealPrice.length; i++){
// 		sum += mealPrice[i]
// 	}
// 	// console.log(sum)
// 	return sum;
// }
// ​
// // RETURN : set a result to the function
// // the variable sum becomes the result of the function
// // sum is the result of the totalAmountRestaurant function
// ​
// // console.log("Im consolging my function ", totalAmountRestaurant())
// // let sumOutside = totalAmountRestaurant()
// // console.log(sumOutside)
// ​
// // //another local scope
// // //multiply the sum by 10%
// function tipToWaiter () {
// 	let sumRestaurant = totalAmountRestaurant()
// 	let tipToGive = sumRestaurant * 0.1
// 	return tipToGive;
// }
// ​
// function amountToGivePerPerson(){
// 	//sum + tip / 3
// 	let sum = totalAmountRestaurant();
// 	let tip = tipToWaiter();
// 	let total = sum + tip;
// 	let amontPerPerson = (total/mealPrice.length).toFixed(1)
// 	console.log("amontPerPerson : ", amontPerPerson)
// }
// ​
// function tellMyFriends(currency){
// 	let amountPerP =  amountToGivePerPerson()
// 	let sentence = `Each person needs to pay ${amountPerP} in ${currency}`
// 	return sentence;
// }
// ​
// ​
// function tellTheRestaurant(typeOfPayment) {
// 	//what each person need to pay, with the currency
// 	//how we will pay it
// 	let sentenceOfClient = tellMyFriends("dollars")
// 	let sentenceRestaurant = `${sentenceOfClient} in ${typeOfPayment}`
// 	alert(sentenceRestaurant)
// }
// ​
// tellTheRestaurant("cash")



// function age(myAge) {
// 	return mumAge
// }


let database = [
	{
		username: "jeff",
		password: "123"
	}
];

let newsFeed = [
	{
		username: "bob",
		timeline: "something hapened"
	},
	{
		username: "mary",
		timeline: "Hi everyone i made cake"
	}
];

let userNamePrompt = prompt("whats ur name");
let passwordPrompt = prompt("password?");

function signIn(user,pass) {
	if (user===database[0].username && pass ===database[0].password) {
		console.log(newsFeed);
	} else {
		alert("sorry,wrong!!");
	}
}

signIn(userNamePrompt, passwordPrompt);