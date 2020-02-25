var message = '';// This var is not added to global object because Node follows Modularity


//console.log(); //global object we can access anywhere
global.console.log(global.message); //Global prefix is optional


// global objects
// setTimeout()
// setInterval()
// clearInterval()

console.log(module);