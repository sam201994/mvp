var mongoose = require('mongoose');

mongoURI = 'mongodb://localhost/myPro';
// mongoose.connect(mongoURI);
mongoose.Promise = global.Promise;
// mongoose.connect(MONGO_URI);
mongoose.connect(mongoURI);

// Run in seperate terminal window using 'mongod'
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongodb connection open');
});

module.exports = db;
