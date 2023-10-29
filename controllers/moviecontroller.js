const { movie, review } = require("../models");

class Controller {
  static async addMovie(req, res, next) {
    const { title, description } = req.body;
    try {
      const movies = await movie.create({
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
      const movies = await movie.findAll({ include: review });
      response = movies;
    } catch (error) {
      response = "ERROR";
    }
    res.status(200).json(response);
  }
  static async getMovieId(req, res, next) {
    let id = Number(req.params["id"]);
    const findId = await movie.findByPk(id);
    if (findId) {
      let response;
      try {
        const movies = await movie.findAll({
          where: {
            id: id,
          },
          include: review,
        });
        response = movies;
      } catch (error) {
        response = "ERROR";
      }
      res.status(200).json(response);
    } else {
      return res.status(404).json({ message: "Id yang anda masukkan salah" });
    }
  }
  static async updateMovie(req, res, next) {
    const { title, description } = req.body;
    let id = Number(req.params["id"]);
    try {
      await movie.update(
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
      res.status(200).json(`Id Movie ${id} berhasil diupdate`);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async deleteMovie(req, res, next) {
    let id = Number(req.params["id"]);
    await movie.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json(`id Movie ${id} berhasil dihapus`);
  }
}

module.exports = Controller;