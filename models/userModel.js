const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        unique: true
    },
    tg_link: {
        type: String,
        match: /(https?:\/\/)?(www[.])?(telegram|t)\.me\/([a-zA-Z0-9_-]*)\/?$/
    },
    fb_link: {
        type: String,
    },
    phoneNo:{
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    books: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Post'
    }]
})

module.exports = mongoose.model("User", UserSchema)