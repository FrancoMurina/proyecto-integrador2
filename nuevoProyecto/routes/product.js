const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.get('/id/:id', productController.detalleDeLosProductos);
router.get('/add', productController.agregarProductos);

module.exports = router;