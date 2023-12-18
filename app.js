const express = require("express");
const bodyParser = require("body-parser"); 
const routers = require("./routers/index");
const errorHandling = require("./middlewares/errorHandling");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.use(routers);
app.use(errorHandling);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}...`);
});