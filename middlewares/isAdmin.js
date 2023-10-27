const { user } = require("../models");

async function isAdmin(req, res, next) {
    const userId = req.userId;

    const admin = await user.findOne({ where: { id: userId } });
    if (admin.isAdmin === true) {
    next();
} else {
    next(new Error("KAMU BUKAN ADMIN"));
}
}

module.exports = isAdmin;