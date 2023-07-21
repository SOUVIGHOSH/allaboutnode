const requestListener = require("./noderequest_listener");
// http is one of the core module in node js
const http = require("http");
// http module exposes createserver to create a http server
// createserver takes a eventlistener and register it to event loop
const server = http.createServer(requestListener);
// to start the server we can specify port
server.listen(3030);
