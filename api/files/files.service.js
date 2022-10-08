
module.exports = { add }

async function add() {
	try {
		return ({ file: 'a.zip' })

	}
	catch (err) {
		console.log('ERROR')
		throw err;
	}
}
