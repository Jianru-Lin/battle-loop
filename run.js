var fs = require('fs');
var path = require('path');

var dir = path.resolve(process.cwd());

(function() {
	var list = fs.readdirSync(dir);

	list = list.filter(function(filename) {
		return /\.js$/.test(filename);
	});

	list.forEach(function(filename) {
		var fullname = path.resolve(dir, filename);
		var file_exports = require(fullname);

		for (var prop_name in file_exports) {
			global[prop_name] = file_exports[prop_name];
			console.log('[load] ' + prop_name);
		}
	});

	// run global start function
	start();
})();