exports.message_loop = message_loop;

function message_loop() {
	receive_message(function(message) {
		if (message.action === 'quit') {
			// no more message loop
			return;
		};

		process_message(message);

		// next message loop
		setImmediate(message_loop);
	});		
}