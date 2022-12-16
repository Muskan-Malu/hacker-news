const populateData = require("../models/story");

const StoryPopulate = async (req, res) => {
    try {
        if(req.body !== {}) {
            console.log(req.body, "req");
            // const populate = new populateData(req.body);
            // const val = await populate.save();
            // res.json(val);
        }
    } catch(error) {
        console.log(error);
    }
} 

const CommentPopulate = async (req, res) => {
    console.log(req.body);
}

module.exports= {
    StoryPopulate,

}