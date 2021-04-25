var express = require('express');
var router = express.Router();
const usersController = require('../controller/usersController')

router.get('/', usersController.user);
router.get('/edit', usersController.editUser);

// router.get('/login', functionLogin.show );

module.exports = router;
