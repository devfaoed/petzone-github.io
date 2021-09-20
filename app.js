const express = require("express");
const app = express();


const multer = require("multer") 
const ejs = require("ejs");
const methodOverride = require("method-override");



// models for the article
const Blog = require("./model/blog");

// router for the article
const blogRouter = require("./router/blog");


const bodyParser = require("body-parser");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/petzone", {useNewUrlParser: true, useUnifiedTopology: true});

app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));


app.set("view engine", "ejs");


app.use(blogRouter);


 // error page
 app.get("*", function(req, res){
    res.render("error");
})

app.listen(3030, function(){
    console.log("Blog server started successfully on port 3030");
})