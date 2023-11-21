const movieController = require("../../controllers/movieController");
const authentication = require("../../middlewares/authentication");
const isAdmin = require("../../middlewares/isAdmin");
const router = require("express").Router();

router.post("/", authentication, isAdmin, movieController.postMovie);
router.get("/", movieController.getAllMovie);
router.get("/:id", movieController.getMovieId);
router.put("/:id", authentication, isAdmin, movieController.putMovieId);
router.delete("/:id", authentication, isAdmin, movieController.deleteMovieId);

module.exports = router;