// crypto 
const crypto  = require('crypto');
crypto.pbkf2('password','salt','10000','1024','sha512',()=>{
    console.log("password is encrypted ");
})