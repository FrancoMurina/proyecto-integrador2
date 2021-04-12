var express = require('express');
var router = express.Router();

const indexController = require('../controller/indexController');

/* GET home page. */
router.get('/', indexController.indexProductos);



//Login y register


module.exports = router;
