var express = require('express');
var router = express.Router();

const searchResultsController = require('../controller/searchResultsController');

router.get('/', searchResultsController.search);

module.exports = router;