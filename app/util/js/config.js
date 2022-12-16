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



$(function() {
    $('#l1').click(function(e) {
        e.preventDefault();

        $('#recents>div').html(
            `<div class="card col-1 m-1" style="width: 18rem;">
            <img src="/assets/resources/imgs/books/livro-a-elite-do-atraso.jpg" class="card-img-top" alt="...">
            <div class="card-body">
             <h5 class="card-title">Sinopse</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#l1">
            Começar a ler
          </button>
        </div>
      </div>`
        );
    });

    $('#l2').click(function(e) {
        e.preventDefault();

        $('#recents').find('div').html(
            `<div class="card col-1 m-1" style="width: 18rem;">
            <img src="/assets/resources/imgs/books/livro-a-ordem-dos-arquivistas.jpg" class="card-img-top" alt="...">
            <div class="card-body">
             <h5 class="card-title">Sinopse</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#l1">
            Começar a ler
          </button>
        </div>
      </div>`
        );
    });

    $('#l3').click(function(e) {
        e.preventDefault();

        $('#recents>div').html(
            `<div class="card col-1 m-1" style="width: 18rem;">
            <img src="/assets/resources/imgs/books/livro-alguns-humanos.jpg" class="card-img-top" alt="...">
            <div class="card-body">
             <h5 class="card-title">Sinopse</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#l1">
            Começar a ler
          </button>
        </div>
      </div>`
        );
    });

    $('#l4').click(function(e) {
        e.preventDefault();

        $('#recents>div').html(
            `<div class="card col-1 m-1" style="width: 18rem;">
            <img src="/assets/resources/imgs/books/livro-maior-que-o-mundo.jpg" class="card-img-top" alt="...">
            <div class="card-body">
             <h5 class="card-title">Sinopse</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#l1">
            Começar a ler
          </button>
        </div>
      </div>`
        );
    });

    $('#l5').click(function(e) {
        e.preventDefault();

        $('#recents>div').html(
            `<div class="card col-1 m-1" style="width: 18rem;">
            <img src="/assets/resources/imgs/books/livro-manifesto-comunista.jpg" class="card-img-top" alt="...">
            <div class="card-body">
             <h5 class="card-title">Sinopse</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#l1">
            Começar a ler
          </button>
        </div>
      </div>`
        );
    });

    $('#l6').click(function(e) {
        e.preventDefault();

        $('#recents>div').html(
            `<div class="card col-1 m-1" style="width: 18rem;">
            <img src="/assets/resources/imgs/books/livro-marighella.jpg" class="card-img-top" alt="...">
            <div class="card-body">
             <h5 class="card-title">Sinopse</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#l1">
            Começar a ler
          </button>
        </div>
      </div>`
        );
    });

    $('#l7').click(function(e) {
        e.preventDefault();

        $('#recents>div').html(
            `<div class="card col-1 m-1" style="width: 18rem;">
            <img src="/assets/resources/imgs/books/livro-memorias-postumas-de-bras-cubas.jpg" class="card-img-top" alt="...">
            <div class="card-body">
             <h5 class="card-title">Sinopse</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#l1">
            Começar a ler
          </button>
        </div>
      </div>`
        );
    });

    $('#l8').click(function(e) {
        e.preventDefault();

        $('#recents>div').html(
            `<div class="card col-1 m-1" style="width: 18rem;">
            <img src="/assets/resources/imgs/books/livro-o-estado-e-a-revolucao.jpg" class="card-img-top" alt="...">
            <div class="card-body">
             <h5 class="card-title">Sinopse</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#l1">
            Começar a ler
          </button>
        </div>
      </div>`
        );
    });

    $('#l9').click(function(e) {
        e.preventDefault();

        $('#recents>div').html(
            `<div class="card col-1 m-1" style="width: 18rem;">
            <img src="/assets/resources/imgs/books/livro-que-fazer.jpg" class="card-img-top" alt="...">
            <div class="card-body">
             <h5 class="card-title">Sinopse</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#l1">
            Começar a ler
          </button>
        </div>
      </div>`
        );
    });
});