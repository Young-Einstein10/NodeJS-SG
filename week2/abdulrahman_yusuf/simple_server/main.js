const port = 3000; // Port Number
const http = require("http");
const httpStatus = require("http-status-codes");

// Create Server
const app = http.createServer((request, response) => {
  console.log("Received an Incoming Request");

  response.writeHead(httpStatus.OK, {
    "Content-Type": "text/html"
  })

  let responseMsg = "<h1>Hello World!</h1>"

  response.write(responseMsg)
  response.end()

  console.log(`Sent a response : ${responseMsg}`);
})

app.listen(port)
console.log(`The Server has started and is listening on port number:${port}`);