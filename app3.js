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
