exports.battle_loop = battle_loop;

function battle_loop() {
	var character_list = get_character_list();

	// 做一些战斗前的准备工作（例如回血）
	before_battle(character_list);

	// 战斗，战斗，至死方休！
	do_battle(character_list);

	// 做一些战斗后的收尾工作（例如升级、捡装备等）
	after_battle(character_list);

	// next battle loop
	// setImmediate(battle_loop);
	setTimeout(battle_loop, 1 * 1000);
}