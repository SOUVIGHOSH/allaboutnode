const path = require("path");
// express is a function , it is also a request handler
// we can create a httpserver and pass this
const express = require("express");
// body parser is required to convert req body chunk in consumable format
const bodyParser = require("body-parser");
//import routers in any order
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

const app = express();

// we can use use method in app to use a middleware
// bodyParser.urlencoded() automaticlly parse and update req body and then click next
// next is importtant for request to be passed to next middleware, if not called then request dies
// in general when next is not called we send response
app.use(bodyParser.urlencoded());

// express static enables a folder for public, that is it can be directly accessed. no middleware or route is required
app.use(express.static(path.join(__dirname, "public")));

// the generic middles ware function has three param req,res,and next,
// the first arg "/" is optional, is actually filtering path
// app.use("/",cb) means all route starting with "/" should get to this middleware
// if we use app.get then the path comparison is exact match not statrts with , this is importnt to remember
app.use("/", (req, res, next) => {
  console.log("request received");
  // pass the request to next middleware
  next();
});

//middleware order does matter
app.use(adminRouter);
app.use(shopRouter);

// if any request is still not consumed lets send a 404 page
app.use("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3030);
