let fs = require('fs');
let buf = fs.readFileSync('./test.js');
console.log(buf.toString().split('\n').length);
