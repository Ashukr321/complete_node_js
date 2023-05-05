// here we see the what is the stream in the node js 

// stream :) 

// this is process read write data pices by pices chunks 

//  jo pure file ko read and write karne ke wajaye 
// small small chunks me data ko read karta hai 
// reciving the data in pices by pices from the external resources 

// data processing more efficent 


// in the node js 


// 4 type of the stream is aviables 

// read stream 
// this consumed the data  read data from the external sources 
// two important function is avilable in the read stream 


// pipe()
// read()



// write stream 
// duples stream 
//  transform stream 




// example of the stream 
// import the fs module 
const fs  = require('fs');
const server = require('http').createServer();



// here we read the file from the file and send to the client 
//  the file is read by chunks of the size of the 


server.on('request',(req,res)=>{
    // solution 1 
    // fs.readFile('./file.txt',(err,data)=>{
    //     if(err){
    //         console.log("err");
    //     }
    //     // here we send the data to the client 
    //     res.end(data);
    // })

    // solution 2  uses the stream 
    // createReadStream we have a methods
    fs.createReadStream('./file.txt').pipe(res);


})


// listen the server on port number 8000


var port = 8000; 
server.listen(port,()=>{
    console.log(`server is listen on ${port} number `);
})
