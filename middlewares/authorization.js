const { Review } = require("../models");

async function isUserOwnReview(req, res, next) {
  try {
    const userId = req.userId;
    const param = req.params;
    const reviewId = param.id;

    const review = await Review.findOne({ where: { id: reviewId } });

    if (review && review.userId === userId) {
      next();
    } else {
      throw new Error("REVIEW INI BUKAN MILIK ANDA");
    }
  } catch (error) {
    next(error);
  }
}

module.exports = isUserOwnReview;