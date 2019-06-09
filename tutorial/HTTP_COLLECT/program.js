const url = process.argv[2];
const http = require('http');

let collectedData = "";

http.get(url, (response) => {
  response.setEncoding("utf8").on("data", (data) => {
    collectedData += data;
  }).on("end", (data) => {
    console.log(collectedData.length);
    console.log(collectedData);
  })
});
