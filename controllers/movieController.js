const { Movie,Review } = require("../models");

class Controller {

    static async Getmovie (req, res){
        try {
            const result = await Movie.findAll();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    static async GetmovieId(req, res) {
        const { id } = req.params;
        try {
        const movie = await Movie.findByPk(id, {
        include: Review, 
    });
         if (movie) {
        res.json(movie);
         } else {
        res.status(404).json({ error: "Film tidak ditemukan" });
        }
        } catch (error) {
        res.status(500).json({ error: "Gagal mendapatkan film" });
        }
    };  


    static Postmovie(req, res) {
        const body = req.body;
        const { title, description } = body;

        Movie.create({
            title,
            description,
        }).then((newMovie) => {
            res.status(201).json(newMovie);
        }).catch((error) => {
            res.status(500).json(error);
        });
    }

    static async Putmovie(req, res) {
        const { title, description } = req.body;
        const movieId = req.params.id;

        try {
            const movieToUpdate = await Movie.findByPk(movieId);

            if (!movieToUpdate) {
                return res.status(404).json({ error: "Movie not found" });
            }

            movieToUpdate.title = title;
            movieToUpdate.description = description;

            await movieToUpdate.save();

            return res.status(200).json(movieToUpdate);
        } catch (error) {
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    static async Deletemovie(req, res) {
        const id = Number(req.params.id);

        const movie = await Movie.findByPk(id);
        if (!movie) {
            return res.status(404).json({ error: "Movie not found" });
        }

        await Movie.destroy({
            where: {
                id: id
            }
        });

        res.status(200).json({ message: `movie ${movie.title} telah dihapus` });
    }

}
module.exports = Controller;