var mongoose = require('mongoose');

mongoose.connect('mongodb://MongoLab-c5:X3x6VDhMIDuJvA_KFhXFfWOpGyWvP03ZDgFc5Bms8R8-@ds036648.mongolab.com:36648/MongoLab-c5' || 'mongodb://localhost/shortlydb');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('Connected to mongoose, YAY!');
});

module.exports = db;