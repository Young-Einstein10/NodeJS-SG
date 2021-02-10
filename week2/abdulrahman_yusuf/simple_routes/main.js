const port = 3000; // Port Number
const http = require("http");
const httpStatus = require("http-status-codes");


// Route Maps
const routeResponseMap = {
  "/info": "<h1>Info Page</h1>",
  "/contact": "<h1>Contact Us</h1>",
  "/about": "<h1>Learn More About Us.</h1>",
  "/hello": "<h1>Say hello by emailing us here</h1>",
  "/error": "<h1>Sorry the page you are looking for is not here.</h1>"
};



// Create Server
const app = http.createServer((request, response) => {
  console.log("Received an Incoming Request");

  response.writeHead(httpStatus.OK, {
    "Content-Type": "text/html"
  })

  let responseMsg = "<h1>Hello World!</h1>"
  
  for (const route in routeResponseMap) {
    if (request.url === route) {
      responseMsg = routeResponseMap[route]
    }
  }

  response.write(responseMsg)
  response.end()

  console.log(`Sent a response : ${responseMsg}`);
})

app.listen(port)
console.log(`The Server has started and is listening on port number:${port}`);