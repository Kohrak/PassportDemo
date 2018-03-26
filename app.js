var express = require("express"),
    mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/auth_demo_app");
var app = express();
app.set("view engine", "ejs");
app.get("/", function(req, res){
  res.render("home");
})

app.get("/secret", function(req,res){
  res.render("secret");
})

//Cloud9

// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log("Yelp!");
// })


//Local

app.listen(3000, function(){
    console.log("Server Started");
})
