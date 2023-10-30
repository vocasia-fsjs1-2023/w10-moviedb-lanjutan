const MovieController = require('../../controllers/movieController');
const authentication = require("../../middleware/authentication");
const isAdmin = require("../../middleware/isAdmin");
const errorHandling = require('../../middleware/errorHandling');

const router = require('express').Router();

router.get('/', authentication, isAdmin, MovieController.getMovie);
router.get('/:id', MovieController.getMovieId);
router.post('/', MovieController.addMovie);
router.put('/:id', authentication, isAdmin,MovieController.putMovie);
router.delete('/:id', authentication, isAdmin,MovieController.deleteMovie);

router.use(errorHandling);

module.exports = router; 