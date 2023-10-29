const userController = require("../../controllers/user-reg-login");
const routes = require("express").Router();

routes.post("/register", userController.register);
routes.post("/login", userController.login);

module.exports = routes;
