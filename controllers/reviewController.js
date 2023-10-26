const { review, user } = require("../models");

class Controller {
    static async addReview(req, res) {
        const { title, description, rating, movieId } = req.body;
        const userId = req.userId;
        const users = await user.findOne({ where: { id: userId } });
        if (users) {
          try {
            const reviews = await review.create({
              title,
              description,
              rating,
              movieId,
              userId,
            });
            res.status(201).json(reviews);
          } catch (error) {
            res.status(500).json(error);
          }
        } else {
          res.status(500).json({ error: 'Terjadi kesalahan saat membuat review' });
        }
    }

    static async getReview(req, res) {
        try {
            const reviews = await review.findAll({include: 'user'}); 
            res.status(200).json(reviews);
          } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data review' });
          }
    }

    static async updateReview(req, res) {
        const { title, description, rating} = req.body;
        let id = Number(req.params.id);
        const findId = await review.findByPk(id);
        if (findId.userId) {
            try {
                await review.update(
                {
                    title,
                    description,
                    rating,
                },
                {
                    where: {
                    id: id,
                    },
                }
                );
                res.status(200).json(findId);
            } catch (error) {
                console.log(error);
            }  
        } else{
            res.status(403).json(error);
        }
    }

    static async deleteReview(req, res) {
        let id = Number(req.params["id"]);
        const findId = await review.findByPk(id);
        if (findId.userId) {
            await review.destroy({
                where: {
                    id: id
                }
            });
            res.status(200).json(`Review dengan id ${id} berhasil dihapus`);
        } else {
            res.status(403).json(error);
        }
    }
}

module.exports=Controller;