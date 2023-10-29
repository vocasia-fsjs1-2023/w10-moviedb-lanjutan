const { Movie, Review } = require('../models');

class Controller{
    static async getMovie (req, res) {
        let response;

        try {
            const movie = await Movie.findAll({ include: Review });
            response = movie;
        } catch (error) {
            response = 'Error';
        }
        res.status(200).json(response);
    }

    static async getMovieId (req, res) {
        let response;
        const id = Number(req.params['id']);

        try {
            const movie = await Movie.findAll({
                where: {
                    id: id,
                }
            });
            response = movie;
        } catch (error) {
            response = 'Error';
        }
        res.status(200).json(response);
    }
    static addMovie (req, res) {
        const body = req.body;
        const { title, description } = body;

        Movie.create({
            title,
            description,
        })
            .then((post) => {
                res.status(201).json(post);
            })
            .catch((error) => {
                res.status(500).json(error);
            });
    }
    static async putMovie (req, res) {
        try {
            const { id } = req.params;
            const { title, description } = req.body;

            const movie = await Movie.findByPk(id);
            if (movie) {
                await movie.update({ title, description });
                res.status(200).json(`Movie dengan id ${id} berhasil di update!`);
            } else {
                res.status(404).json('Movie dengan id tersebut tidak ditemukan!');
            }
        } catch (error) {
            res.status(500).json('Terjadi kesalahan saat mengupdate data Movie');
        }
    }

    static async deleteMovie (req, res) {
        const id = Number(req.params['id']);
        await Movie.destroy({
            where: {
                id: id,
            }
        });
        res.status(200).json(`Movie dengan id ${id} telah di hapus!`);
    }
}

module.exports = Controller;