const router = require("express").Router();
const moviesRouter = require("./Movies/index");
const reviewRouter = require("./Reviews/index");
const userRouter = require("./Users/index");

router.use('/movie', moviesRouter);
router.use('/review', reviewRouter);
router.use(userRouter);

module.exports = router;