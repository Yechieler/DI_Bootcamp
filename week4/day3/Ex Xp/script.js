// Exercise 1 : Analyzing
// Instructions
// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

// Results will be bread then the items inside of vegetables array will be added to the result array. he same for fruits.
// ["bread", "carrot", "potato", "chicken", "apple", "orange"]

// ------2------
const country = "USA";
console.log([...country]);
// USA will become an array... no

//usa splits its letters and becomes an array. 
//["U", "S", "A"]

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);

// an array inside an array?   no
// [undefined, undefined]



/***************************
 * 
 */
//  Exercise 2 : Employees
//  Instructions
//  Using this array:
 
//  let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//               { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//               { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//               { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//               { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//               { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//               { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
//  Using the map() method, say hello to the users using only their firstname (ie. “Hello Bradley”, “Hello Chloe” ect…)
//  Using the filter() method, congratulate only the Full Stack Residents.

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];


const mapArr = users.map(item => {
    return  "Hello " + item.firstName;
});
console.log(mapArr);

const filterArr = users.filter(item => {
    return  item.role == 'Full Stack Resident';
})
console.log(filterArr);


const conArr =  filterArr.map(item => {
    return  "congradulations " + item.firstName;
});
console.log(conArr);

/******************************************
 * 
 */
// Exercise 3 : Star Wars
// Instructions
// Using this array let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// 1. Use the reduce() method to combine all of these into a single string.

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];


let sum =epic.reduce((acc, val) => {

  return acc +" " + val;
});

console.log(sum)

/********************************************
 * 
 */

//  Exercise 4 : Employees #2
//  Instructions
//  Using this object:
 
//  let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
//                 {name: "Liam", course: "Computer Science", isPassed: false}, 
//                 {name: "Jenner", course: "Information Technology", isPassed: true}, 
//                 {name: "Marco", course: "Robotics", isPassed: true}, 
//                 {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
//                 {name: "Jamie", course: "Big Data", isPassed: false}];
//  Use the filter() method to congratulate the students that passed the course.

let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

const filterArray = student.filter(item => {
    return  item.isPassed == true;
})
console.log(filterArray);


const conArray =  filterArray.map(item => {
    return  `congradulations ${item.name} on passing`;
});
console.log(conArray);