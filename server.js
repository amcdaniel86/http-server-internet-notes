const http = require('http');

const server =
  http.createServer((request, response) => {
    console.log(`Someone has requested ${request.url}`);

    if (request.url === '/') {
      response.write('Hello, world!');
      response.end();
    } else {
      response.statusCode = 404;
      response.write('404 page');
      response.end();
    }
});
// callback function receives parameters request/ response from the http package. both are OBJECTS that that represent the request received from the client and response to send back to the server.

server.listen(3000);