const express = require('express')
const { countBooks, getAllBooks, getBook, getBooks, deleteBook, addBook, updateBook } = require('./books.controller')
const router = express.Router()


router.get('/get', getAllBooks)
router.get('/count', countBooks)
router.put('/update', updateBook)
router.post('/add', addBook)

module.exports = router