const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

class Controller {
  static async registerUser(req, res) {
    const body = req.body;
    const { name, email, password } = body;

    try {
      const Users = await User.create({
        name,
        email,
        password,
      });

      res.status(201).json({ message: "Akun berhasil dibuat, silahkan login!", Users });
    } catch (error) {
      console.log(`Error menambahkan User: ${error}`);
      res.status(500).json(error);
    }
  }

  static async loginUser(req, res) {
    const body = req.body;
    const { email, password } = body;
    const secret = "rahasia";

    const loginUser = await User.findOne({
      where: {
        email,
      },
    });

    //Jika email yang diinput salah atau tidak valid
    if (!loginUser) {
      return res.status(403).json("Salah Email/Password!");
    } else {
      //Jika email ada, lanjut membandingkan inputan dengan password yang telah dihash
      const validation = bcrypt.compareSync(password, loginUser.password);

      if (validation) {
        //Mengubah id dan email menjadi JWT Token
        const token = jwt.sign(
          {
            id: loginUser.id,
            email: loginUser.email,
          },
          secret
        );

        res.status(200).json({ message: "Berhasil login!", token });
      } else {
        //Jika password yang diinput salah atau tidak valid
        return res.status(403).json("Salah Email/Password!");
      }
    }
  }
}

module.exports = Controller;
