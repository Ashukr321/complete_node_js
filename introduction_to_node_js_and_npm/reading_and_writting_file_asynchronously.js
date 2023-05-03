// reading and writting the code asynchronously in the js 

// require the file system from the node js 
const fs  = require('fs');

// this return too many object 

fs.readFile('./file.txt','utf-8',(err,data1)=>{
    fs.readFile(`./${data1}.txt`,'utf-8',(err,data2)=>{
        console.log(data2);
    })
})



