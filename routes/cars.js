var express = require('express');
var router = express.Router();
const carCtrl = require('../controllers/cars');

router.get('/', carCtrl.index);
router.get('/new', carCtrl.new);
router.get('/:id', carCtrl.show);
router.post('/', carCtrl.create);


module.exports = router;
