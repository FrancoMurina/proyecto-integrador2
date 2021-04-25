const express = require('express');
const router = express.Router();
const searchResultsController = require('../controller/searchResultsController');

router.get('/', searchResultsController.search);

module.exports = router;