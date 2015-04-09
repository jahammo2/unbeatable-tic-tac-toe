app.lose = function () {
	console.log('lost')
	endGame('.lost-heading');
}

function endGame (el) {
	$(el).animate({
		'margin-left': '-20%'
	}, 5000, function () {
		location.reload();
	});
}

app.catScan = function () {
	endGame('.cat-heading')
}