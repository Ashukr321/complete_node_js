//  here we creating the node server by the http modules 
// we have to rquires the module https 
const http = require('http');

// here we got the multiple object from the http module 
const server = http.createServer((req,res)=>{
    res.end("server is created succesfully by ashutosh kumar singh and nikhil  ");
})

// listening the server
server.listen(8000,()=>{
    console.log("server is listening on port numbr 8080");
});