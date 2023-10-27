const express = require("express");
const router = express.Router();

// Impor rute-rute lainnya
const movieRoutes = require("./movieRoutes");
const reviewRoutes = require("./reviewRoutes");
const userRoutes = require("./userRoutes");

// Gabungkan rute-rute tersebut
router.use("/movie", movieRoutes);
router.use("/review", reviewRoutes);
router.use("", userRoutes);

module.exports = router;
