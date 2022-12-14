const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
    by: String,
    descendants: Number,
    id: Number,
    kids: Array,
    score: Number,
    time: Number,
    title: String,
    type: String,
    url: String,
});

const PopulateData = mongoose.model("story", storySchema);
module.exports = PopulateData;
