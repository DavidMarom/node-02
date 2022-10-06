const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const cors = require('cors');

app.use(cors({
    origin: '*'
}));

const bookRoutes = require('./api/book/book.routes')
app.use('/api/book', bookRoutes)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})