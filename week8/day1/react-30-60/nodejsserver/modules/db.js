const knex = require('knex');

const db = knex({
    client:'pg',
    connection:{
        host:'127.0.0.1',
        port:'5432',
        user:'postgres',
        password:'runrun123',
        database:'dvdrental'
    }
})

const getCountries=()=> {
    return db.select('country_id', 'country').from('country')
    .orderBy('country')
}

const getCities = (id) => {
    return db.select('city_id','city')
    .from('city')
    .where({country_id:id})
    .orderBy('city')
}

module.exports ={
    getCountries,
    getCities,
}


