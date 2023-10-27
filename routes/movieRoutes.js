const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");
const authentication = require("../middlewares/authentication");
const isAdmin = require("../middlewares/isAdmin");

// Endpoint untuk mendapatkan semua film
router.get("/", movieController.getAllMovies);

// Endpoint untuk mendapatkan film berdasarkan ID
router.get("/:id", movieController.getMovieById);

// Endpoint untuk membuat film baru
router.post("", authentication, isAdmin, movieController.createMovie);

// Endpoint untuk memperbarui film berdasarkan ID
router.put("/:id", authentication, isAdmin, movieController.updateMovie);

// Endpoint untuk menghapus film berdasarkan ID
router.delete("/:id", authentication, isAdmin, movieController.deleteMovie);

module.exports = router;
