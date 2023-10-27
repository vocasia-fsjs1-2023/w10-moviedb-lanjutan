const ReviewController = require("../../controllers/reviewController");
const authentication = require("../../middlewares/authentication");
const isUserOwnReview = require("../../middlewares/authorization");
const router = require("express").Router();

router.post("/", authentication, ReviewController.addReview);
router.get("/", ReviewController.getReview);

//User dengan token valid dan yang memiliki review sendirinya yang dapat mengakses
router.put("/:id", authentication, isUserOwnReview, ReviewController.updateReview);
router.delete("/:id", authentication, isUserOwnReview, ReviewController.deleteReview);

module.exports = router;
