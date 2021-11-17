// import in the express package; require is browser-based do not use on local project; require is a web-based way of the <script src>
// the express variable will have al the objeccts and functionalities provided by the express package
//  the argumnt to require must match the package name
// the name of the variable is arbitraty or you can change whatever variable name
const express = require("express");

// create an instance of express application
// the return of the express function call is an instance of an express application
let app = express();

// a rout associates an URL / path on the server to a function,
// such tat when a client request that URL on the server,
// th associated fuction will be called
app.get('/about', function(req, res){
    // req = request. thsi will be the first argument to the route function
    // res - response. second argument to therout
    // the flow must always follow, req, res

    // send back the string Hello World to client
    res.send("Hello World")
})

// cannot be placed in the same function app.get
app.get('/', function(req,res) {
    res.send("Goodbye world")
})

app.get('/random', function(req,res) {
    let rand = Math.floor(Math.random() * 100 + 1);
    res.send("<h2>Your lucky number is " + rand+ "</h2>")
})
// start server
// 3000 is the port number (address on y our computer)
app.listen(3000, function(){
    console.log("Server has started");
})
