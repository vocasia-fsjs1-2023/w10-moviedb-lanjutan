const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = "rahasia";

class Controller {
  static registerUser(req, res, next) {
    const { name, email, password } = req.body;
    User.create({
      name,
      email,
      password,
    })
      .then((createdUser) => {
        res.status(201).json(createdUser);
      })
      .catch((error) => {
        res.status(500).json({ error: "Error registering user" });
      });
  }

  static async loginUser(req, res, next) {
    try {
      const { email, password } = req.body;
  
      let user = await User.findOne({ where: { email } });
  
      if (!user) {
        throw new Error("Email/Password combination is incorrect");
      }
  
      if (user && user.password) {
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
        } else {
          throw new Error("Email/Password combination is incorrect");
        }
      } else {
        throw new Error("Invalid user data");
      }
    } catch (error) {
      next(error);
    }
  }

}

module.exports = Controller;