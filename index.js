const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const path = require('path');
const cors = require('cors');

app.use(bodyParser.json());

app.use(cors({
    origin: '*'
}));

const booksRoutes = require('./api/books/books.routes')
app.use('/api/books', booksRoutes)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})