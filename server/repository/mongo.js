var mongoose=require('mongoose');



exports.connect=function()
{
    mongoose.connection.on("open", function(ref) {
        console.log("Connected to mongo server.");   
      });
    mongoose.connection.on("error", function(err) {
        console.log("Could not connect to mongo server!");
        console.log(err);
      }); 
      mongoose.Promise = global.Promise;
    mongoose.connect(process.env.Database||require('../../appconfig.js').database,{useMongoClient:true});
    mongoose.connection;
};




