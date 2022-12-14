const path = require('path');

require('dotenv').config({
    path: path.join(__dirname, '.env')
});


const mongoose = require('mongoose');

const connection = mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.DB_PASSWORD}@cluster0.i0xbv75.mongodb.net/hackerNews`, {
    useNewUrlParser:false, 
    useUnifiedTopology: true
}, (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log("successfully connected to DB");
    }
});

module.exports = connection;
