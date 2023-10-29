const userController = require('../../controllers/userController');
const router = require('express').Router();

router.post('/register',userController.userRegister);
router.post('/login', userController.userLogin);

module.exports = router;