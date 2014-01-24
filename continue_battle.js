exports = module.exports = continue_battle;

function continue_battle(character_list) {
	// 只要战斗双方都活着，就继续战斗
	return character_list[0].is_alive() && character_list[1].is_alive();
}