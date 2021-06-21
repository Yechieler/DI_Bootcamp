const exp = require('express');
const bp = require('body-parser');
const fs = require('fs');
const cors = require('cors')

const app = exp();

app.use(bp.urlencoded({extended:false}));
app.use(bp.json());
app.use(cors());

app.use((req,res,next)=>{
    res.header('Acess-Control-Allow-Origin','*');
    res.header('Acess-Control-Allow-Headers','*');
    next();
})

app.use((req,res,next)=>{
    console.log('hello b4 req & res');
    next();
})

app.use('/',exp.static(__dirname+'/public'));

app.get('/showUsers',(req,res)=>{
    let userArr =[]
    const file = fs.readFileSync('./users');
    let fileStr = file.toString();
    console.log(fileStr);
    userArr = JSON.parse(fileStr);
    res.send(userArr);
})

app.post('/addUser', (req,res)=>{
    console.log(req.body);
    let userArr =[]
    
    const file = fs.readFileSync('./users');
    let fileStr = file.toString();
    console.log(fileStr);
    userArr = JSON.parse(fileStr)

    console.log(userArr);
    // const userJson = fs.readFileSync('/./')
    // let userJsonString = userJson.toString();

    userArr.push(req.body)
    
    fs.writeFile('./users', JSON.stringify(userArr), err=>{
        if(err){
            console.log(err);
        }
    })
    res.send({message:'ok'})
})

app.get('/search/:input',(req,res)=>{
    // console.log(req.params);
    const file = fs.readFileSync('./users');
    let fileStr = file.toString();
    console.log(fileStr);
    arr = JSON.parse(fileStr)
    let filter = arr.filter(item =>{
        return item.user === req.params.input
    })
    if(filter.length>0){
        res.send({message:'exist'})
    }
    else{
        res.send({message:'not exist'})
    }
})

// app.listen(5000);  
app.set('port',5000);  // here are other ways 
app.listen(app.get('port'),()=>{
    console.log(`App started at port ${app.get('port')}`);
})


// 5. Add an name input and a button to your html file
// 6. Send the data (the name from the input) to the server with POST method
// 7. console log it in the server side
// 8. response with a {message: 'ok'}
// 7. Save all names as a JSON file in your sever - use fs
// 9. Create a button to show all names in your web page - use GET method
// 10. Create a button to check if a name exist - use rest api (request.params)
// 11. show a meesage yes or no

// don't use append use write
//create a js file in public.
// add input and button to html in public folder
// 