const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

// The starts with path is '/'

// POST /cars/:id/reviews
router.post('/:id', reviewsCtrl.create);
// DELETE /reviews/:id
router.delete('/:id', reviewsCtrl.delete);

module.exports = router;