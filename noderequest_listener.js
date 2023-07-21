// fs is also core module used for file io operation
const fs = require("fs");

const requestListener = (req, res) => {
  // we can access request attributes of incoming request
  // some important attributes are url, methid, headers
  //console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write("<html><head><title>Nodejs Server</title><head>");
    res.write(
      "<body><form method='POST' action='/message'><input type='text' name='message'/></form></body></html>"
    );
    return res.end();
  }
  if (req.url === "/message" && req.method === "POST") {
    let body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    return req.on("end", () => {
      let parsedBody = Buffer.concat(body).toString();
      //writeFileSync is blocking code
      //fs.writeFileSync("message.txt", parsedBody);
      fs.writeFile("message.txt", parsedBody, () => {
        res.setHeader("Content-Type", "text/html");
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
};

//node js exposes a global object module which has exports property
// we can export any object , or function or anything via this
module.exports = requestListener;

// export can be done various ways
// module.exports = {
//     handlerFn: requestListener,
//     messageText: "Request Handled",
// }

// exports.handlerFn = requestListener;
// exports.messageText= "Request Handled";
