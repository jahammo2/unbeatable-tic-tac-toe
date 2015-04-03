app.computerReact = function (id) {
	console.log(id);

	function goForWin () {
		if ($('.game-block-fifth') === '') {
			$('.game-block-fifth').html('O');
		}	
	}

	function stopThree (num, param1, param2) {
		var block = $('#' + num);
		var block1 = $('#' + (num + param1));
		var block2 = $('#' + (num + param2));
		if (block.text() === block1.text()) {
			block2.html('O');
		} else if (block.text() === block2.text()) {
			block1.html('O');
		} else {
			goForWin();
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