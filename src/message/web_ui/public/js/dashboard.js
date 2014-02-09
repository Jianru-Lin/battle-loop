function show_layer(i) {
	var navs = document.querySelectorAll('.dashboard-nav > .dashboard-nav-item');
	remove_class(navs, 'current');
	add_class(navs[i], 'current');

	var layers = document.querySelectorAll('.dashboard-content > .layer');
	add_class(layers, 'hide');
	remove_class(layers[i], 'hide');

	function add_class(e_list, class_name) {
		if ('length' in e_list === false) e_list = [e_list];
		for (var i = 0, len = e_list.length; i < len; ++i) {
			var e = e_list[i];
			if (!e.classList.contains(class_name)) {
				e.classList.add(class_name);
			}
		}
	}

	function remove_class(e_list, class_name) {
		if ('length' in e_list === false) e_list = [e_list];
		for (var i = 0, len = e_list.length; i < len; ++i) {
			var e = e_list[i];
			e.classList.remove(class_name);
		}
	}
}