const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
    },
    publisher: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        enum: ['Romance', 'Mystery', 'Fantasy and Science Fiction','Thriller and horror', 'Young adult', 'Children Fiction', 'inspirational'],
        default: 'Romance'
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId, ref:'User'
    },
    price:{
        type: Number,
        required:true,
    },
    reviews: [{type: mongoose.Schema.Types.ObjectId, ref:'Review'}],
    postedAt: {
        type: Date,
        default: Date.now
    },
    
})
module.exports = mongoose.model("Book", BookSchema);