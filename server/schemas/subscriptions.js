var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const subscriptionsSchema = new Schema({
    email: String,
    denumireONG: String,
});

module.exports = mongoose.model('subs', subscriptionsSchema, "subscriptions");    