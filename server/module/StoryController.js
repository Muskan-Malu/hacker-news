const PopulateData = require('../models/story');

const StaticStoriesData = async (req, res) => {
    console.log("Coming into Static Stories Controller");
    const data = await PopulateData.find();
    res.send(data);
}

const UpdateVote = async (req, res) => {
    console.log("UpdateVote()");
    const { id, score } = req.body;
    try {
        await PopulateData.updateOne({id: id}, {
            $set: {
                score: score + 1
            }
        })
    } catch(error) {
        console.log(error);
    }
    const updatedData = await PopulateData.find({id: id})
    .then(data => res.send(data))
}

module.exports = {
    StaticStoriesData,
    UpdateVote
}