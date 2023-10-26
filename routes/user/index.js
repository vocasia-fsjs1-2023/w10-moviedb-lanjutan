const UserController = require('../../controllers/userController');
const router = require('express').Router();

router.post('/register',UserController.userRegister);
router.post('/login', UserController.userLogin);

module.exports = router;
