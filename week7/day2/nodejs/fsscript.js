const fs = require('fs');

//read .. reads file first an async method
// fs.readFile('./data.txt', (err,data)=>{
//     if(err){
//         console.log(err);
//     } else{
//         console.log(JSON.parse(data.toString())[0].name);
//     }
// });
// console.log('after reading from a file');


const data = fs.readFileSync('./data.txt');
console.log(data.toString);
console.log('after reading from a file');


let data = {name:'Daniel'};
fs.appendFile('./data', JSON.stringify(data), (err)=>{
    if(err){
        console.log(err);
    }
})