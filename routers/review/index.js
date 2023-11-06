const ReviewController = require("../../controller/reviewController");
const authentication = require("../../middlewares/authentication");
const isUserOwnReview = require("../../middlewares/authorization");
const errorHandling = require("../../middlewares/errorHandling");

const router = require("express").Router();

router.post("/", authentication, ReviewController.createReview);
router.get("/", ReviewController.reviewList);
router.put("/:id", authentication, isUserOwnReview, ReviewController.reviewUpdateData);
router.delete("/:id", authentication, isUserOwnReview, ReviewController.deleteReview);

router.use(errorHandling);

module.exports = router;