//from week4 day 3 ex xp

// let inventory = [
//     { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
//     { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
//     { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
//     { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
//     { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
//   ];
//   let the1stHonda = inventory.find(i=>{
//     return i.car_make === "Honda"
//   })
//   console.log(`The car is a ${the1stHonda.car_make} ${the1stHonda.car_model} of ${the1stHonda.car_year}`);
//   let ret = inventory.sort((a, b) => {
//     return a.car_year - b.car_year 
//   });
//   console.log('sort=>', ret);

/*
Write a function called pangrams that will
take one string, s as input.
A pangram is a sentence that contains
every letter of the alphabet.
The goal of this function is to determine
if the sentence given is a pangram or not.
If it is not a pangram, the function will return not pangram.
If it is a pangram,
the function will return pangram. Here is an example:
"The quick brown fox jumps over the lazy dog"
"We promptly judged antique ivory buckles for the prize"
x is missing
*/

// //my try

// function pangrams(s) {
//     if(s.indexOf == "abcdefghijklmnopwrstuvwxyz") {
//         console.log(true);
//     }
// }
// console.log(pangrams("The quick brown fox jumps over the lazy dog"))

// //answer
// function pangrams(s) {
//     let alph = "abcdefghijklmnopqrutuvwxyz"
//     let lowercase = s.toLowerCase().split(' ').join('')
//     for (let i = 0; i < alph.length; i++) {
//         if(lowercase.indexOf(alph[i]) === -1) {
//             return "not pangram";
//         }
        
//     }
//     return "pangram";
// }
// console.log(pangrams('The quick brown fox jumps over the lazy dog'));

// //from josh 

// let sentence = "The quick brown fox jumps over the lazy dog";
// const pangram = (string) => {
// 	const alphabet = "abcdefghijklmnopqrstuvwxyz";
// 	for (letter of alphabet) {
// 		if (string.indexOf(letter) < 0) {
// 			return false;
// 		}
// 	}
// 	return true;
// }
// pangram(sentence)

/* Birthday Cake Candles
*  This array are Birthday Cake Candles
*  You can blow only the tallest candles
*  let ar = [2,4,4,1]
*  birthdayCakeCandles function will return
*  how many candles you can blow
*/

// I dont understand this
// let ar = [2,4,4,1]
// function birthdayCakeCandles(candles) {
//     let tallestCount = 1;
//     let i = 0;
//     candles.sort((a, b) => b - a);
//     while (i < candles.length) {
//       if (candles[i] === candles[i + 1]) {
//           tallestCount++
//           i++;
//       } else {
//           break;
//       }
//     }
  
//     return tallestCount;
//   }
//   console.log(birthdayCakeCandles(ar))


// let candles = [2,4,4,1]

// const tallest = (array) => {
// 	let sorted = array.sort();
// 	let allTops = candles.filter(i => i===sorted[sorted.length-1])
// 	return allTops.length;
// }

// tallest(candles);
// const {tokyo,shanghai,delhi} = populations;

// const populations = {
//     tokyo:1,
//     delhi:4,
//     shaghai:3,
//     datetime:{
//         time:5,
//         date:6
//     }
// }

// const {tokyo,datetime:{time,date}} = populations;
// console.log(tokyo,time,date);

const users = {
    user1: {
      age: 44,
      name: 'picard',
    },
    user2: {
      age: 12,
      name: 'sisko',
    },
    user3: {
      age: 109,
      name: 'janeway',
    },
  }
  // filter for all users older than 30
  // and store their data in an array
  // use Array.filter Array.map
  [
    { id: 'user1', age: 44, name: 'picard' },
    { id: 'user3', age: 109, name: 'janeway' },
  ]