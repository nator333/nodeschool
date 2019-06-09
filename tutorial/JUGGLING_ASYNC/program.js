const urls = process.argv.slice(2, 5);
const http = require('http');

let collectedData = ["", "", ""];

http.get(urls[0], (response) => {
  let buf = "";
  response.setEncoding("utf8").on("data", (data) => {
    buf += data;
  }).on("end", () => {
    collectedData[0] = buf;
    output(collectedData);
  })
});

http.get(urls[1], (response) => {
  let buf = "";
  response.setEncoding("utf8").on("data", (data) => {
    buf += data;
  }).on("end", () => {
    collectedData[1] = buf;
    output(collectedData);
  })
});

http.get(urls[2], (response) => {
  let buf = "";
  response.setEncoding("utf8").on("data", (data) => {
    buf += data;
  }).on("end", () => {
    collectedData[2] = buf;
    output(collectedData);
  })
});

function output(data) {
  let nonNull = true;
  for (let i = 0; i < data.length; i++) {
    if (collectedData[i] === '') {
      nonNull = false;
    }
  }

  if (nonNull) {
    console.log(data.join("\n"));
  }
}
