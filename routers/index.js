const router = require("express").Router()
const movieRouter = require("./movie/index");
const reviewRouter = require("./review/index");
const userRouter = require("./user/index");


router.use("/Movie", movieRouter);
router.use("/Review", reviewRouter);
router.use("/User", userRouter);




module.exports = router;

