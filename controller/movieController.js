const { Movie, Review } = require("../models");

class Controller {
  static async createMovie(req, res) {
    const body = req.body;
    const { title, description } = body;
    
    try {
     const movie = await Movie.create({
        title,
        description,
    });
    
      res.status(201).json(movie);
    } catch(error) {
      res.status(500).json(error);
        console.log(error);
    }
  };

  static async movieList(req, res) {
    try {
        const movies = await Movie.findAll();
        res.status(200).json(movies);
      } catch (error) {
        res.status(500).json(error);
      }  
  }

  static async movieById(req, res) {
    const id = Number(req.params.id);

    let response;
    try {
        const movies = await Movie.findOne({
            where: {
            id: id,
         },
         include: Review,
    });
    response = movies;
    } catch (error) {
    console.log(error);
    result = JSON.stringify(error);
    }
    res.status(200).json(response);
  }

  static async movieUpdateData(req, res) {
    let id = Number(req.params.id);
  
     let response;
        try {
            const movies = await Movie.findOne({
                where: {
                id: id
            }
        });
         response = movies;
  } catch (error) {
      response = "ERROR";
  }
  res.status(200).json(response);
  }

  static async movieUpdate(req, res) {
    const { title, description } = req.body;
    let id = Number(req.params.id);

    const findId = await Movie.findByPk(id);
     if (!findId) {
    return res.status(404).json({ message: "Movie Id not found" });
  }

    let response;
    try {
        await Movie.update(
      {
        title,
        description
      },
      {
        where: {
          id: id,
        }
      }
    );
    response = `Movie dengan id ${id} berhasil diubah`;
  } catch (error) {
    console.log(error);
    response = JSON.stringify(error);
  }

  res.status(200).json(response);
  }

  static async deleteMovie(req, res) {
    let id = req.params.id;
  
    let response;
    try {
      await Movie.destroy({
        where: {
          id: id,
        },
      });
    
      response = `Movie dengan id ${id} berhasil dihapus`;
    } catch (error) {
      console.log(error);
      response = JSON.stringify(error);
    }
  
    res.status(200).json(response);
  }
}

module.exports = Controller;
