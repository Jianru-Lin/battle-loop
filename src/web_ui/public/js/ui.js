onload = function() {
	query_battle_log_and_show_loop();
}

function query_battle_log_and_show_loop() {
	query_battle_log_and_show(function() {
		setTimeout(query_battle_log_and_show_loop, 500);
	});
}

function query_battle_log_and_show(cb) {
	query_battle_log()
		.success(function(battle_log) {
			ui_output('battle_log', battle_log);
			cb();
		})
		.failure(function(code, text) {
			cb();
		});
}

function ui_output(name, value) {
	if (name === 'battle_log') {
		show_battle_log(value);
	}
}

function show_battle_log(battle_log) {
	id('battle_log_list', function(e) {
		if (e.firstChild) {
			e.removeChild(e.firstChild);
		}
		e.appendChild(new_battle_log_element(battle_log));
	});
}

function id(id_value, cb) {
	var e = document.getElementById(id_value);
	if (e && cb) {
		cb (e);
	}
	return e;
}

function all(selector, cb) {
	var list = document.querySelectorAll(selector);
	if (cb) {
		operate(list, cb);
	}
	return list;

	function operate(list, cb) {
		if (!list || list.length < 1) return;
		for (var i = 0, len = list.length; i < len; ++i) {
			cb(list[i]);
		}
	}	
}

function new_battle_log_element(battle_log) {
	var root = document.createElement('div');

	var div = document.createElement('div');
	div.textContent = '第 ' + battle_log.id + ' 次战斗';
	root.appendChild(div);

	var ol = document.createElement('ol');
	root.appendChild(ol);

	for (var i = 0, len = battle_log.list.length; i < len; ++i) {
		var li = document.createElement('li');
		li.textContent = battle_log.list[i];
		ol.appendChild(li);
	}

	return root;
}