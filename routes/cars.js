var express = require('express');
var router = express.Router();
const carCtrl = require('../controllers/cars');
const isLoggedIn = require('../config/auth');

router.get('/', carCtrl.index);
router.get('/new', isLoggedIn, carCtrl.new);
router.get('/:id', carCtrl.show);
router.post('/', isLoggedIn, carCtrl.create);



module.exports = router;
