function Washer() {}

Washer.prototype.wash = function(cloth) {
    cloth.state = 'washed';
};

module.exports = new Washer();