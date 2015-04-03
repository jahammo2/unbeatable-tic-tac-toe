app.gameFunctionality = function () {

	function computerMove (id) {
		console.log(id);
		id = Number(id);
		app.computerReact(id);
		app.checkWin();
	}

	$('.game-block').on('click', function () {
		var block = $(this);
		if (block.html() === '') {
			block.html('X');
			app.checkWin();
			computerMove(block.attr('id'));
		} else {
			console.log('spot already taken');
		}
	});
	
};

app.gameFunctionality();