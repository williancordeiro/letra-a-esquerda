$(function() {
    $('#surprise').click(function(e) {
        e.preventDefault();

        color();

        function color() {
            setInterval(function() {
                $('nav').css('background-color', 'blue');
            }, 1000)
            setInterval(function() {
                $('nav').css('background-color', 'green');
            }, 2000)
            setInterval(function() {
                $('nav').css('background-color', 'red');
            }, 3000)
        }

        
    })

});

