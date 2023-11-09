const routes = require("express").Router();
const movieRoutes = require("./movies/index");
const reviewRoutes = require("./reviews/index");
const userRoutes = require("./users/index");

routes.use("/movie", movieRoutes);
routes.use("/review", reviewRoutes);
routes.use("", userRoutes);

module.exports = routes;