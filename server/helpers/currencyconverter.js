/*var getCountry = require('country-currency-map').getCountry;

console.log(getCountry('United States')); //=> { abbreviation: 'US', currency: 'USD' } 
console.log(getCountry('India'));*/
var a =require('ip');
console.log(a.address());

exports.logip=function(req,res,next){
    console.log(req.headers['x-forwarded-for']);
}