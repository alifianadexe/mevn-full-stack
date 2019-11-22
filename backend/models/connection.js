// connect mongo
var mongoose = require('mongoose');
module.exports.connect = function(){
    mongoose.connect('mongodb://localhost/dbPost', { useMongoClient: true });
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
    console.log('We are connected')
    });
    return db
}

