const { Review } = require("../models");

async function isUserOwnReview(req, res, next) {
  const userId = req.userId;
  const param = req.params;
  const reviewId = param.id;

  const review = await Review.findOne({ where: { id: reviewId } });

  if (review && review.userId === userId) {
    next();
  } else {
    next({
      name: "forbidden",
      message: "user tidak punya akses data ini",
    });
  }
}

module.exports = isUserOwnReview;
