let dirName = process.argv[2];
let extention = process.argv[3];

let fs = require('fs');
fs.readdir(dirName, (err, list) => {
  list.filter((val, index, list) => {
    return val.endsWith("." + extention);
    }).forEach((val, index, list) => {
    console.log(val);
  })
});
