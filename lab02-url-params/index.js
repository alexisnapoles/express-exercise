// 1. Set up express
const express = require('express');
const hbs = require('hbs');
let app = express();

// 
app.set('view engine', 'hbs');

app.get('/', function(req,res){
    // by default hbs will check on the views directory
    // first argment of render is the hbs
    // file
    let luckyNumber = Math.floor(Math.random()*100+1)
    res.render('index', {
        "number": luckyNumber
    });
})
// 2. Define routes
app.get('/hello/:name', function(req,res){
    let name = req.params.name;
    res.send("Hello " + name);   
})

// 3. Start Server
app.listen(3000, function(){
    console.log("Server started");
})