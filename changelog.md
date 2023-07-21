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
