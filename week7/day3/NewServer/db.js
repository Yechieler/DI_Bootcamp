const knex = require('knex');

const db = knex({
    client: 'pg',
    version: '7.2',
    connection: {
      host : '127.0.0.1',
      port :'5432',// dont need this becus its the defualt port already
      user : 'postgres', //this is default
      password : 'runrun123', // password for postgres
      database : 'dvdrental' //data base we want to use
    }
  });

// db('country')
  //or
  db.select('country_id','country').from('country')
//   .where({'country_id':99})
//   .update({'country':Tuvalu123456})
.insert(
    [
        {'country':'JavaScript'},
        {'country':'JavaScript'},
        {'country':'JavaScript'}
    ]
)
  .returning('*')
  .then(data => {
      data.forEach((item,i)=>{
          console.log(data);
      })
  })
  .catch(err=>{
      console.log(err);
  })

