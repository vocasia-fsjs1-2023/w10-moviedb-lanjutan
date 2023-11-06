const router = require("express").Router()
const movieRouter = require("./movie/index");
const reviewRouter = require("./review/index");
const userRouter = require("./user/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.use("/movie", movieRouter);
router.use("/review", reviewRouter);
router.use("", userRouter);

module.exports = router;