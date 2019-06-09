let dirName = process.argv[2];
let extension = process.argv[3];

const mymodule = require('./mymodule');
mymodule(dirName, extension, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data.join('\n'));

});
