app.computerReact = function (id) {
	console.log(id);

	var blocks = $('.game-block');

	var firstT = $('.game-block-first').text(),
		secondT = $('.game-block-second').text(),
		thirdT = $('.game-block-third').text(),
		fourthT = $('.game-block-fourth').text(),
		fifthT = $('.game-block-fifth').text(),
		sixthT = $('.game-block-sixth').text(),
		seventhT = $('.game-block-seventh').text(),
		eighthT = $('.game-block-eighth').text(),
		ninthT = $('.game-block-ninth').text(),
		first = $('.game-block-first'),
		second = $('.game-block-second'),
		third = $('.game-block-third'),
		fourth = $('.game-block-fourth'),
		fifth = $('.game-block-fifth'),
		sixth = $('.game-block-sixth'),
		seventh = $('.game-block-seventh'),
		eighth = $('.game-block-eighth'),
		ninth = $('.game-block-ninth');

	function goForWin () {
		compTurn = true;
		for (var i = blocks.length - 1; i >= 0; i--) {
			if (blocks[i].innerHTML === 'O') {
				console.log('worked');
				checkId(i + 1);
			};		
		};
		compTurn = false;
	}

	var compTurn = false;

	function compMove () {
		console.log(app.moves);
		if (app.moves.length < 2) {
			if (fifthT === '') {
				app.moves.push(5);
				fifth.html('O');
			} else {
				app.moves.push(1);
				first.html('O');
			}
		} else if (app.moves.length < 4) {
			if (ninthT === 'X' && fifthT === 'X' && seventhT === '') {
				seventh.html('O');
				app.moves.push(7);
			}
		} else if (app.moves.length < 6) {
			if (ninthT === 'X' && fifthT === 'X' && secondT === 'X' && eighthT === 'O') {
				seventh.html('O');
			}
		} else if (app.moves.length < 8) {
			if (ninthT === 'X' && fifthT === 'X' && secondT === '' && eighthT === '') {
				eighth.html('O');
			}
		}	
	}

	function stopThree (num, param1, param2) {
		var block = $('#' + num);
		var block1 = $('#' + (num + param1));
		var block2 = $('#' + (num + param2));
		if (compTurn) {
			if (block.text() === block1.text() && block.text() === 'O' && block1.text() === 'O') {
				block2.html('O');
			} else if (block.text() === block2.text() && block.text() === 'O' && block2.text() === 'O') {
				block1.html('O');
			}			
		} else {
			goForWin();
			if (block.text() === block1.text() && block.text() === 'X' && block1.text() === 'X') {
				block2.html('O');
			} else if (block.text() === block2.text() && block.text() === 'X' && block2.text() === 'X') {
				block1.html('O');
			} else {
				for (var i = app.moves.length - 1; i >= 0; i--) {
					console.log(app.moves);
					if (app.moves[i] !== num) {
						app.moves.push(num);
						return true;
					}
				};
				console.log(app.moves);
				compMove();
			}
		}
		
	}

	function row (num, param1, param2) {
		stopThree(num, param1, param2);
	} 

	function column (num, param1, param2) {
		stopThree(num, param1, param2);
	} 

	function diagonal (num, param1, param2) {
		stopThree(num, param1, param2);
	}

	function checkId (id) {
		if (id === 1) {
			row(id,1,2);
			column(id,3,6);
			diagonal(id,4,8);
		} else if (id === 2) {
			row(id,-1,1);
			column(id,3,6);
		} else if (id === 3) {
			row(id,-1,-2);
			column(id,3,6);
			diagonal(id,2,4);
		} else if (id === 4) {
			row(id,1,2);
			column(id,-3,3);
		} else if (id === 5) {
			row(id,-1,1);
			column(id,-3,3);
			diagonal(id,-4,4);
			diagonal(id,-2,2);
		} else if (id === 6) {
			row(id,-1,-2);
			column(id,-3,3);
		} else if (id === 7) {
			row(id,1,2);
			column(id,-6,-3);
			diagonal(id,-2,-4);
		} else if (id === 8) {
			row(id,-1,1);
			column(id,-6,-3);
		} else {
			row(id,-1,-2);
			column(id,-6,-3);
			diagonal(id,-4,-8);
		}
	}

	checkId(id);

}