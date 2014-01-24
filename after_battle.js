exports = module.exports = after_battle;

function after_battle(character_list) {
	var alive_character_list = undefined;

	// 把死亡了的角色过滤掉
	alive_character_list = character_list.filter(function(character) {
		if (!character.is_alive()) {
			log('[%s] 死亡', character.name);
			return false;
		} else {
			return true;
		}
	});

	// 活着的角色执行升级操作
	alive_character_list.forEach(levelUp);

	log('');

	function levelUp(character) {
		// 计算经验点
		// 每次能固定获得 10 点经验点
		var delt_exp = 10;
		character.exp.current += delt_exp;

		// 检查是否达到了升级的临界
		if (character.exp.current >= character.exp.max) {
			// 计算当前经验可以升几级，以及升级完后还余下多少经验
			var delt_level = parseInt(character.exp.current / character.exp.max);
			var tail_exp = character.exp.current % character.exp.max;

			// 执行升级操作，并将余下的经验记录下来
			character.level += delt_level;
			character.exp.current = tail_exp;

			log('[%s] 获得了 %s 点经验，升级至 %s 级',  character.name, delt_exp, character.level);
		} else {
			log('[%s] 获得了 %s 点经验',  character.name, delt_exp);
		}
	}
}