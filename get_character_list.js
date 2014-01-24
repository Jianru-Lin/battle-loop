exports = module.exports = get_character_list;

var character_list = undefined;

function get_character_list() {
	if (!character_list) {
		var player = get_player_character();
		character_list = [player, null];
	}

	// 每次换一个新的机器人
	var robot = get_next_robot_character();
	character_list[1] = robot;

	return character_list;
}