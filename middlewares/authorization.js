const { Review } = require("../models");

async function isUserOwnReview(req, res, next) {
    try {
        const userId = req.userId;
        const params = req.params;
        const rewiewId = params.id;

        const review = await Review.findOne({ where: { id: rewiewId } });

        if (review && review.userId === userId) {
            next();
        } else {
            throw new Error("INI BUKAN REVIEW KAMU");
        }
    } catch (error) {
        next(error);
    }
}

module.exports = isUserOwnReview;