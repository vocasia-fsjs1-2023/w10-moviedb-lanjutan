const { Review, Movie, User } = require("../models");

class Controller {
  static Review1(req, res) {
    const body = req.body;
  
    const {title, description, rating, movieId, userId} = body;
  
    Review.create({
      title, 
      description, 
      rating, 
      movieId, 
      userId
    }).then((review) => {
      res.status(201).json(review);
    }).catch((error) => {
      res.status(500).json(error);
    });
  };

  static async Review2 (req, res) {
    let response;
    try {
      const Reviews = await Review.findAll();
      response = Reviews;
    } catch (error) {
      response = "Error";
    }
      res.status(200).json(response);
  };

  static async Review3 (req, res) {
    const id = Number(req.params.id);
    const { title, description } = req.body;
  
    try {
      const review = await Review.findByPk(id);
  
      if (!review) {
        return res.status(404).json({ error: "Review tidak ditemukan" });
      }

      if (title) {
        review.title = title;
      }
  
      if (description) {
        review.description = description;
      }
  
      const updatedReview = await review.save();
  
      res.status(200).json(updatedReview);
    } catch (error) {
      console.error("Error updating review:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

    // Delete a review by ID
    static async Review4(req, res) {
        const reviewID = Number(req.params.id);

        try {
            const deletedRowCount = await Review.destroy({
                where: { id: reviewID },
            });

            if (deletedRowCount > 0) {
                // Return success message
                res.status(200).json({ message: `Review with ID ${reviewID} successfully deleted` });
            } else {
                res.status(404).json({ error: `Review with ID ${reviewID} not found` });
            }
        } catch (error) {
            console.error(`Error deleting review: ${error}`);
            res.status(500).json({ error: "Internal Server Error" });
        }
    };
}

module.exports = Controller;