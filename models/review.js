const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        minLength: 2
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minLength: 2
    },
    comment: {
        type: String,
        required: true,
        trim: true,
    },
    rating: {
        type: Number,
        required: true
    },
});

const Reviews = mongoose.model('Reviews', ReviewSchema);

module.exports = Reviews;