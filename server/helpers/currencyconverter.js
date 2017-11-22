var getCountry = require('country-currency-map').getCountry;

console.log(getCountry('United States')); //=> { abbreviation: 'US', currency: 'USD' } 
console.log(getCountry('India'));