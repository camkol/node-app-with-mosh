const os = require("os");

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

// Template string
// ES6 / ES2015 : ECMAScript 6

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

// for path
// const path = require("path");

// var pathObj = path.parse(__filename);

// console.log(pathObj);
