exports = module.exports = get_player_character;

var player = undefined;

function get_player_character() {
	if (!player) {
		player = new_character();
		init_player();
	}

	return player;
}

function init_player() {
	player.name = '玩家';
	player.hp = {
		current: 15,
		max: 15
	};
	player.level = 1;
	player.exp = {
		current: 0,
		max: 100
	};
	player.attack = 5;
}