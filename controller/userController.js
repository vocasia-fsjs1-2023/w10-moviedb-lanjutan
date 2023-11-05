const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");
const secret = "rahasia";

class Controller {
  static async registerUser(req, res) {
    const { name, email, password } = req.body;

    try {
      const users = await User.create({
        name,
        email,
        password,
      });
      res.status(201).json({ message: "Akun  berhasil dibuat, silahkan login", users });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async loginUser(req, res, next) {
    try {
      const { email, password } = req.body;

      const users = await User.findOne({
        where: {
          email,
        },
      });

      if (users) {
        const validation = bcrypt.compareSync(password, users.password);

        if (validation) {
          const token = jwt.sign(
            {
              id: users.id,
              email: users.email,
              isAdmin: users.isAdmin,
            },
            secret
          );

          res.status(200).json({ message: "Berhasil login!", token });
        } else {
          next(new Error("Password salah"));
        }
      } else {
        next(new Error("Email tidak ditemukan"));
      }
    } catch (error) {
      next(error);
    }
  }

}

module.exports = Controller;