const express = require('express')
const reviewController = require('../controllers/ReviewController')
const router = express.Router()

router.post('/', reviewController.writeReview)
module.exports = router