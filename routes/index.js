const routes = require("express").Router();
const userRoutes = require("./users/index");
const movieRoutes = require("./movie/index");
const reviewRoutes = require("./review/index");

routes.use("", userRoutes);
routes.use("/movie", movieRoutes);
routes.use("/review", reviewRoutes);

module.exports = routes;
