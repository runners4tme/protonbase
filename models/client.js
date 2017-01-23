var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clientSchema = new Schema({
  name: String,
  surname: String,
  age: Number
});

var Client = mongoose.model('Client', clientSchema)

module.exports = Client;
