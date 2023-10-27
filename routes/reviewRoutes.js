const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");
const authentication = require("../middlewares/authentication"); // Middleware Authentication
const isUserOwnReview = require("../middlewares/authorization"); // Middleware Authorization

// Routes untuk ulasan
router.get("", reviewController.getAllReviews);
router.post("", authentication, reviewController.createReview);
router.put(
  "/:id",
  authentication,
  isUserOwnReview,
  reviewController.updateReview
);
router.delete(
  "/:id",
  authentication,
  isUserOwnReview,
  reviewController.deleteReview
);

module.exports = router;
