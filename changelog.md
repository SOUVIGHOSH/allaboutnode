# step 1

## what is node js?

Node js is a javascript runtime environment, it is built on v8 the javascript engine built by Google for browser that compiles javascript code to machine code.
Node js is built on same engine, some browser specific stuffs are excluded and some new features are included.

## what are core modules of node.js?

a. http b. https c. path d.os e.fs

## what is Event loop how this works in node js

1. Event loop is an infinite loop that node starts automatically, It has a counter which gets increases whenever a callback gets registered, event loop executes the callback, so it does not run the long running code, in event based architecture we have a function like func(longrunning, callback) the long running function like fiel read write, network operation are handled by worker, once long running tasks are finished, event loop executes the callback.
2. eventloop runs on the main thread so it must be non blocking.
   Event loop first executes the callback of expired timer(settimeout, setinterval) then it looks for deferred callback, executes it for some time, if all callback does not get cleared it defer it further and move to poll phase where it does some io event after that it can go to timer or deffered callback.After this it goes to setImmidiate callback and then close events.

## what is express

Express is a framework, framework is basically a set of helper function which comes with some rules that soecifies how to use it, it anstracts multiple rae handling of node, example for parsing request we do not need to do chunking and buffering anymore.

## What is middleware

Middleware is a function or request handler that generally has three arguments request, response & next, We can register a middleware using app.use where app is express() return, app here itself a valid request handler, we can do app.get app.post, we register a function as middleware using app.use , a middleware works on the incoming request and then either send a response using response.send(content) / response.sendFile or it calls next to pass the incoming request to next middleware. if we do neither than request dies.

## what are template engine

Template engines are ways to render the webpage dynamically, some populate engines are pug, ejs & handlebar, for pug and ejs express has in build support for handlebar thoug we need some additional configuration.
for ejs syntax is like <%=%> for pug ${}, handlebar uses {{}}

## What is MVC pattern

Model view controller pattenr, Model is where we do stroing and retrieval of object , view is ui and controller is the glue between model and view.

## How to use dynamic routing

We can register a route with :id and then the id can be fetched from req.params.id, we can also fetch query params from req.query.[key]

## Difference between sql & Nosql

In sql we have fixed schema, in Nosql we don't need a fixed schema, in sql we have tables, in nosql they are calleds connects, in sql we have records, nosql has documents, docments are like javascript object

## what is difference between db.createPool and db.createConnection

create pool creates a pool of db connecttion, we do not need to open a new connect for each db operation, db connection we need to handle this, at the end we do db.end() to close all connection in pool
