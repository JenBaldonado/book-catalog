const express = require('express');
const router = express.Router();
const { getBooks, postBooks, updateBooks, deleteBooks } = require('../controllers/bookControllers')


router.route('/').get(getBooks).post(postBooks);

router.route('/:id').put(updateBooks).delete(deleteBooks);

module.exports = router
