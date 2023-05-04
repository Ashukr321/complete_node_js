// creating the web server

// server is created by using he http package
// that is provied by the node package

// we have to require
// const http = require("http");
// const url = require("url");

// for creating the server we have a methods called
// createServer which is a function that takes a port as a parameter
// and returns a server object

// createserver function take two parameter
// 1 is request variables and second is the respone variables
// request and response is  the actual of the object

// const server = http.createServer((req, res) => {
//   const pathName = req.url;
//   if (pathName === "/" || pathName === "/home") {
//     res.end("this is home page  ");
//   }
//   if (pathName === "/about") {
//     res.end("this is about page ")
//   } else {
//     // writehead
//     res.writeHead(404);
//   }
// });

// // basically i host the server on this port number which is 8000
// server.listen(8000, "127.0.0.1", () => {
//   console.log("server start listenig ");
// });

// here we apply the rouing concepts
// by the help of the url methods that is predefined in the node js

//  part 2
//creating the server in the node js

//import the http
const http = require("http");

// here we import the url modules
const url = require("url");

// here we have a methods createserver
const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName == "/about") {
    const data = 34 + 34;
    res.end(`${data}`);
  } else if (pathName == "/home") {
    res.end("this is home page in the node js ");
  } else if (pathName == "/") {
    res.end("server is created successfully ");
  } else {
    res.writeHead(404,{
      'content-type': "text/html",
      'my-own-header':'hellow-world this is ashutosh kumar singh '
    });
    res.end('<h1>page node found ! </h1>');
  }
});

// here we listen the server on the port number
server.listen(8000, "127.0.0.1", () => {
  console.log("server is listen on port number 8000");
  console.log("congratualtion🤷😎");
});


// this routing concepts that we used here this is nothing to do in the project 
// or file system 
