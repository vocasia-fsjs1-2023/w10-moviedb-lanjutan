const express = require("express");
const bodyParser = require("body-parser");
const { Movie, Review, User } = require("./models");
const errorHandling = require("./middlewares/errorHandling");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserController = require("./controller/userController");
const secret = "rahasia";
const routers = require("./routers/index");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = 3000;


app.use(routers);
app.use(errorHandling);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });  