const userController = require("../../controllers/usercontroller");
const routes = require("express").Router();

routes.post("/register", userController.addUser);
routes.post("/login", userController.login);

module.exports = routes;