exports = module.exports = log;

var format = require('util').format;

function log() {
	var t = format.apply(this, arguments);
	console.log(t);
}