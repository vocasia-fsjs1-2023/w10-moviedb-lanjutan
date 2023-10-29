const reviewController = require("../../controllers/review-controller");
const authentication = require("../../middlewares/authentication");
const userReview = require("../../middlewares/userReview");
const routes = require("express").Router();

routes.post("", authentication, reviewController.addReview);
routes.get("", reviewController.getReview);
routes.put("/:id", authentication, userReview, reviewController.updateReview);
routes.delete(
  "/:id",
  authentication,
  userReview,
  reviewController.deleteReview
);

module.exports = routes;
