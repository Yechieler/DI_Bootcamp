 const http = require('http');

 const server = http.createServer((request,response)=>{
     response.setHeader('Content-Type', 'text/html');
     response.end(`<h1>Hi</h1>
     <p>Wow did I do it?</p>
     <p>maybe maybe I did</p>`)
 })
 
 server.listen(3000)
