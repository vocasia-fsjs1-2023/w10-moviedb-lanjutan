const router= require("express").Router();
const movieRouter= require("./movies/index");
const reviewRouter= require("./reviews/index");
const userRouter= require("./users/index");

router.use("/movie", movieRouter);
router.use("/review", reviewRouter);
router.use("", userRouter);
module.exports=router;