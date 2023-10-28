const reviewController = require('../../controllers/reviewController');
const authentication = require("../../middlewares/authentication");
const router = require('express').Router();
const errorHandling = require('../../middlewares/errorHandling');
const authorization = require('../../middlewares/authorization');


router.get('/', authentication, reviewController.getAllReviews);
router.post('/', authentication, authorization, reviewController.Postreview);
router.put('/:id', authentication, authorization, reviewController.Putreview);
router.delete('/:id', authentication, authorization, reviewController.Deletereview);

router.use(errorHandling);

module.exports = router;




