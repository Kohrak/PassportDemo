var express = require("express"),
    mongoose = require("mongoose");

var app = express();
app.set("view engine", "ejs");
app.get("/", function(req, res){
  res.render("home");
})

//Cloud9

// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log("Yelp!");
// })


//Local

app.listen(3000, function(){
    console.log("Server Started");
})
