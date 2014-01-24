exports = module.exports = get_next_robot_character;

var robot_id = 0;

function get_next_robot_character() {
	// 随机生成一个或强或弱的对手
	var robot = new_character();
	init_robot(robot);
	return robot;
}

function init_robot(robot) {
	robot.name = '机器人' + (++robot_id) + '号';

	// 设定血量
	robot.hp.max = random_int(10, 20);
	robot.hp.current = robot.hp.max;

	// 设定攻击力
	robot.attack = random_int(1, 10);

	// 设定级别和经验
	robot.level = 0;
	robot.exp.current = 0;
	robot.exp.max = 100;

	function random_int(min, max) {
		var r = Math.random();
		var v = min + ((max - min) * r);
		return parseInt(v);
	}
}