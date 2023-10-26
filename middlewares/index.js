const { review } = require("../models");

async function userReview(req, res, next) {
  try {
    const userId = req.userId;
    const param = req.params;
    const reviewId = param.id;
    const reviews = await review.findOne({ where: { id: reviewId } });

    if (reviews && reviews.userId === userId) {
      next();
    } else {
      throw new Error("Anda tidak memiliki akses untuk data review atau data dengan id yang anda inginkan salah");
    }
  } catch (error) {
    next(error);
  }
}

module.exports = userReview;