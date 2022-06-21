const Review = require('../models/reviewModel')
const Book = require('../models/bookModel')

const writeReview = async (req,res,next) => {
    const {rate, review, reviewedBook} = req.body
    const userId = req.user.id
    const book = await Book.findById(reviewedBook)
    if (!book) {
        res.status(404).send("The book doesn't exist")
    }
    else{
        const reviewed = await Review.create({
            rate,
            review,
            reviewedBook,
            reviewer: userId
        })
        res.json(reviewed)
    }

}
module.exports = {
    writeReview
}
