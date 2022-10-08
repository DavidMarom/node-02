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

app.use('/zip', express.static(path.join(__dirname, 'zip')))

const booksRoutes = require('./api/books/books.routes')
const filesRoutes = require('./api/files/files.routes')
app.use('/api/books', booksRoutes)
app.use('/api/files', filesRoutes)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})