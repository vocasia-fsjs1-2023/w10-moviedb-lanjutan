const { Movie, Review } = require("../models");

class Controller {
  static async postMovie(req, res) {
    const body = req.body;
    const { title, description } = body;

    Movie.create({
      title,
      description,
    })
      .then((movie) => {
        res.status(201).json(movie);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }

  static async getAllMovie(req, res) {
    try {
      const movies = await Movie.findAll();
      res.status(200).json({movies});
    } catch (error) {
      res.status(500).json({error: 'Error dalam mendapatkan movie'});
    }
  }

  static async getMovieId(req, res) {
    const { id } = req.params;
    try {
      const movie = await Movie.findByPk(id, {include: Review});
      if(!movie) {
        return res.status(404).json({error: 'Movie tidak dapat ditemukan'});
      } else { 
        res.status(200).json(movie);
      } 
    } catch (error) {
        res.status(500).json({error: 'Error dalam mendapatkan movie'});
      }
  }

  static async putMovieId(req, res) {
    const { id } = req.params;
    const body = req.body;
    const { title, description } = body;

    try {
        const movie = await Movie.findByPk(id);
        if (movie) {
            movie.title = title;
            movie.description = description;
            await movie.save();
            return res.status(200).json(movie);
        }
        res.status(404).json({ error: 'Movie tidak ditemukan' });
      } catch (error) {
        res.status(500).json({ error: 'Error dalam mengupdate movie' });
      }
  }

  static async deleteMovieId(req, res) {
    const { id } = req.params;
    try {
        const movie = await Movie.findByPk(id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie tidak ditemukan'});
          }
          await movie.destroy();
          res.status(200).json({message: `Movie ${id} telah dihapus`});
        } catch (error) {
        res.status(500).json({ error: 'Error dalam menghapus movie' });
    } }
}

module.exports = Controller;