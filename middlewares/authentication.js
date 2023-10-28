const jwt = require("jsonwebtoken");
const secret = "rahasia";

async function authentication(req, res, next){
    try {
        const headers = req.headers;

        const bearer = headers.authorization;
        const token = bearer.slice(7);

        const decode = jwt.verify(token, secret);

        req.userId = decode.id;
        req.email = decode.email ;
        next();
    } catch (error) {
        next(error);
    }
}

module.exports = authentication;