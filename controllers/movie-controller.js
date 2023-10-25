const { Movie, Review } = require("../models");

class Controller {
  static async addMovie(req, res, next) {
    const { title, description } = req.body;
    try {
      const movies = await Movie.create({
        title,
        description,
      });
      res.status(201).json(movies);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async getMovie(req, res, next) {
    let response;
    try {
      const movies = await Movie.findAll({ include: Review });
      response = movies;
    } catch (error) {
      response = "ERROR";
    }
    res.status(200).json(response);
  }
  static async getMovieId(req, res, next) {
    let id = Number(req.params["id"]);
    const findId = await Movie.findByPk(id);
    if (findId) {
      let response;
      try {
        const movies = await Movie.findAll({
          where: {
            id: id,
          },
          include: Review,
        });
        response = movies;
      } catch (error) {
        response = "ERROR";
      }
      res.status(200).json(response);
    } else {
      return res.status(404).json({ message: "Id Movie tidak ditemukan" });
    }
  }
  static async updateMovie(req, res, next) {
    const { title, description } = req.body;
    let id = Number(req.params["id"]);
    try {
      await Movie.update(
        {
          title,
          description,
        },
        {
          where: {
            id: id,
          },
        }
      );
      res.status(200).json(`Movie dengan id ${id} berhasil diupdate`);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async deleteMovie(req, res, next) {
    let id = Number(req.params["id"]);
    await Movie.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json(`Movie dengan id ${id} berhasil dihapus`);
  }
}

module.exports = Controller;
