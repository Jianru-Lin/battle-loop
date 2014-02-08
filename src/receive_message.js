exports.receive_message = receive_message;

function receive_message(callback) {
	var a = 100;
	var b = 100;

	setInterval(function() {
		var message = {
			action: 'add',
			args: {
				a: a,
				b: b
			}			
		}

		callback(message);

		console.log(message.args.a + ' + ' + message.args.b + ' = ' + message.result);

		a += 3;
		b += 7;
	}, 1000);
}
