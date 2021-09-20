const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    date: {
        type: Date,
        default: Date.now
    }
})

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;