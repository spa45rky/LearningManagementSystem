const dotenv = require('dotenv')
const mongodb = require('mongodb').MongoClient
dotenv.config()

mongodb.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
    module.exports = client.db()
    console.log("DATABASE CONNECTED!")
    const server = require('./server')
    server.listen(3000)
})