const express = require("express");
const bodyParser = require("body-parser");
const routers = require("./routes/index");
const userRoutes = require("./routes/users");
const { movie } = require("./models");
const movieController = require("./controllers/movieController");
const { review } = require("./models");
const reviewController = require("./controllers/reviewController");
const { user } = require("./models");
const userController = require("./controllers/userController");
const isAdmin = require("./middlewares/isAdmin");
const authentication= require("./middlewares/jwtMiddle");
const authorization= require("./middlewares/index");
const app = express();
const port = 3000;

app.use(bodyParser.text());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is ready!");
});

app.use(routers);
app.use('/', userRoutes); 

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}...`);
});
