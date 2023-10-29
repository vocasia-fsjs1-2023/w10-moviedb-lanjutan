const { where } = require("sequelize");
const { Review, Movie, User } = require("../models");

class Controller {
  static async addReview(req, res) {
    const userId = req.userId;
    const { title, description, rating, movieId } = req.body;
    const user = await User.findOne({ where: { id: userId } });

    if (user) {
      try {
        await Review.create({
          title,
          description,
          rating,
          movieId,
          userId,
        });
        const review = await Review.findAll({ include: Movie });
        res.status(201).json(review);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(500).json(error);
    }
  }

  static async getReview(req, res) {
    try {
      const review = await Review.findAll({ include: Movie });
      res.status(200).json({ review: review });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async updateReview(req, res) {
    let id = Number(req.params["id"]);
    const { title, description, rating } = req.body;

    try {
      await Review.update(
        {
          title,
          description,
          rating,
        },
        { where: { id } }
      );
      const update = await Review.findAll({ where: { id } });
      res.status(200).json(update);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async deleteReview(req, res) {
    let id = Number(req.params["id"]);
    try {
      await Review.destroy({ where: { id } });
      res.status(200).json({ message: `review dengan id ${id} telah dihapus` });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = Controller;
