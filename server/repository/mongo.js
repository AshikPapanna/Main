var mongoose=require('mongoose');
var appconfig=require('../../appconfig.js');


exports.connect=function()
{
    mongoose.connection.on("open", function(ref) {
        console.log("Connected to mongo server.");   
      });
    mongoose.connection.on("error", function(err) {
        console.log("Could not connect to mongo server!");
        console.log(err);
      });     
    mongoose.connect(appconfig.database);
    mongoose.connection;
};


