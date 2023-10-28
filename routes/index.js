const router = require("express").Router();
const movieRouter = require("./movie/movieRoutes");
const reviewRouter = require("./review/reviewRoutes");
const userRouter = require('./user/userRoutes');
const jwt = require('jsonwebtoken');
const secret = 'rahasiabanget';

router.use('/movie', movieRouter);
router.use('/review', reviewRouter);
router.use('', userRouter);

module.exports = router;
