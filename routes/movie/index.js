const MovieController = require("../../controllers/movieController");
const authentication = require("../../middlewares/authentication");
const isAdmin = require("../../middlewares/isAdmin");
const router = require("express").Router();

router.get("/", MovieController.getMovie);
router.get("/:id", MovieController.getMovieByID);

//User dengan token yg valid dan role admin yang dapat
router.post("/", authentication, isAdmin, MovieController.addMovie);
router.put("/:id", authentication, isAdmin, MovieController.updateMovieByID);
router.delete("/:id", authentication, isAdmin, MovieController.deleteMovie);

module.exports = router;
