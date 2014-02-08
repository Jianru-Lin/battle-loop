exports.new_character = new_character;

function new_character() {
	return new character();
}

function character() {
	this.name = undefined;
	this.hp = {
		current: undefined,
		max: undefined
	};
	this.level = 0;
	this.exp = {
		current: undefined,
		max: undefined
	};
	this.attack = 0;
}

character.prototype.is_alive = function() {
	return this.hp.current > 0;
}