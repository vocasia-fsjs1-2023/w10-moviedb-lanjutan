const express = require("express");
const app = express();
const port = 3000;
const { Movie, User, Review } = require("./models");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = "rahasiasekali";
const routes = require("./routes/index");
const authentication = require("./middlewares/authentication");
const userReview = require("./middlewares/userReview");
const isAdmin = require("./middlewares/isAdmin");
const errorHandling = require("./middlewares/errorHandling");
const { where } = require("sequelize");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);
app.use(errorHandling);

app.listen(port, () => {
  console.log(`Server connected ${port}`);
});
