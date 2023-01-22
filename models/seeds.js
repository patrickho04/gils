const mongoose = require('mongoose');
const { db } = require('./review');
const Review = require('./review');

mongoose.connect('mongodb://127.0.0.1:27017/reviewsDB')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!");
    })
    .catch(err => {
        console.log("MONGO ERROR!");
        console.log(err);
    })

const seedCustomers = [
    {
        firstName: "Joe",
        lastName: "Beans",
        comment: "I love beans",
        rating: 2
    },
    {
        firstName: "Gilgamesh",
        lastName: "Destroyer of Worlds",
        comment: "Earth shall be mine",
        rating: 5
    },
    {
        firstName: "Jesus",
        lastName: "Christ",
        comment: "wow cool shop",
        rating: 5
    }
]

// Review.insertMany(seedCustomers)
//     .then(res => {
//         console.log(res)
//     })
//     .catch (e => {
//         console.log(e)
//     })