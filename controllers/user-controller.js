const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = "rahasia";

class Controller {
  static addUser(req, res, next) {
    const { name, email, password } = req.body;
    User.create({
      name,
      email,
      password,
    })
      .then((User) => {
        res.status(201).json(User);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }
  static async login(req, res, next) {
    const { email, password } = req.body;

    let user = await User.findOne({ where: { email } });

    const hash = user.password;
    const isValid = bcrypt.compareSync(password, hash);

    if (isValid) {
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
          isAdmin: user.isAdmin,
        },
        secret
      );
      res.status(200).json(token);
    } else {
      next(new Error("Informasi login tidak valid"));
    }
  }
}

module.exports = Controller;