const router = require("express").Router();
const moviesRouter = require("./Movies/index");
const reviewRouter = require("./Reviews/index");
const userRouter = require("./Users/index");

router.use('/movies', moviesRouter);
router.use('/reviews', reviewRouter);
router.use(userRouter);

module.exports = router;