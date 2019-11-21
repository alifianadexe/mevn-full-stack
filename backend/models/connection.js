// check connection
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI  + 'localhost:27017/dbPosts');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"))
db.once("open", function(callback){
    console.log("Connection Succeeded")
});