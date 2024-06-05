function sayHello(name) {
  console.log("Hello " + name);
}

// sayHello("Cam");
console.log(window);

console.log(); //global object

setTimeout(); //global object
clearTimeout(); //global object

setInterval(); //global object
clearInterval(); //global object

global.setTimeout; //global object

window.console.log(); //window object
