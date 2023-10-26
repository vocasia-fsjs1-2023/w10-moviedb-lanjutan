const { movie , review} = require("../models");

class Controller {
    static async addMovie(req, res) {
            const { title, description } = req.body;
            try {
                const data = await movie.create({ title, description });
                res.status(201).json(data);
            } catch (error) {
                console.error(error);
                res.status(500).json(error);
            }
    }

    static async getMovie(req, res) {
        let response;
        try {
          const movies = await movie.findAll({ include: review });
          response = movies;
        } catch (error) {
            res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data movie' });
        }
        res.status(200).json(response);
    }

    static async getId_Movie(req, res, next) {
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
            res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data movie' });
          }
          res.status(200).json(response);
        } else {
          return res.status(404).json({ message: `Movie dengan id :${id} tidak ditemukan` });
        }
    }

    static async updateMovie(req, res) {
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
          res.status(200).json(`Movie dengan id ${id} berhasil diupdate`);
        } catch (error) {
          res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data movie' });
        }
    }

    static async deleteMovie(req, res) {
        let id = Number(req.params["id"]);
        const findId = await movie.findByPk(id);
        if (!findId) {
            return res.status(404).json({ message: `Movie dengan id: ${id}  tidak ditemukan` });
        }
        await movie.destroy({
            where: {
                id: id
            }
        });
        res.status(200).json(`Movie dengan id ${id} berhasil dihapus`);
    }
}

module.exports = Controller;
