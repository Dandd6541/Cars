const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');


router.post('/:id', reviewsCtrl.create);

router.delete('/:id', reviewsCtrl.delete);
router.get('/:id/edit', reviewsCtrl.edit);
router.put('/:id/reviews/:id', reviewsCtrl.update);



module.exports = router;