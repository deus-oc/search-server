const mongoose = require('mongoose');

const searchSchema = new mongoose.Schema({
    Name : {
        type: String,
    },
    website: {
        type: String,
    },
    Location: {
        type: String,
    },
    Zipcode: {
        type: Number,
    },
    Description: {
        type: String,
    },
    Owner: {
        type: String,
    },
    Established: {
        type: Number,
    }
});

module.exports = mongoose.model('Companies', searchSchema);