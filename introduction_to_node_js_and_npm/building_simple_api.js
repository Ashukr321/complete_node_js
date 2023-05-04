// here we see the how to build a simple api in the  node js 
// api  is the simple a service from which  we can request some data 


//import the http
const http = require("http");
const fs = require("fs");

// here we import the url modules
const url = require("url");

// here we have a methods createserver
const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/about") {
    const data = 34 + 34;
    res.end(`${data}`);
  } else if (pathName ==="/home") {
    res.end("this is home page in the node js ");
  } else if (pathName ==="/api") {


   fs.readFile(`./dev_data/data.json`,'utf-8',(err,data)=>{
       const productData =  JSON.parse(data);
       res.end(productData);
    });


    
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
