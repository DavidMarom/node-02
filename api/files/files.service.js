// const lineReader = require("line-reader");
const fs = require('fs');
const { zip } = require('zip-a-folder');

module.exports = { add }

async function add(name) {
	console.log('Service got:', name);

	fs.appendFile('./premade/template.txt', name + '\n', function (err) {
		if (err) {
			console.log('err', err);
		}
	})

	zip('./premade/', "./zip/Your_File.zip")

	return ({ file: 'Your_File.zip' })

}
