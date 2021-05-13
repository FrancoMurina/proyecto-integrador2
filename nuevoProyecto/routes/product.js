const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.get('/id/:id', productController.detalleDeLosProductos);
router.get('/add', productController.agregarProductos);

router.get('/create', productController.create);
router.post('/add', productController.store);

module.exports = router;