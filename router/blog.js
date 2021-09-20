const mongoose = require("mongoose");
const express = require("express");
const routes = express.Router();
const Blog = require("../model/blog");



// index routes
routes.get("/",  function(req, res){
    res.redirect("/blog");
})

// routes to display all article
routes.get("/blog", function(req, res){
    Blog.find({}, function(err, foundblog){
        if(err){
            console.log(err);
        }
        else{
            res.render("home", {foundblog:foundblog});
        }
    })
   
})

// routes to create new article
routes.get("/blog/new", function(req, res){
    res.render("new");
})

// routes to create new article form
routes.post("/blog/new", function(req, res){
    Blog.create(req.body.pet, function(err, cretaeBlog){
        if(err){
            console.log(err);
        }
        else{            
            res.redirect("/blog")
        }
    })
})

// routes to show full post of an article
routes.get("/blog/:id/show",  function(req, res){
    Blog.findById(req.params.id, function(err, foundblog){
        if(err){
            console.log(err);
        }
        else{
            res.render("show", {foundblog:foundblog});
        }
    })
})

// routes to edit article using id
routes.get("/blog/:id/edit",  function(req, res){
    Blog.findById(req.params.id, function(err, foundblog){
        if(err){
            console.log(err);
        }
        else{
            res.render("edit", {foundblog:foundblog});
        }
    })
})

// routes to update article using id
routes.put("/blog/:id", function(req, res){
    Blog.findByIdAndUpdate(req.params.id, req.body.pet, function(err){
        if(err){
            console.log(err);
        }
        else{
            res.redirect("/blog/" + req.params.id + "/show");
        }
    })
})
// routes to delete article using id
 routes.delete("/blog/:id",  function(req, res){
    Blog.findByIdAndRemove(req.params.id, function(err){
        if(err){
            console.log(err);
        }
        else{
            res.redirect("/");
        }
    })
})


module.exports = routes;