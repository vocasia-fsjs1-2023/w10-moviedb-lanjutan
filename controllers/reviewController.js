const { Review, User } = require('../models');

class ReviewController {
    static async getReview(req, res) {
        let respon;

        try {
            const review = await Review.findAll({ include: User });
            respon = review;
        } catch (error) {
            respon = 'Error';
        }
        res.status(200).json(respon);
    }

    static async addReview(req, res, next) {
        const body = req.body;
        const { title, description, rating, movieId } = body;
        const userId = req.userId;
        const user = await User.findOne({ where: { id: userId } });

        if (user) {
            try {
                const review = await Review.create({
                    title,
                    description,
                    rating,
                    movieId,
                    userId
                });
                res.status(201).json(review);
            } catch (error) {
                res.status(500).json(error)
            }
        } else {
            res.status(500).json(error)
        }
    }

    static async deleteReview(req, res) {
        const id = Number(req.params['id']);
        await Review.destroy({
            where: {
                id: id,
            }
        });
        res.status(200).json('Review Berhasil Di Hapus!');
    }

    static async putReview(req, res) {
        try {
            const { id } = req.params;
            const { title, description, rating } = req.body;

            const review = await Review.findByPk(id);
            if (review) {
                await review.update({ title, description, rating });
                res.status(200).json(`Review dengan Id ${id} telah berhasil di update!`);
            } else {
                res.status(404).json('Review dengan id tersebut tidak di temukan!');
            }
        } catch (error) {
            res.status(500).json('Terjadi Kesalahan Saat Mengupdate Review!')
        }
    }


}

module.exports = ReviewController;