const MovieController = require("../../controller/movieController");
const authentication = require("../../middlewares/authentication");
const isAdmin = require("../../middlewares/isAdmin");

const router = require("express").Router();

router.post('/', authentication, isAdmin, MovieController.addMovie);
// router.get('/', MovieController.getMovie);
router.get('/', authentication, isAdmin, MovieController.getMovie);
router.get('/:id', MovieController.getMovieId);
router.put("/:id", authentication, isAdmin, MovieController.updateMovie);
router.delete("/:id", authentication, isAdmin, MovieController.deleteMovie);

module.exports = router;