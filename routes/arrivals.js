const express = require('express');
const router = express.Router();
const arrivalsCtrl = require('../controllers/arrivals');

router.post('/flights/:id/arrivals', arrivalsCtrl.create);

module.exports = router;
