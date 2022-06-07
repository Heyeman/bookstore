const Book = require('../models/bookModel')
const User = require('../models/userModel')
const mongoose = require('mongoose')
const express = require('express')
const paginate = require('express-paginate')
const getBooks = async (req,res, next)=>{
    const {title, genre} = req.query;
    const user = await User.find()
    let params = {}
    if(title) {
        params = {...params, title}
    }
    if(genre){
        params = {...params, genre}
    }
    try{
        const [books,itemCount] = await Promise.all([
            Book.find(params).limit(req.query.limit).skip(req.skip).lean().exec(),
            Book.count(params)
        ])
        const pageCount = Math.ceil(itemCount/req.query.limit)
        res.json({
            object:'list',
            pageCount,
            has_more: paginate.hasNextPages(req)(pageCount),
            data: books
        })
    }catch(err){
        console.error(err);
        res.status(501).send(err);
    }
}

const createBook = async (req,res,next)=>{
    const {title,  author, publisher, genre, seller, price} = req.body;
    const newBook = {
        title,
        author,
        publisher,
        genre,
        seller,
        price,
    }
    console.log(newBook);
    try {
        const book = await Book.create(newBook);
        res.json(book)
    } catch (error) {
        console.log(error)
        res.send(error);
    }
}

const getBook = async (req, res, next) => {
    const id = req.params.id;
    console.log("you hit me")
   try{
        const book = await Book.findById(id).populate('seller');
        console.log(book)
        res.json(book)
   }catch(error)
   {
       console.log(error)
        res.send(error);
   }
}

const updateBook = async (req,res,next)=>{
    const id = req.params.id;
    const newData = req.body;
    try{
        await Book.findByIdAndUpdate(id, newData);
        res.json({
            success: true,
        })
    }catch(error)
    {
        res.send(error);
    }
}
const deleteBook = async (req,res, next)=>{
    const id = req.params;
    try {
        const deletedBook = await Book.deleteOne({_id: id})
        res.json(deletedBook)
    } catch (error) {
        res.send(error)
    }
}
module.exports = {
    getBooks,
    createBook,
    getBook,
    updateBook,
    deleteBook
}