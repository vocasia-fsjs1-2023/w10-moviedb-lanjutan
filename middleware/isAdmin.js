async function isAdmin(req, res, next) {
  const userId = req.userId;

  try {
    const user = await getUserFromDatabase(userId);

    if (user && user.isAdmin === true) {
      next();
    } else {
      throw new Error("ANDA BUKAN ADMIN");
    }
  } catch (error) {
    next(error);
  }
}

async function getUserFromDatabase(userId) {
  return { id: userId, isAdmin: true };
}

module.exports = isAdmin;
