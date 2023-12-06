const moviesController = require("../../controllers/moviesController");
const authMiddleware = require("../../middleware/authMiddleware");
const isAdmin = require("../../middleware/isAdmin");

const router = require("express").Router();

router.post('/', authMiddleware, isAdmin, moviesController.addMovie);
router.get('/', moviesController.getMovie);
router.get('/:id', moviesController.getMovieId);
router.put("/:id", authMiddleware, isAdmin, moviesController.updateMovie);
router.delete("/:id", authMiddleware, isAdmin, moviesController.deleteMovie);

module.exports = router;