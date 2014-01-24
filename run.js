init();
run();

function run() {
	var count = 1000;
	while (count--) {
		var character_list = get_character_list();

		// 做一些战斗前的准备工作（例如回血）
		before_battle(character_list);

		// 战斗，战斗，至死方休！
		while (continue_battle(character_list)) {
			do_battle(character_list);
		}

		// 做一些战斗后的收尾工作（例如升级、捡装备等）
		after_battle(character_list);
	}
}


function init() {
	var fs = require('fs');
	var path = require('path');
	var fileList = fs.readdirSync(__dirname);

	// 非 .js 结尾的不要加载
	// init.js 和 run.js 也不要加载
	fileList = fileList.filter(function(file) {
		if (!/\.js$/i.test(file)) {
			//console.log('not js file: ' + file);
			return false;
		} else if (/^run\.js$/i.test(file)) {
			return false;
		} else {
			return true;
		}
	});

	fileList.forEach(function(file) {
		var m = require(file);
		if (m.name) {
			global[m.name] = m;
			console.log('success: ' + file);
		} else {
			console.log('failure: ' + file);
		}
	});	
}