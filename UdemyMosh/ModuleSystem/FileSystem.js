const fs = require('fs');
console.log(typeof (fs));

//Read all files name in current Directory 
//and store in String Array

var files = fs.readdirSync('./');

console.log(files);

var filesasync = fs.readdir('./', function (err, file) {

    if (err) console.log('Error', err);
    else console.log('Results', file);
});