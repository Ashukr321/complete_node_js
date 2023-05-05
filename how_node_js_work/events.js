// for the event of the node 
// we have a module called events 
//we have to require the events modules 

const eventEmitter = require('events');
const myEmiiter = new eventEmitter();

myEmiiter.on('newSale',()=>{
    console.log(' their was  a  new sale');
})

myEmiiter.on('newSale',()=>{
    console.log(' coustomer name ashutosh  ')
})

myEmiiter.emit('newSale');