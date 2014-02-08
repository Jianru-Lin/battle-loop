exports.get_data = get_data;
exports.set_data = set_data;

var data = {};

function get_data(name) {
	return data[name];
}

function set_data(name, value) {
	data[name] = value;
}