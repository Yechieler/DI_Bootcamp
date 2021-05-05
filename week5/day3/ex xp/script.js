// Exercise 1 : Comparison
// Instructions
// Create a function called compareToTen that takes a number as an argument.
// The function should return a Promise that tests if the value of the given argument is less or greater than 10.

const compareToTen =(num) => {
    return new Promise((resolve,reject) => {
        if (num>10){
            resolve('greater than 10')
        } else {
            reject('less than 10')
        }
    })
}
compareToTen(7)
.then(data => {
    console.log('aaaa',data);
  })
  .catch(err => {
    console.log('bbbb',err);
  })

//   Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
// Read about Promise.resolve() and Promise.reject().
// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// Add code to catch errors and console.log ‘Ooops something went wrong’.

// const p = new Promise((resolve, reject)=>{
//     setTimeout(()=> {
//         resolve('success')
//     }, 4000
// )})
// p.then(res => {
// console.log(res)
// })

// const p = Promise.resolve(
//     setTimeout(()=> {
//         console.log('success')
//     }, 4000)
//   )







// Exercise 3 : Resolve & Reject
// Instructions
//1 Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
//2 Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

Promise.resolve(3).then(data => {
    console.log(data);
})

Promise.reject('Boo!').catch(err => {
    console.log(err);
})


