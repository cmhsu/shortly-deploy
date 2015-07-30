var mongoose = require('mongoose');
var path = require('path');

mongoose.connect('mongodb://127.0.0.1');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('Connected to mongoose, YAY!');
});

var urlSchema = mongoose.Schema({
  // id: Number, _id is auto incrementing for us available on the created object
  url: String,
  base_url: String,
  code: String,
  title: String,
  username: String,
  visits: Number
});

var userSchema = mongoose.Schema({
  // id: Number, _id is auto incrementing for us available on the created object
  username: String,
  password: String
});

var Url = mongoose.model('Url', urlSchema);
var Message = mongoose.model('User', userSchema);
var mdb = {};

mdb.Url = Url;
mdb.Message = Message;

module.exports = mdb;