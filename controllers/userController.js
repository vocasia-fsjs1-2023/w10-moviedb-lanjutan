const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = 'rahasiabanget';

const { User } = require('../models');

class userController {
  static async userRegister(req, res) {
    const body = req.body;
    const { name, email, password } = body;


    User.create({
      name,
      email,
      password,
    })
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((error) => {
        res.status(404).json(error);
      });
  }
  

  static async userLogin(req, res, next) {
    const { email, password } = req.body;

    let user = await User.findOne({ where: { email } });

    if (user) {
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
        next(new Error("Email/Password Salah"));
      }
    } else {
      next(new Error("Email/Password Salah"));
    }
  }
}

module.exports = userController;
