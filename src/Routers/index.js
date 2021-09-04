var express = require('express');
var router = express.Router();
const path = require('path');

const indexController = require('../Controllers/indexController');

router.get("/",indexController.index);
router.get("/prueba",indexController.index);

module.exports = router;