const port = 3000; // Port Number
const http = require("http");
const httpStatus = require("http-status-codes");
const fs = require("fs")

// Route Maps
const routeMap = {
  "/": "views/index.html",
};


const getViewUrl = url => `views${url}.html`;


// Create Server
const app = http.createServer((request, response) => {
  let viewUrl = getViewUrl(request.url)
  fs.readFile(viewUrl, (err, data) => {
    if (err) {
      response.writeHead(httpStatus.NOT_FOUND)
      response.write("<h1>FILE NOT FOUND!</h1>")
    } else {
      response.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
      })
      response.write(data)
    }
    response.end()
  })
})

app.listen(port)
console.log(`The Server has started and is listening on port number:${port}`);