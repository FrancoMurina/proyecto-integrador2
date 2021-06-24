const express = require('express');
const router = express.Router();
const searchResultsController = require('../controller/searchResultsController');
//Muestra productos encontrados
router.get('/', searchResultsController.search);

module.exports = router;