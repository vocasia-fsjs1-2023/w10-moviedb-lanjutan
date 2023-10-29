const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const secret = "rahasiabanget";
const bcrypt = require('bcrypt');
const { Movie, Review, User } = require("./models");
const movieController = require('./controllers/movieController');
const reviewController = require('./controllers/reviewController');
const userController = require('./controllers/userController');
const routes = require("./routes/index");


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use(routes);

// Custom route
app.get("/", (req, res) => {
    res.send("Hello Word");
});

// Port
const port = 3000;

app.listen(port, () => {
    console.log(`Aplikasi contoh sedang mendengarkan port ${port}`);
});