// const num =2;

// module.exports = {
//     id: num
// }

const a = require('axios');

a.get('https://zivuch.github.io/yogaapi.json')
.then(data => console.log(data.data))