// creating the web server 

// server is created by using he http package 
// that is provied by the node package 

// we have to require 
 const http = require('http');

 // for creating the server we have a methods called 
 // createServer which is a function that takes a port as a parameter
 // and returns a server object

 // createserver function take two parameter 
 // 1 is request variables and second is the respone variables  
    // request and response is  the actual of the object

 const server = http.createServer((req,res)=>{
    console.log(req);
    res.end("finally i am creating my first server ");

 })


 // basically i host the server on this port number which is 8000
 server.listen(8000,'127.0.0.1',()=>{
    console.log("server start listenig ");
 });