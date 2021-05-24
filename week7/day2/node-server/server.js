const http = require('http');

const server = http.createServer((request,response)=>{
   console.log('method',request.method);
   console.log('url',request.url);
   const user = {
    firstname: 'John',
    lastname: 'Doe'
}
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(user))
})

server.listen(3001)
