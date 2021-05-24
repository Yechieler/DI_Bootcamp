const exp = require('express');

const app = exp();

// app.use('/', express.static(__dirname+'/public'));

app.get('/users', (req,res) => {
	const user = {
        firstname: 'John',
        lastname: 'Doe'
	}
	res.send(JSON.stringify(user));
}) 
app.listen(4000);