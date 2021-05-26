const express = require('express');
const router = express.Router();
const loginRegisterController = require('../controller/loginRegisterController');



router.get('/login', loginRegisterController.index);
router.post('/', loginRegisterController.login);


router.get('/register', loginRegisterController.register);

// router.get('/create', loginRegisterController.create);
router.post('/register',loginRegisterController.store);

router.post('/logout', loginRegisterController.logout);


module.exports = router;