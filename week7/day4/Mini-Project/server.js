const exp = require('express'); 
const fs = require('fs')  // part2

const app = exp(); 

app.use('/',exp.static(__dirname+'/public'))

app.get('/addItems', (req,res)=>{
    console.log(req.query);// part 2 
    let userArr = [];

    const file = fs.readFileSync('./items');
    let fileStr = file.toString();
    console.log(fileStr);
    userArr = JSON.parse(fileStr);

    console.log(userArr);

    userArr.push(req.query);

    fs.writeFile('./items', JSON.stringify(userArr), err=>{
      if(err){
        console.log(err);
      }
     }) // part2
    res.send(userArr);
})

app.listen(5050);
