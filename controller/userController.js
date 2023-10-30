const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = 'rahasia';

const { User } = require('../models');

class UserController{
    static async userRegister (req, res) {
        const body = req.body;
        const { name, email, password } = body;

        // const hashPassword = await bcrypt.hash(password, 10)
    
        User.create({
            name,
            email,
            password
        })
            .then((user) => {
                res.status(200).json(user);
            })
            .catch((error) => {
                res.status(404).json(error);
            });
    }
    
    static async userLogin (req, res, next) {
        const body = req.body;
        const { email, password } = body;
    
        let user = await User.findOne({ where: { email } });
    
        if (user) {
            const hash = user.password;
            const isValid = bcrypt.compareSync(password, hash)
    
            if (isValid) {
                const token = jwt.sign({ id: user.id, email: user.email, isAdmin: user.isAdmin, }, secret );
                res.status(200).json(token);
            } else {
               next(new Error("SALAH EMAIL/PASSWORD"));
            }
        } else {
            next(new Error("SALAH EMAIL/PASSWORD"));
        }
    }
}

module.exports = UserController;