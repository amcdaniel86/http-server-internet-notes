const http = require('http');

const server =
  http.createServer((request, response) => {
    console.log(`Someone has requested ${request.url}`);

    if (request.url === '/') {
      response.write('Hello, world!');
      response.end();
    } else if (request.url === '/about') {
      response.write('About Me: My name is Izzy');
      response.end();
    } else {
      response.statusCode = 404;
      response.write('404 page');
      response.end();
    }
});
// callback function receives parameters request/ response from the http package. both are OBJECTS that that represent the request received from the client and response to send back to the server.

server.listen(3000);

// this way of doing things is impractical because posting a webpage to the internet in this fashion is inefficent and would take tons and tons of if else statements which is just not practical whatsoever.