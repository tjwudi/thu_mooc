var washer = require('./washer');
var dryer = require('./dryer');

// CommonJS pattern example
// Using Node.js (http://nodejs.org)
// Browserify

var cloth = {
    state: 'dirty'
};

washer.wash(cloth);
dryer.dry(cloth);

console.log(cloth.state);