const mongoose = require("mongoose");
const ONGs = require('./schemas/ongs.js');

const connection = mongoose.connection;

function asyncDBConnect(url, dbName, callback) {
    // Create database connection
    mongoose.connect(`mongodb://${url}/${dbName}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    connection.on("error", console.error.bind(console, "MongoDB connection error:"));
    connection.once('open', callback);
}

module.exports = {
    ONGs,
    connection,
    asyncDBConnect
}