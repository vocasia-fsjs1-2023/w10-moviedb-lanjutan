const router = require('express').Router();
const movieRouter = require('./movie/index');
const reviewRouter = require('./review/index');
const userRouter = require('./user/index');

router.use('/movie', movieRouter); 
router.use('/review', reviewRouter);
router.use('', userRouter);

module.exports = router;
