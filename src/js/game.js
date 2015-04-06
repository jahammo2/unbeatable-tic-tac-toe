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
			app.humanMove = false;
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

app.moves = [];
app.stoppage = false;
app.humanMove = false;
app.turnCount = 0;

// todo :
// if first, put x, and if on last move, finish it
// catscan