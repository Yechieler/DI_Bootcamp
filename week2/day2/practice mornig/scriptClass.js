//length and position
let userName = prompt("What is your name ?");
console.log(`The user name given by the user is ${userName}`)

//1st step : I need to get the position of the last character

let positionLetter = userName.length-1;
console.log(`the position of the last letter of the name is ${positionLetter}`)

//2nd step : I need to retrieve the last letter

let lastLetter = userName[positionLetter]
console.log(`the last letter of the name is ${lastLetter}`)


//Same idea with an array
let colors = ["yellow", "blue", "green"]

//length of the array is 3
//the position of "green" is 2
// 3 - 1 = 2
let lastElementposition = colors.length - 1

let lastItemOfArray = colors[lastElementposition]

//the same as:
let lastItemOfArray = colors[colors.length - 1]

//----------//
// ARRAYS AND OBJECTS

// ARRAY : list of items, or a list of elements
//complex data type
let colors = ["blue", "red", "yellow"]

//OBJECT : key-value pair

const icecreamShop = {
	name : "Golda",
	adress : "Tel Aviv",
	numberAdress : 13,
	flavours : ["vanilla","chocolate", "caramel"],
	details : {
		typeOfProduct : ["icecream", "milkshake"],
		colorOfShop : "gold",
	}
}

// get the name of the shop
console.log(icecreamShop.name)
console.log(icecreamShop["name"])

//get the "milkshake"
console.log(icecreamShop["details"]["typeOfProduct"][1])

// get the "chocolate" flavour
console.log(icecreamShop["flavours"][1])

// change a value in the object
// 1st step : fetch the key-value pair, that has the adress property
// 2nd step : assign a new value

icecreamShop["adress"] = "Jerusalem"

//add a new key-value pair
icecreamShop["nameOfOwner"] = "John"
console.log(icecreamShop)


// ARRAY OF OBJECTS

let icecreamShopsIsrael = [

	{ 
		name : "Golda",
		adress : "Tel Aviv",
		numberAdress : 13,
		flavours : ["vanilla","chocolate", "caramel"]
	},
	{ 
		name : "Glideria",
		adress : "Eilat",
		numberAdress : 13,
		flavours : ["vanilla","strawberry", "caramel"]
	},
]

//get the name of the second shop
console.log(icecreamShopsIsrael[1]["name"])
console.log(icecreamShopsIsrael)


// CONDITIONALS : IF ELSE BLOCK
let bankMoney = 10000;
let priceCar = 4000;
let priceBicycle = 1200;


if (bankMoney >= priceCar) {
	console.log("I buy a car");
	bankMoney -= priceCar;
	console.log(bankMoney);
} else if (bankMoney >= priceBicycle){
	console.log("I buy a bicycle");
	bankMoney -= priceBicycle;
	console.log(bankMoney);
} else {
	console.log("I am broke")
}


// SEVERAL CONDITIONS

let userName = "John";
let password = 1234

// OR
if (userName == "John" || password == "hello"){
	console.log("You can log in")
// AND
} else if (userName == "John" && password != 1234){
	console.log("Error")
}



// NESTED CONDITIONS


let bankMoney = 10000;
let priceCar = 4000;
let bankName = "Discount"

if (bankMoney >= priceCar){
	console.log("I will buy a car")
	if (bankName == "Discount"){
		console.log("The bank authorize you to buy a car")
	} else {
		console.log("The bank e DOESNT authorize you to buy a car")
	}
}


// switch case
let userName = "Dan";

switch(userName) {
  case "John":
    console.log("Hello John")
    break;
  case "Dan":
    console.log("Hello Dan")
    break;
  default:
    console.log("Bye")
}

//The same as:
if (userName == "John") {
	console.log("Hello John")
} else if (userName == "Dan"){
	console.log("Hello Dan")
} else {
	console.log("Bye")
}