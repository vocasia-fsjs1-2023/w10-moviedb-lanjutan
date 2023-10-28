const { Movie, Review, User } = require("../models")

class Controller {
    static addMovie(req, res) {
        const { title, description } = req.body;
        Movie.create({
            title,
            description, 
        }).then((movie) => {
            res.status(201).json(movie);
        }).catch((error) => {
            res.status(500).json(error);
        });
    }

    static getMovie(req, res) {
        Movie.findAll()
        .then(result => {
          res.status(200).json({Movie: result});
        })
        .catch(error => {
          res.status(500).json({ error: "Internal Server Error" });
        });
    }

    static async getMovieId(req, res) {
        const id = Number(req.params['id']);
       
        try {
            const movie = await Movie.findByPk(id, {
              include: Review,
            });
            
            if (!movie) {
              return res.status(404).json({ message: "Movie tidak dapat ditemukan" });
            }
        
            res.status(200).json(movie);
          } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
            }
    }

    static async updateMovie(req, res) {
        const id = Number(req.params.id);
        const { title, description } = req.body;
    
        let response;
        try {
            await Movie.update({ 
                title,
                description,
            }, {
                where: {
                    id: id
                }
            });
            const updatedMovie = await Movie.findByPk(id);
            if (!updatedMovie) {
                return res.status(404).json({ message: "Movie tidak ditemukan" });
            }
            res.status(200).json(updatedMovie
                );
        } catch (error) {
            console.log(error);
            response = JSON.stringify(error);
        }   
    }

    static async deleteMovie(req, res) {
        const id = Number(req.params["id"]);
    
        try {
            const movie = await Movie.findByPk(id);
    
            if (!movie) {
                return res.status(404).json({ message: "Movie tidak ditemukan" });
            }
    
            const title = movie.title;
            await movie.destroy(
                {where: {
                    id: id,
                },}
            )
    
            return res.status(200).json({ message: `Movie ${title} berhasil dihapus` });
        } catch (error) {
            return res.status(500).json(error);
        }
    }
    
};

module.exports = Controller;