const bcrypt= require("bcrypt");
const jwt = require("jsonwebtoken");
const {user}= require("../models");

class Controller {
    static async registerUser(req, res) {
        const body = req.body;
        const {name, email, password}= body;
        try {
            const existingUser = await user.findOne({ where: { email } });
            if (existingUser) {
              return res.status(400).json({ error: `User dengan email ${email} telah terdaftar` });
            }
            const hashPass= await bcrypt.hash(password,10);
            const newUser = await user.create({
                name,
                email,
                password: hashPass
            });
            res.status(201).json(newUser);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Terjadi kesalahan saat mendaftar' });
        }
    }

    static async loginUser(req, res) {
    const body = req.body;
    const { email, password } = body;
    try {
      const existingUser = await user.findOne({ where: { email } });
      if (!existingUser) {
        return res.status(404).json({ error: `User atas nama ${email} tidak terdaftar` });
      }
      const passwordMatch = await bcrypt.compare(password, existingUser.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Password yang anda masukan salah' });
      }
      const token= jwt.sign({
        id: existingUser.id,
        email: existingUser.email,
      },
      "your-256-bit-secret"
      );
      res.status(200).json(token);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Terjadi kesalahan saat login' });
    }
  }
}

module.exports=Controller;


