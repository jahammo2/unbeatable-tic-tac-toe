app.gameFunctionality = function () {

	function computerMove (id) {
		console.log(id);
		id = Number(id);
		app.computerReact(id);
		app.checkWin();
	}

	app.moves = [];

	$('.game-block').on('click', function () {
		var block = $(this);
		app.stoppage = false;
		app.humanMove = false;
		app.randomDone = true;
		app.turnCount = 0;
		if (block.html() === '') {			
			app.turnCount += 1;
			block.html('X');
			app.checkWin();
			computerMove(block.attr('id'));
		} else {
			console.log('spot already taken');
		}
	});
	
};

app.gameFunctionality();



// todo :
// if first, put x, and if on last move, finish it
// catscan