const ReviewController = require("../../controller/reviewController");
const authentication = require("../../middlewares/authentication");
const isUserOwnReview = require("../../middlewares/authorization");

const router = require("express").Router();

router.post('/', authentication, ReviewController.addReview);
router.get('/', ReviewController.getReview);
router.get('/:id', ReviewController.getReviewId);
router.put("/:id", authentication, isUserOwnReview, ReviewController.updateReview);
router.delete("/:id", authentication, isUserOwnReview, ReviewController.deleteReview);

module.exports = router;