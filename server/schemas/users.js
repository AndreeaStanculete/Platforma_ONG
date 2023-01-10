var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UsersSchema = new Schema({
    _id: mongoose.Schema.ObjectId,
    email: String,
    username: String,
    password: String,
    sub1: String,
    sub2: String,
    sub3: String,
});

module.exports = mongoose.model('Users', UsersSchema, "users");    