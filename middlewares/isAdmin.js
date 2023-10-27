const { User } = require("../models");

async function isAdmin(req, res, next) {
  try {
    const userId = req.userId;

    const checkAdminRole = await User.findOne({ where: { id: userId } });

    if (checkAdminRole.isAdmin) {
      next();
    } else {
      throw new Error("Akses hanya bisa dilakukan admin!");
    }
  } catch (error) {
    next(error);
  }
}

module.exports = isAdmin;
