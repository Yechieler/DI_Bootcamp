const exp = require('express');

const app = exp();

app.use('/',exp.static(__dirname+'/public'))

app.get('/addItems',(req,res)=>{
res.send('hello')
})
app.listen(3030)