const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = "rahasia";

class Controller {
  static async registerUser(req, res, next) {
    const body = req.body;
    const { name, email, password } = body;
    User.create({
      name,
      email,
      password,
    })
      .then((user) => {
        res.status(201).json({ message: "Akun berhasil dibuat, silahkan login.", user});
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }

  static async loginUser(req, res, next) {
    const body = req.body;
    const { email, password } = body;
    
    try {
        const loginUser = await User.findOne({ where: { email } });
        if (!loginUser) {
          return res.status(401).json({ message: 'Email atau kata sandi tidak valid.' });
        }
        const passwordBenar = await bcrypt.compare(password, loginUser.password);
        if (!passwordBenar) {
          return res.status(401).json({ message: 'Email atau kata sandi salah.' });
        }
        const token = jwt.sign({
          id: loginUser.id,
          email: loginUser.email,
        },
        secret
        );
        res.status(200).json(token);
      } catch (error) {
        res.status(500).json(error);
      }
  }
}

module.exports = Controller;