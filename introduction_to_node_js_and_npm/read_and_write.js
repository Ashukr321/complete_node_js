// read and write file in the node 
const fs = require('fs');

const txt = fs.readFileSync('./file.txt','utf-8');
console.log(txt);


const textOut =  `this is :textin${txt} \n created on ${Date.now()}`;
 fs.writeFileSync('./new_file.txt',textOut);
console.log("file has been written ");
