const { Movie, Review, User } = require("../models");

class ReviewController {
  static async createReview(req, res) {
    const body = req.body;
    const userId = req.userId;

    try {
      const user = await User.findOne({ where: { id: userId } });
      if (!user) {
        return res.status(401).json({ message: "User tidak terotentikasi" });
      }
      const { title, description, rating, movieId } = body;

      const review = await Review.create({
        title,
        description,
        rating,
        movieId,
        userId,
      });
      res.status(201).json(review);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error" });
    }
  }
  static async reviewList(req, res) {
    try {
        const reviews = await Review.findAll({ include: Movie });
        res.status(200).json(reviews);
      } catch (error) {
        res.status(500).json(error);
      }
  }

  static async reviewUpdateData(req, res) {
    let id = Number(req.params.id);
    const { title, description, rating } = req.body;
    const body = req.body;
    
    let response;
    try {
      await Review.update(
        {
          title,
          description, 
          rating
        },
        {
          where: {
            id: id,
          },
        }
      );
      response = `Review dengan id ${id} berhasil diupdate`;
    } catch (error) {
      console.log(error);
      response = JSON.stringify(error);
    }

    res.status(200).json(response);
  }

  static async deleteReview(req, res) {
    const reviewId = req.params.id;
    
  let response;
  try {
    await Review.destroy({
      where: {
        id: reviewId,
      },
    });
  
    response = `Review dengan id ${reviewId} berhasil dihapus`;
  } catch (error) {
    console.log(error);
    response = JSON.stringify(error);
  }

  res.status(200).json(response);
  }
}

module.exports = ReviewController;
