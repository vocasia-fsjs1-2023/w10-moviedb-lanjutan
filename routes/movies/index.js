const router= require("express").Router();
const movieController= require("../../controllers/movieController");
const authentication= require("../../middlewares/jwtMiddle");
const isAdmin= require("../../middlewares/isAdmin");

router.post("", authentication, isAdmin, movieController.addMovie);
router.get("", movieController.getMovie);
router.get("/:id", movieController.getId_Movie);
router.put("/:id", authentication, isAdmin, movieController.updateMovie);
router.delete("/:id", authentication, isAdmin, movieController.deleteMovie);
module.exports=router;