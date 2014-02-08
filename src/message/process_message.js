exports.process_message = process_message;

var action_map = {
	'query_battle_log': query_battle_log,
	'query_character_info': query_character_info
}

function process_message(message) {
	var handler = action_map[message.action];
	if (handler) {
		handler(message);
	} else {
		message.error = {
			code: 1,
			text: 'unknown action'				
		}
	}
}

function query_battle_log(message) {
	var battle_log = get_data('battle_log');
	if (!battle_log) {
		message.error = {
			code: 1,
			text: 'no battle log exists'
		}
	} else {
		message.result = battle_log;
	}
}

function query_character_info(message) {
	
}