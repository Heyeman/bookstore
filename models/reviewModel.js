const mongoose = require('mongoose')

const ReviewSchema = mongoose.Schema({
    reviewer: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true,
    },
    reviewedBook: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Book',
        required: true,
    },
    rate:{
        type: Number,
        min: 0,
        max: 5
    },
    review:{
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Review', ReviewSchema);