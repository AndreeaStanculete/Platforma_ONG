var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const loggedinschema = new Schema({
    _id: Number,
    is: Boolean,
    email: String,
});

module.exports = mongoose.model('Loggedin', loggedinschema, "loggedin");    