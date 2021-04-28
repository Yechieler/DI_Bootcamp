// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// John doe, canada, vancourer, undifined undefined

// the outcome is

// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// Exercise 2: Display Student Info
// Instructions
// Create a function called displayStudentInfo(studentObject) that accepts an object as a parameter.
// For example displayStudentInfo({first: 'Elie', last:'Schoppik'}).
// The function should return a string as seen in the example below.
// displayStudentInfo({first: 'Elie', last:'Schoppik'}) 
// // 'Your full name is Elie Schoppik'`
// Destructure this object inside the function.

const displayStudentInfo = ((obj) => {
    //     console.log({ first, last })
    const { first, last } = obj
    console.log(`Your full name is ${first} ${last}`)
})
displayStudentInfo({ first: 'Elie', last: 'Schoppik' })

/***********************
 * 
 */

//  Exercise 3: User & Id
//  Instructions
//  Using this object const users = { user1: 18273, user2: 92833, user3: 90315 }
 
//  Using methods taught in class, turn the users object into an array:
//  Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
//  FYI : The number is their ID number.
 
//  Modify the outcome of part 1, by multipling the user’s ID by 2.
//  Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

const users = { user1: 18273, user2: 92833, user3: 90315 };

console.log(Object.values(users).map (item => item*2));
/**************
 * 
 * 
 */
// Exercise 4 : Person Class
// Instructions
// Analyze the code below. What will be the output?

class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);

//object

/******************
 * 
 */

// Exercise 5 : Dog Class
// Instructions
// Analyze the options below.
class Dog {
  constructor(name) {
    this.name = name;
  }
};
//1 Which constructor will successfully extend the Dog class?
  // 1
class Labrador extends Dog {
  constructor(name, size) {
    this.size = size;
  }
};


  // 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};


  // 3
class Labrador extends Dog {
  constructor(size) {
    super(name);
    this.size = size;
  }
};


  // 4
class Labrador extends Dog {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
};


// the correct format is 2. The 'name' param will be called back to its source and run its function. while the new size will need a new param for that function.

