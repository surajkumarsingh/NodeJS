const os = require('os');


var  totalMem = os.totalmem();

var freeMem = os.freemem();


//Template String
//ES6: ES2015

console.log(`Total Memorary ${totalMem}`);
console.log(`Free  Memorary  ${freeMem}`)