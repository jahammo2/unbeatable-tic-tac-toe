app.lose = function() {
    endGame('.lost-heading');
}

function endGame(el) {
    $(el).animate({
        'margin-left': '-30%'
    }, 5000, function() {
        location.reload();
    });
    $('.game-blocker-checkbox').prop('checked', true);
}

app.catScan = function() {
    endGame('.cat-heading')
}