exports.do_battle = do_battle;

function do_battle(character_list) {
	var a = character_list[0];
	var b = character_list[1];

	while (continue_battle(character_list)) {
		do_attack(a, b);
		if (b.is_alive()) {
			do_attack(b, a);
		}
	}

	function do_attack(from, to) {
		var damage = from.attack;
		to.hp.current -= damage;
		log_battle_detail("[%s] 攻击了 [%s]，造成 %s 点伤害", from.name, to.name, damage);
	}
}