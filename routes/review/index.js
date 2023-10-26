const ReviewController = require('../../controllers/reviewController');
const authentication = require('../../middleware/authentication');
const isUserOwnReview = require('../../middleware/authorization');
const errorHandling = require('../../middleware/errorHandling');

const router = require('express').Router();

router.get('/', ReviewController.getReview);
router.post('/', authentication, ReviewController.addReview);
router.delete('/:id', authentication, isUserOwnReview, ReviewController.deleteReview);
router.put('/:id',authentication, isUserOwnReview, ReviewController.putReview);

router.use(errorHandling);

module.exports = router;