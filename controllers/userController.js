const User = require('../models/userModel')
const mongoose = require('mongoose')
// this is just for fun
const registerUser = async (req,res,next) =>{
    console.log(req.body)
    const {name, email, tg_link, fb_link, phoneNo} = req.body;
    const user = {
        name, 
        email,
        tg_link,
        fb_link,
        phoneNo,
    }
    try {
        const newUser = await User.create(user)
        res.json(newUser)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

module.exports = {
    registerUser,
}