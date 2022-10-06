const express = require('express')
const {countBooks, getAllBooks, getBook, getBooks, deleteBook, updateBook} = require('./book.controller')
const router = express.Router()

console.log('01 in Book routes');

router.get('/', getAllBooks)
router.get('/count', countBooks)

router.put('/update', updateBook)

module.exports = router