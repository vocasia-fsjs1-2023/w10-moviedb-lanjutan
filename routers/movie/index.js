const MovieController = require("../../controller/movieController");
const router = require("express").Router()

  router.get("/get", MovieController.Movie1async);
  router.post("/", MovieController.Movie2);
  router.get("/:id", MovieController.Movie3async);
  router.put("/:id", MovieController.Movie4async);
  router.patch("/:id", MovieController.Movie5async);
  router.delete("/:id", MovieController.Movie6async);

module.exports = router;