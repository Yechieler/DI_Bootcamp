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



  /*morning notes*/
  // const population = {
//   tokyo: 37833000,
//   delhi: 24953000,
//   shanghai: 22991000
// }
/* Object.Keys */
// const keys = Object.keys(population);
// console.log(keys);
// Object.keys(population).forEach( key => {
//   // console.log('key', key);
// });
/* Object.values */
// const values = Object.values(population);
// console.log(values);
//
// values.forEach( val => {
//   console.log('val',val);
// });
/* Object.entries */
// const entries = Object.entries(population);
// console.log(entries);
//
// entries.forEach( ent => {
//   console.log('enteries', ent);
// });
/* Object.FromEntries */
// const population2 = [
//   ['tokyo', '37833000'],
//   ['delhi', '24953000'],
//   ['shanghai', '22991000'],
// ];
// const population3 = Object.fromEntries(population2);
// console.log(population3);
/* Cloning */
// const newPopulation = {...population}
// console.log(newPopulation);
// let jsonfile = '{"tokyo":37833000,"delhi":24953000,"shanghai":22991000,"bla":"nameof student"}';
// console.log(jsonfile.tokyo);
/* deep cloning */
// let str = JSON.stringify(population)
// console.log(str);
// let test = JSON.parse(jsonfile);
// console.log(test.tokyo);
/* Merging */
// const population = {
//   tokyo: 37833000,
//   delhi: 24953000,
//   shanghai: 22991000
// }
// const population_2 = {
//   tokyo: 87833000,
//   telaviv: 7833000,
//   newyork: 74953000,
// }
// const totalPopulation = {...population, ...population_2}
// console.log(totalPopulation);
/* Destructuring */
const population = {
  tokyo: 37833000,
  delhi: 24953000,
  shanghai: 22991000
}
// const a = population.tokyo;
// const b = population.shanghai;
// const c = population.delhi;
// const {tokyo,shanghai,delhi} = population;
// console.log(tokyo,delhi,shanghai);
/* Spreading */
// const population4 = {...population, tokyo:4444}
// console.log(population4);
/* Nested Object Destructuring */
const population5 = {
  tokyo: 1,
  delhi: 4,
  shanghai: 3,
  datetime:{
    time:5,
    date:6
  }
}
// const tokyo = population5.tokyo;
// const {tokyo,datetime:{time,date}} = population5;
// console.log(tokyo);
/* Function Destructuring */
// const dist = (obj) => {
//   // const tokyo = obj.tokyo;
//   // const delhi = obj.delhi;
//   // const shanghai = obj.shanghai;
//   // const time = obj.datetime.time;
//   // const date = obj.datetime.date;
//
//   const {tokyo,delhi,shanghai,datetime:{time,date}} = obj;
//   console.log(tokyo,delhi,shanghai,time,date);
// }
// dist(population5)
/* this */
// In the global scope, "this" is window .
// In the global execution context (scope)
// this === window // true
// var x = 5;
// const foo = () => {
//   console.log(this.x);
// }
// foo();
// var obj = {
//         x: 2,
//         a:foo
// };
// // obj.a = foo;
// obj.a();
// foo();
/* Class */
class someclass {
  constructor(name, last){
    this.name = name;
    this.lastname = last;
  }
  getFullName(){
    return this.name + " " + this.lastname
  }
  setName(param){
    this.name = param;
  }
  setLastName(param) {
    this.lastname = param;
  }
  aaaaa(ziv){
    return ziv + '!';
  }
}
//
let c = new someclass('ziv','chen');
// console.log(c.getFullName());
let d = new someclass('Aviv','Ketter');
// console.log(d.getFullName());
c.setName('Eli')
// console.log(c.getFullName());
// console.log(d.getFullName());
// console.log(c.getFullName());
// let a = new someclass('Eli','Cohen');
// console.log(a.getFullName());
// //
// b.setName('');
// b.setLastName('')
// console.log(b.getFullName());
class Fruit {
  constructor(name){
    this.name = name;
  }
  setName(param){
    this.name = param;
  }
  getName() {
    return this.name;
  }
}
// let apple = new Fruit('Aplle');
// let orange = new Fruit('Orange');
// console.log(apple.getName());
// console.log(orange.getName());
class Orange extends Fruit {
  constructor(){
    super('Orange');
    this.color = '';
  }
  setColor(param){
    this.color = param;
  }
}
class Apple extends Fruit {
  constructor(){
    super('Apple');
    this.color = '';
  }
  setColor(param){
    this.color = param;
  }
  getColor(){
    return this.color;
  }
}
class TypoAplle extends Apple {
  constructor(){
    super();
    this.sahpe ='cube';
  }
}
let ta = new TypoAplle();
console.log(ta.getName());
let f = new Fruit();
let o = new Orange();
let a = new Apple();
let ag = new Apple();
// console.log(o.getName());
// console.log(a.getName());
// o.setColor('orange');
// a.setColor('red');
// ag.setColor('green');
// console.log(a.getColor());
// console.log(ag.getColor());
// console.log(orange.getName());