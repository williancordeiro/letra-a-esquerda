$(function() {
    $('#surprise').click(function(e) {
        e.preventDefault();

        setInterval(function() {
            $('nav').css('background-color', 'blue');
        }, 1000)
    })
});

$(function() {
    $('#surprise').click(function(e) {
        e.preventDefault();

        setInterval(function() {
            $('nav').css('background-color', 'green');
        }, 2000)
    })
});

$(function() {
    $('#surprise').click(function(e) {
        e.preventDefault();

        setInterval(function() {
            $('nav').css('background-color', 'yellow');
        }, 3000)
    })
});

