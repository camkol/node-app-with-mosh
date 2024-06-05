# Node App with Mosh

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

<!-- - View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating -->

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- [Bootstrap](https://getbootstrap.com/) - CSS library
- CSS custom properties
- [Sass](https://sass-lang.com/) - Preprocessor scripting language
- Flexbox
- CSS Grid
- Mobile-first workflow
- Mobile-Responsive Design
- JavaScript - Scripting language
- [jQuery](https://jquery.com/) - JS library
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles
- [Photoshop](https://www.adobe.com/products/photoshop.html) - Image editor

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

- node file.js runs the javascript file
- jshint is a tool in command line to scan all javascript code for errors
- the way to export and import modules
- use of node modules: path, os, fileSystem, event, and http

To see how you can add code snippets, see below:

```node
$node app.js
```

```node
$jshint;
```

```css
.proud-of-this-css {
  color: papayawhip;
}
```

```js
module.exports = log;

module.exports = log;

exports.log = log;
```

```js
require("./logger");
```

```js
const path = require("path");

var pathObj = path.parse(__filename);
```

```js
const os = require("os");

var totalMemory = os.totalmem();
var freeMemory = os.freemem();
```

```js
const fs = require("fs");

files = fs.readdirSync("./");

console.log(files);

// Result [
//     '.git',
//     'app.js',
//     'app1.js',
//     'app2.js',
//     'info.js',
//     'logger.js',
//     'README.md'
//   ]

fs.readdir("$", function (err, files) {
  if (err) console.log("Error", err);
  else console.log("Result", files);
});
// Error [Error: ENOENT: no such file or directory, scandir 'C:\Users\koliy\OneDrive\Desktop\projects\node-app-with-mosh\$'] {
//     errno: -4058,
//     code: 'ENOENT',
//     syscall: 'scandir',
//     path: 'C:\\Users\\koliy\\OneDrive\\Desktop\\projects\\node-app-with-mosh\\$'
//   }
```

```js
logger2.js;

const EventEmitter = require("events");

var url = "http://mylogger.io/log";

class Logger extends EventEmitter {
  log(message) {
    // Send an HTTP request
    console.log(message);

    // Raise an event
    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}

module.exports = Logger;

app4.js;

const EventEmitter = require("events");

// emit - Making a noise, produce - signalling

const Logger = require("./logger2");
const logger = new Logger();

// Register a listener
logger.on("messageLogged", (arg) /* e, eventArg */ => {
  console.log("Listener called", arg);
});

logger.log("message");

// message
// Listener called { id: 1, url: 'http://' }
```

```js
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }

  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.listen(2000);

console.log("Listening on port 2000...");

// http://localhost:2000/api/courses

// Hello World

// http://localhost:2000/api/courses

// [1,2,3]
```

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Cameron Howze](https://camkol.github.io/)
- Frontend Mentor - [@camkol](https://www.frontendmentor.io/profile/camkol)
- GitHub- [@camkol](https://github.com/camkol)
- LinkedIn - [@cameron-howze](https://www.linkedin.com/in/cameron-howze-28a646109/)
- E-Mail - [cameronhowze4@outlook.com](mailto:cameronhowze4@outlook.com)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
