var url = 'https//www.surajkumar.com';


function log(msg) {console.log(msg);} 
function log2(msg) {console.log(msg);} 


// When you have multupe functions 
//module.exports.log = {log, log2};

// when you have single function **exporting only function instead of Object
module.exports = log;

//** Exporting object instead of single method */
//module.exports.log = log;
        
//module.exports.eurl = url;


console.log(module);
console.log(__dirname);
console.log(__filename)
