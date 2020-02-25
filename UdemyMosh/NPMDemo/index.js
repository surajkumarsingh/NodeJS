//By convention use ( _ ) for underscore library

var _ = require('underscore');

/** NodeJS first look for core modules
then File or folder
then node_modules to resolve the reference
*/

var result =_.contains([1,2,3], 3)


console.log(result);