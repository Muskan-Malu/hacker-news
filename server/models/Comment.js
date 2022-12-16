const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    by: String,
    id: Number,
    kids: Array,
    parent: Number,
    text: String,
    time: Number
});

const Comment = mongoose.model("comment", commentSchema);
module.exports = Comment;