const jwt = require("jsonwebtoken");
const secret = "rahasia";

async function authentication(req, res, next) {
    try {
        const headers = req.headers;

        const bearer = headers.authorization;
        if (bearer) {
            const token = bearer.slice(7);

            const decode = jwt.verify(token, secret);

            req.userId = decode.id;
            req.email = decode.email;
            next();
        } else {
            throw new Error('token tidak ditemukan')
        }

    } catch (error) {
        next(error);
    }
}

module.exports = authentication;