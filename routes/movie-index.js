const UserController = require('../controllers/userController');
const router = require('express').Router();
const MovieController = require('../controllers/MovieController');

router.post('/register',UserController.userRegister);
router.post('/login', UserController.userLogin);
router.post('/movies', MovieController.addMovie);

module.exports = router;