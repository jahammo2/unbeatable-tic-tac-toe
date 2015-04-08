app.lose = function () {
	console.log('lost')
	$('.lost-heading').animate({
		'margin-left': '-20%'
	}, 5000, function () {
		location.reload();
	})
}

app.catScan = function () {
	console.log('lost')
	$('.cat-heading').animate({
		'margin-left': '-20%'
	}, 5000, function () {
		location.reload();
	})
}