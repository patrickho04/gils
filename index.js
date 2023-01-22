require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const reviewRoutes = require('./routes/reviewRoutes');
const serviceRoutes = require('./routes/serviceRoutes')
const WebError = require('./webError');
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/reviewsDB';

mongoose.connect(dbUrl);
mongoose.set('strictQuery', true);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
})

app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use('/review', reviewRoutes);
app.use('/services', serviceRoutes);
app.get('/home', (req, res) => {
    res.render('home.ejs');
})

app.use((req, res) => {
    throw new WebError(404, "Couldn't find the page you were looking for.");
})

app.use((err,req,res,next) => {
    const { status = 500 } = err;
    if (!err.message) err.message = "Oh no, Something Went Wrong!";
    res.status(status).render('error.ejs', { err });
});

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})