const {Review} = require('../models');

async function isUserOwnReview(req, res, next){
    try {
        const userid = req.userId;
        const params = req.params;
        const reviewId = params.id;
    
        const review = await Review.findOne({where: {id: reviewId}});
    
        if(review && review.userId == userid){
            next();
        }else{
           throw new Error("BUKAN PUNYA ANDA");
        }
    } catch (error) {
        next(error);
    }
}

module.exports =  isUserOwnReview ;