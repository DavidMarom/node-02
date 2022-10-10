const fileService = require('./files.service')

async function file01(req, res) {
    const response = await fileService.add(req.query.name);
    res.send(response)
}

module.exports = {
    file01
}