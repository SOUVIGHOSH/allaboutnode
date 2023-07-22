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

//app.set enables us to set some key value pair in global level and it will be shared accross the application
//it also used to set template engine, express has inbuilt support for pug and ejs, for handlebar we need some additonal config
app.set("view engine", "ejs");
// the default views folder is views , so in this case it is redundant , but if we are using views folder in some different directory this will be required
app.set("views", "views");

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
  // for sending static html file we use sendFile
  //res.sendFile(path.join(__dirname, "views", "404.html"));

  // when using templating engine express supports render function
  res.status(404).render("404", { pageTitle: "Invalid Page" });
});

app.listen(3030);
