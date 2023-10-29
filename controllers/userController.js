const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = 'rahasiabanget';

class userController {
  static async userRegister(req, res) {
    const body = req.body;
    const { name, email, password } = body;

    try {
      // Hash password
      const hashedPassword = bcrypt.hashSync(password, 10);

      // Buat user baru
      const user = await User.create({
        name,
        email,
        password: hashedPassword,
      });

      res.status(201).json({ message: 'Akun berhasil dibuat, silahkan login.' });
    } catch (error) {
      next(error);
    }
  }
  

  static async userLogin(req, res, next) {
    const { email, password } = req.body;

    try {
      // Cari pengguna berdasarkan email
      const user = await User.findOne({ where: { email } });

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
          res.status(200).json({ token });
          console.log(token);
        } else {
          next(new Error("Email/Password Salah"));
        }
      } else {
        next(new Error("Email/Password Salah"));
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = userController;
