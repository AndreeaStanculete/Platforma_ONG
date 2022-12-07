var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ONGSchema = new Schema({
    _id: mongoose.Schema.ObjectId,
    Adresa: String,
    Denumire: String,
    Judet: String,
    Localitate: String,
    NumarInreg: String,
});

module.exports = mongoose.model('ONG', ONGSchema, "ong");    