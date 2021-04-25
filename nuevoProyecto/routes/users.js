const express = require('express');
const router = express.Router();
const usersController = require('../controller/usersController')

router.get('/', usersController.user);
router.get('/edit', usersController.editUser);

// router.get('/login', functionLogin.show );

module.exports = router;
