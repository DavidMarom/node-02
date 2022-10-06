const MongoClient = require('mongodb').MongoClient;
require("dotenv").config();
console.log('********* db.service *********');
console.log(process.env.DB_PASS);
const uri = 'mongodb+srv://admin:' + process.env.DB_PASS + '@cluster0.mb30w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

module.exports = {
	getCollection
}

// Database Name
const dbName = 'templateDB';

var dbConn = null;

async function getCollection(collectionName) {
	const db = await connect()
	return db.collection(collectionName);
}

async function connect() {
	if (dbConn) return dbConn;
	try {
		console.log('db.service connect');
		const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
		const db = client.db(dbName);
		dbConn = db;
		return db;
	} catch (err) {
		console.log('Cannot Connect to DB', err)
		throw err;
	}
}