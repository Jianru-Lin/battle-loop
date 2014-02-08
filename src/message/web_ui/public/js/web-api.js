function query_battle_log() {
	return request({action: 'query_battle_log', args: {}});
}

function query_character_info() {
	return request({action: 'query_character_info', args: {}});
}