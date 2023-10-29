const { Movie, Review, User } = require("../models");

class Controller {
  static async Postreview(req, res, next) {
    const { title, description, rating, movieId } = req.body;
    const userId = req.userId;

    try {
      const user = await User.findOne({ where: { id: userId } });
      if (!user) {
        return res.status(401).json({ message: "User tidak terauthentikasi" });
      }

      const review = await Review.create({
        title,
        description,
        rating,
        movieId,
        userId,
      });
      res.status(201).json(review);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getAllReviews(req, res, next) {
    try {
      const reviews = await Review.findAll({ include: Movie });
      res.status(200).json({ reviews });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async Putreview(req, res, next) {
    const { title, description, rating } = req.body;
    const reviewId = req.params.id;

    try {
      const review = await Review.findOne({ where: { id: reviewId } });
      if (!review) {
        return res.status(404).json({ message: "Review tidak ditemukan" });
      }

      if (review.userId !== req.userId) {
        return res.status(403).json({ message: "User tidak punya akses data ini" });
      }

      await review.update({
        title,
        description,
        rating,
      });

      res.status(200).json(review);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async Deletereview(req, res, next) {
    const reviewId = req.params.id;

    try {
      const review = await Review.findOne({ where: { id: reviewId } });
      if (!review) {
        return res.status(404).json({ message: "Review tidak ditemukan" });
      }

      if (review.userId !== req.userId) {
        return res.status(403).json({ message: "User tidak punya akses data ini" });
      }

      await review.destroy();
      res.status(200).json({ message: `Review dengan id ${reviewId} berhasil dihapus` });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = Controller;