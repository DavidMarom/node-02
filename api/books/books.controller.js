const bookService = require('./books.service')

async function getBook(req, res) {
    const book = await bookService.getById(req.params.id)
    res.send(book)
}

async function getBooks(req, res) {
    const books = await bookService.query(req.params.filter)
    res.send(books)
}

async function countBooks(req, res) {
    const count = await bookService.count()
    res.send(count);
}

async function getAllBooks(req, res) {
    const queryPage = req.query.page;
    const pageSize = req.query.size;
    const books = await bookService.query2(queryPage, pageSize);
    res.send(books)
}

async function deleteBook(req, res) {
    await bookService.remove(req.params.id)
    res.end()
}

async function updateBook(req, res) {
    const book = req.body;
    await bookService.update(book)
    res.send(book)
}

async function addBook(req, res) {
    const book = req.body;
    await bookService.add(book)
    res.send(book)
}


module.exports = {
    addBook,
    getBook,
    getAllBooks,
    getBooks,
    deleteBook,
    updateBook,
    countBooks
}