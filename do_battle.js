exports = module.exports = do_battle;

function do_battle(character_list) {debugger;
	var a = character_list[0];
	var b = character_list[1];

	do_attack(a, b);
	if (b.is_alive()) {
		do_attack(b, a);		
	}

	function do_attack(from, to) {
		var damage = from.attack;
		to.hp.current -= damage;
		log("[%s] 攻击了 [%s]，造成 %s 点伤害", from.name, to.name, damage);
	}
}