// const a = require('./s2')

// console.log(a);

// const axios = require('axios');

// axios.get('https://jsonplaceholder.typicode.com/users/')


const a = require('axios');

a.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data.data))