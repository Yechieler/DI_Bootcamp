const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');


// const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const someOtherPlaintextPassword = 'not_bacon';

// const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);

const knex = require('knex')({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      port:'5432',
      user : 'postgres',
      password : 'runrun123',
      database : 'nutrackion'
    }
  });

const app = express();
app.use(bp.urlencoded({ extended: false }))
 
// parse application/json
app.use(bp.json())
app.use(cors())
//if u go to this route do this
app.post('/register',  (req,res)=>{
    console.log(req.body);

    knex('users').insert({username: req.body.name,email: req.body.email, password: req.body.password})
    .returning('*')

    // read up on bcrypt to incrypt password or p4ssw0rd
    //incrypt password b4 inserting into database req.body.password would be incrypt


    //make a another root in server like we did in 'svaing' just 

    .then(result=>{
        res.send({message: 'registered', user:result})
        
    })
    .catch(e=>{
        res.send({message: 'already registered'})
    })
    
})

// app.get('/:id'), (req,res)=>{

//     knex.select('*')
//     .from('food')
//     .where('user_id'== req.body.user_id)
//     .then(result=>{
//         res.send({message: 'got user_id'})
        
//     })
//     .catch(e=>{
//         res.send({message: 'didnt get user_id'})
//     })
// }

// make another get just using id, and select * from food where user id == the user id im sending. req params id.
//then i need to fetch when clicked on button and get the data.

app.get('/chart/:protein/:fat/:cal/:food/:id', (req,res)=>{
    console.log(req.params);
    // res.send({message: req.params})

    knex('food').insert({name: req.params.food, calories: req.params.cal, protein: req.params.protein, fats: req.params.fat, user_id: req.params.id})

    // after login send back user_id save this user_id in a state in frontend and when you save you need to save it in concant i.e food, so to the id

    .then(result=>{
        res.send({message: 'saved food'})
    })
    .catch(e=>{
        console.log(e);
        res.send({message: 'error with save'})
    })
})




app.post('/login',  (req,res)=>{
    console.log(req.body);
    knex('users').select('username','user_id','email')
    .where({email:req.body.email, password:req.body.password})
    .then(result=>{
        if(result.length>0){
            res.send({message: 'registered', user:result});
        } else{
            res.send({message:'email or password not correct'})
        }
    })
    .catch(e=>{
        console.log(e);
    })

    
    
})
app.listen(3001);



// read how to conect to database with knex 
// do the same with login page 