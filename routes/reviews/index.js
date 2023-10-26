const router= require("express").Router();
const reviewController= require("../../controllers/reviewController");
const authentication= require("../../middlewares/jwtMiddle");
const authorization= require("../../middlewares/index");

router.post("", authentication, reviewController.addReview);
router.get("", reviewController.getReview);
router.put("/:id",authentication,authorization,reviewController.updateReview);
router.delete("/:id",authentication,authorization,reviewController.deleteReview);

module.exports=router;