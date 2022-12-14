const { default: axios } = require("axios");

const getStory = async (storyId) => {
    const result = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`)
    .then(({data}) => data);

    return result
}

module.exports = getStory