const { user } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = "rahasia";

class Controller {
  static addUser(req, res, next) {
    const { name, email, password } = req.body;
    user.create({
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

    let User = await user.findOne({ where: { email } });

    const hash = User.password;
    const isValid = bcrypt.compareSync(password, hash);

    if (isValid) {
      const token = jwt.sign(
        {
          id: User.id,
          email: User.email,
          isAdmin: User.isAdmin,
        },
        secret
      );
      res.status(200).json(token);
    } else {
      next(new Error("Email atau Password Salah, Silahkan isi dengan benar!!!!!"));
    }
  }
}

module.exports = Controller;