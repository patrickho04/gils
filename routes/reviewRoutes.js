const express = require('express');
const router = express.Router();
const Review = require('../models/review');

router.get('/', async (req, res) => {
    const reviews = await Review.find({});
    res.render('review.ejs', { reviews });
})

router.get('/new', (req, res) => {
    res.render('new-review.ejs');
})

router.post('/', async (req,res) => {
    const newReview = new Review(req.body);
    await newReview.save();
    res.redirect('/review');
})

module.exports = router;