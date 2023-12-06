const ReviewController = require("../../controller/ReviewController");
const authMiddleware = require("../../middleware/authMiddleware");


const router = require("express").Router();

router.post('/', authMiddleware, ReviewController.addReview);
router.get('/', ReviewController.getReview);
router.get('/:id', ReviewController.getReviewId);
router.put("/:id", authMiddleware, isUserOwnReview, ReviewController.updateReview);
router.delete("/:id", authMiddleware, isUserOwnReview, ReviewController.deleteReview);

module.exports = router;