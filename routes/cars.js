var express = require('express');
var router = express.Router();
const carCtrl = require('../controllers/cars');
const isLoggedIn = require('../config/auth');

router.get('/', isLoggedIn, carCtrl.index);
router.get('/new', isLoggedIn, carCtrl.new);
router.get('/:id', isLoggedIn, carCtrl.show);
router.post('/', isLoggedIn, carCtrl.create);




module.exports = router;
