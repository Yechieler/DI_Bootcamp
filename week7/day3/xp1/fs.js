// Exercise 1 : Reading From A File In Node.JS
// Instructions
// Create a text file and write something inside (example: ‘Some Text To See’)
// Create an fs.js file, and inside use the Node JS File System to read the text file and console.log the output in the terminal


// let fs = require('fs');

// let file = fs.readFileSync('./some.txt');

// let txt = file.toString();
// console.log(txt);

//or

// const fs = require('fs');

// fs.readFile('./some.txt',(err,data)=>{
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log(data.toString());
//     }
// })

/******************* */

// Exercise 2 : Writing Files With Node JS
// Instructions
// Create an fs.js file, and use the Node js File System to create a new text file and write to it.

// let fs = require('fs');

// let string = "Written with node.js";
// fs.writeFile('data.txt',string,err => {
// 	if (err) {
// 		console.log(err);
// 	}
// })

// Exercise 3 : Appending And Deleting Files With Node JS
// Instructions
// Create an fs.js file, and use the Node js File System to create and write to a new text file. (Example: “Buy Milk”)

let fs = require('fs');

let file = './newdata.txt'

let str = 'Buy Milk.'

fs.writeFile(file,str,err =>{
    if(err){
        console.log(err);
    }
})

// Use the Node js File System to append some other text to the text file. (Example:”Buy orange juice”)

let str2 = 'Buy orange juice';  // use \n to skip the line
fs.appendFile(file,str2,err =>{
    if (err){
        console.log(err);
    }
})
//Use the Node js File System to delete the file.
fs.unlink(file,str2,err=>{
    if (err){
        console.log(err);
    }
})