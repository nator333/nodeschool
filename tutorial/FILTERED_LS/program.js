let fileName = process.argv[2];

let fs = require('fs');
fs.readFile(fileName, (err, data) => {
  console.log(data.toString().split('\n').length - 1);
});
