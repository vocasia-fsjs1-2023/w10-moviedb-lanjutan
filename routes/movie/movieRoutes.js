const movieController = require('../../controllers/movieController');
const authentication = require("../../middlewares/authentication");
const isAdmin = require("../../middlewares/isAdmin");
const errorHandling = require('../../middlewares/errorHandling');
const router = require("express").Router();

router.get('/', movieController.Getmovie);
router.get('/:id', movieController.GetmovieId);
router.post('/', authentication, isAdmin, movieController.Postmovie);
router.put('/:id', authentication, isAdmin, movieController.Putmovie);
router.delete('/:id', authentication, isAdmin, movieController.Deletemovie);

router.use(errorHandling);

module.exports = router;