module.exports = (dirName, extension, callback) => {
  require('fs').readdir(dirName, (err, list) => {
    if (err) {
      return callback(err)
    }

    callback(null, list.filter((val) => {
      return val.endsWith("." + extension);
    }))
  });
};
