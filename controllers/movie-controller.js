const { Movie, Review } = require("../models");

class Controller {
  static async addMovie(req, res) {
    const body = req.body;
    const { title, description } = body;

    try {
      const movies = await Movie.create({
        title,
        description,
      });
      return res.status(201).json(movies);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async getMovie(req, res) {
    let response;
    try {
      const movies = await Movie.findAll();
      response = movies;
    } catch (error) {
      response = "Movies tidak ditemukan";
    }
    res.status(200).json({ movie: response });
  }

  static async getMovieId(req, res) {
    let id = Number(req.params["id"]);
    const findId = await Movie.findByPk(id);
    if (findId) {
      let response;
      try {
        const movie = await Movie.findAll({
          where: {
            id,
          },
          include: Review,
        });
        response = movie;
      } catch (error) {
        response = "Movie tidak ditemukan";
      }
      res.status(200).json(response);
    } else {
      return res
        .status(404)
        .json({ message: "Id Movie yang anda cari tidak ditemukan" });
    }
  }

  static async updateMovie(req, res) {
    let id = Number(req.params["id"]);
    const findId = await Movie.findByPk(id);
    const { title, description } = req.body;

    if (findId) {
      let response;
      try {
        await Movie.update(
          {
            title,
            description,
          },
          {
            where: {
              id,
            },
          }
        );
        const movieUpdate = await Movie.findAll({ where: { id } });
        response = movieUpdate;
      } catch (error) {
        response = "Movie tidak berhasil diupdate";
      }
      res.status(200).json(response);
    } else {
      return res
        .status(404)
        .json({ message: `Movie dengan id ${id} tidak dapat ditemukan` });
    }
  }

  static async deleteMovie(req, res) {
    let id = Number(req.params["id"]);
    const findId = await Movie.findByPk(id);

    await Movie.destroy({ where: { id }, include: Review });
    res.status(200).json({ message: `movie ${findId.title} telah dihapus` });
  }
}

module.exports = Controller;
