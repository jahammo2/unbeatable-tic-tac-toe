app.gameFunctionality = function () {

	var randomNum = Math.random();

	if (randomNum >= .5) {
		$('.game-block-first').html('O');
		$('.first-heading').html('Computer goes first');
	} else {
		$('.first-heading').html('You goes first');
	}

	function computerMove (id) {
		console.log(id);
		id = Number(id);
		app.computerReact(id);
		app.checkWin();
	}

	app.moves = [];
	app.turnCount = 0;

	$('.game-block').on('click', function () {
		var block = $(this);
		app.stoppage = false;
		app.humanMove = false;
		app.randomDone = true;
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

// app.gameFunctionality();



// todo :
// if first, put x, and if on last move, finish it
// catscan