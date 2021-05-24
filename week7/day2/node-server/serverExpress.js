const exp = require('express');

const app = exp();

app.get('/',(req,res)=>{

    res.send('<h1>Hello</h1>');
})
app.listen(3002);