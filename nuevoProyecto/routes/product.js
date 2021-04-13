const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

// router.get ('/hola', productController. despues seguimos)
router.get('/', productController.todosLosProductos);
router.get('/add', productController.detalleDeLosProductos);

module.exports = router;