const MovieController = require("../../controller/movieController")
const authentication = require("../../middlewares/authentication");
const isAdmin = require("../../middlewares/isAdmin");
const router = require("express").Router();

router.post("/", authentication, isAdmin, MovieController.createMovie);
router.get("/", MovieController.movieList);
router.get("/:id", authentication, isAdmin, MovieController.movieById);
router.put("/:id", authentication, isAdmin, MovieController.movieUpdateData);
router.patch("/:id", MovieController.movieUpdate);
router.delete("/:id", authentication, isAdmin, MovieController.deleteMovie);


module.exports = router;
