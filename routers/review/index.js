const ReviewController = require("../../controller/reviewController");
const router = require("express").Router()

    router.post("/", ReviewController.Review1);
    router.get("/get", ReviewController.Review2);
    router.put("/:id", ReviewController.Review3);
    router.delete("/:id", ReviewController.Review4);

module.exports = router;