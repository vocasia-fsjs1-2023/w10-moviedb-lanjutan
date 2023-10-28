const { Review, Movie } = require("../models");
const movie = require("../models/movie");

class Controller {

    static async getAllReviews(req, res) {
        try {
          const reviews = await Review.findAll({
            include: Movie,
          });
          res.json(reviews);
        } catch (error) {
          res.status(500).json({ error: "Gagal mendapatkan ulasan" });
        }
      };

    static Postreview(req, res) {
        const body = req.body;
        const { title,description,rating,movieId } = body;

        Review.create({
            title,
            description,
            rating,
            movieId,
        }).then((review) => {
            res.status(201).json(review);
        }).catch((error) => {
            res.status(500).json(error);
        });
    }

    static async Putreview(req, res) {
        const { title, description,rating } = req.body;
        const reviewId = req.params.id;

        try {
            const reviewToUpdate = await Review.findByPk(reviewId);

            if (!reviewToUpdate) {
                return res.status(404).json({ error: "Movie not found" });
            }

            reviewToUpdate.title = title;
            reviewToUpdate.description = description;
            reviewToUpdate.rating = rating;

            await reviewToUpdate.save();

            return res.status(200).json(reviewToUpdate);
        } catch (error) {
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    static async Deletereview(req, res) {
        const id = Number(req.params.id);

        const review = await Review.findByPk(id);
        if (!review) {
            return res.status(404).json({ error: "Review not found" });
        }

        await Review.destroy({
            where: {
                id: id
            }
        });

        res.status(200).json({ message: `review ${review.id} telah dihapus` });
    }

}
module.exports = Controller;