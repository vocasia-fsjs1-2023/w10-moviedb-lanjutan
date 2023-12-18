const { Movie } = require("../models");

class Controller {
static async Movie1async (req, res) {
    let response;
    try {
      const Movies = await Movie.findAll();
      response = Movies;
    } catch (error) {
      response = "Error";
    }
      res.status(200).json(response);
  };

  static Movie2(req, res) {
    const body = req.body;
  
    const {title, description} = body;
  
    Movie.create({
      title,
      description,
    }).then((movie) => {
      res.status(201).json(movie);
    }).catch((error) => {
      res.status(500).json(error);
    });
  };

  static async Movie3async (req, res) {
    const id = Number(req.params.id);
  
    try {
      const movie = await Movie.findByPk(id);
  
      if (!movie) {
        return res.status(404).json({ error: "Movie not found" });
      }
  
      res.status(200).json(movie);
    } catch (error) {
      console.error("Error fetching movie:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  static async Movie4async (req, res) {
    const id = Number(req.params.id);
    const { title, description } = req.body;
  
    try {
      const movie = await Movie.findByPk(id);
  
      if (!movie) {
        return res.status(404).json({ error: "Movie tidak ditemukan" });
      }

      if (title) {
        movie.title = title;
      }
  
      if (description) {
        movie.description = description;
      }
  
      const updatedMovie = await movie.save();
  
      res.status(200).json(updatedMovie);
    } catch (error) {
      console.error("Error updating movie:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };


  static async Movie5async (req, res) {
    const id = Number(req.params.id);
    const { title, description } = req.body;
  
    try {
      const movie = await Movie.findByPk(id);
  
      if (!movie) {
        return res.status(404).json({ error: "Movie tidak ditemukan" });
      }
  
      if (title) {
        movie.title = title;
      }
  
      if (description) {
        movie.description = description;
      }
  
      const updatedMovie = await movie.save();
  
      res.status(200).json(updatedMovie);
    } catch (error) {
      console.error("Error updating movie:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  static async Movie6async (req, res) {
    const id = Number(req.params.id);
  
    try {
      const movie = await Movie.findByPk(id);
  
      if (!movie) {
        return res.status(404).json({ error: "Movie tidak ditemukan" });
      }
  
      await movie.destroy();
  
      res.status(200).json({ message: `Movie dengan id ${id} berhasil dihapus` });
    } catch (error) {
      console.error("Error deleting movie:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };   
}

module.exports = Controller;