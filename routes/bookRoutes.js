// Books - GET -  with/without query param
// Books - POST
// Books/:id - GET - one book details and reviews
// Books/:id - DELETE/PUT - delete/update books
// books/:id/review - POST
const express = require('express');
const bookController = require('../controllers/bookController.js')
const router = express.Router();

router.get('/', bookController.getBooks)
router.post('/', bookController.createBook)
router.get('/:id', bookController.getBook)
router.put('/:id', bookController.updateBook)
router.delete('/:id', bookController.deleteBook)
module.exports = router;