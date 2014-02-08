exports.new_battle_log = new_battle_log;
exports.log_battle_detail = log_battle_detail;

var format = require('util').format;

var id = 0;
var battle_log = undefined;

function new_battle_log() {
	battle_log = {
		id: id++,
		list: []
	};

	set_data('battle_log', battle_log);
}

function log_battle_detail() {
	var text = format.apply(this, arguments);
	battle_log.list.push(text);
}