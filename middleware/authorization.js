const { Review } = require('./models');

async function isUserOwnReview(req, res, next) {
  try {
    const userId = req.userId;
    const reviewId = req.params.id;

    const review = await Review.findOne({ where: { id: reviewId, userId: userId } });

    if (review) {
      next();
    } else {
      res.status(403).json({ message: 'Review ini bukan milik Anda' });
    }
  } catch (error) {
    next(error);
  }
}

module.exports = isUserOwnReview;