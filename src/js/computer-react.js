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

	function randomMove () {
		console.log('random');
		for (var i = blocks.length - 1; i >= 0; i--) {
			console.log(blocks[i])
			if (blocks[i].text === '') {
				blocks[i].html('O');
				console.log(blocks[i].text)
				return true
			};
		};
	}

	function goForWin () {
		compTurn = true;
		for (var i = blocks.length - 1; i >= 0; i--) {
			if (blocks[i].innerHTML === 'O') {
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
			console.log(4)
		} else if (app.moves.length < 6) {
			console.log(6)
			if (ninthT === 'X' && fifthT === 'X' && secondT === 'X' && eighthT === 'O' && seventhT === '') {
				console.log(6)
				seventh.html('O');
				app.moves.push(7);
			} else if (ninthT === 'X' && fifthT === 'X' && fourthT === 'X' && secondT === '') {
				second.html('O');
				app.moves.push(2);
			} else {
				console.log('trying');
				randomMove();
			}
		} else if (app.moves.length < 8) {
			if (ninthT === 'X' && fifthT === 'X' && secondT === '' && eighthT === '' && sixthT !== '') {
				eighth.html('O');
				app.moves.push(8);
			} else {
				console.log('trying');
				randomMove();
			}
			// else if (ninthT === 'X' && fifthT === 'X' && firstT === 'O' && seventhT === 'X') {
			// 	fourth.html('O');
			// 	app.moves.push(4);
			// }
		} 
		app.humanMove = true;
	}

	function stopThree (num, param1, param2) {
		var block = $('#' + num);
		var block1 = $('#' + (num + param1));
		var block2 = $('#' + (num + param2));
		if (compTurn) {
			if (block.text() === block1.text() && block.text() === 'O' && block1.text() === 'O' && block2.text() === '') {
				block2.html('O');
				app.moves.push(num);
				console.log('worked');
				app.stoppage = true;
			} else if (block.text() === block2.text() && block.text() === 'O' && block2.text() === 'O' && block1.text() === '') {
				block1.html('O');
				app.moves.push(num);
				console.log('worked');
				app.stoppage = true;
			}			
		} else {
			console.log(app.humanMove);
			if (!app.humanMove) {
				console.log(app.humanMove);
				goForWin();
			};
			if (!app.stoppage) {

				if (block.text() === block1.text() && block.text() === 'X' && block1.text() === 'X' && block2.text() === '') {
					block2.html('O');
					console.log('worked');
					app.moves.push(num);
					app.humanMove = true;
				} else if (block.text() === block2.text() && block.text() === 'X' && block2.text() === 'X' && block1.text() === '') {
					block1.html('O');
					app.moves.push(num);
					console.log('worked');
					app.humanMove = true;
				} else {
					if (app.moves.length <= app.turnCount) {
						for (var i = app.moves.length - 1; i >= 0; i--) {
							if (app.moves[i] !== num) {
								app.moves.push(num);
								return false;
							}
						};
					};
					console.log(app.moves);
					compMove();
				}
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