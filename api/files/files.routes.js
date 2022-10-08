const express = require('express')
const { file01 } = require('./files.controller')
const router = express.Router()

router.get('/add', file01)

module.exports = router