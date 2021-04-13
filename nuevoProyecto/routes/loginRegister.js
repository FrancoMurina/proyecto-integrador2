var express = require('express');
var router = express.Router();

const loginRegisterController = require('../controller/loginRegisterController');

router.get('/login', loginRegisterController.login);
router.get('/register', loginRegisterController.register)

module.exports = router;