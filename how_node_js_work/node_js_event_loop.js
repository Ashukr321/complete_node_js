// here we see the what is the used of  he even loop in the node js 

// node js event loop this is the 
// heart of the the node js 
//this executed  the simpe task 
// when heavy task is come in to the thread 
// then thread pool handle the that task 

// in thread pool 4 extra thread is in this 

// that handle the heavy task 

// example 
// file system apis 
// cryptography 
// compression 
// dns loopks 
// dns server
// stufll like  that ... 



//  event loop in the node js 
// all the application code that is non top level code 
// is executed by the  event loop in the node js 

// node js is buld around the callback function 

// 4 type of the callback queues in the even loop 



// 1 expired timer callback 
// 2  i/o polling and callbacks 
// 3  setImmediates callbacks 
// 4  closed callbacks 


// why name is event loop 
// it will check the event is pending or not 
// if event is not pending then exits 
// if yes then go throuh the agin from the loop 




