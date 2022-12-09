(function main() {
    
    //Alerta de boas vindas
    alert("Bem-vindo(a) ao Letra à esquerda camarada!")

    recommendatio();
    startTime();
    stopTimer();
    
    

    //Função de Recomendação de Leitura
    function recommendatio() {
        let qtd = 0;
        qtd = prompt('Quantos livros você já leu?');

        if (qtd > 0)
            confirm('Uau! Aqui no LE você encontrará ainda mais conteúdo!');
        if (qtd == 0)
            confirm('É uma pena! Porém aqui no LE você vai encontrar divesos livros para ler!');
    }

    // function timerSet(duration, display) {
    //     let timer = duration, minutes, second;

    //     function chronometer() {
    //         minutes = parseInt(timer / 60, 10);
    //         second = parseInt(timer % 60, 10);

    //         minutes = minutes < 10 ? '0'+ minutes : minutes;
    //         second = second < 10 ? '0'+ second : second;

    //         display.textContent = minutes +':'+ second;

    //         if (--timer < 0)
    //             timer = duration;
    //     }

    //     setInterval(chronometer, 1000);
    // }

    function startTime() {
        let duration = 10;
        let display = document.querySelector(".timer");

        timerSet(duration, display);
    }

    function stopTimer() {
        if (startTime() == 00)
            clearInterval(startTime);
    }

    let inpSearchItem = function () {
        let inpSearch = document.getElementsByName("inpSearch");

        return inpSearch.values;
    }

    let btSearchItem = function(s) {
        let btSearch = document.getElementById("btSearch");

        btSearch.onclick = console.log(s.values);
    }
    
    btSearchItem(inpSearchItem);

    const books = [
        {
            id: 1,
            title: 'memorias postumas',
            poster: '/app/util/imgs/books/livro-memorias-postumas-de-bras-cubas.jpg',
        },
        {
            id: 2,
            title: 'a elite',
            poster: '/app/util/imgs/books/livro-a-elite-do-atraso.jpg'
        },
        {
            id: 3,
            title: 'a ordem',
            poster: '/app/util/imgs/books/livro-a-ordem-dos-arquivistas.jpg'
        },
        {
            id: 4,
            title: 'alguns humanos',
            poster: '/app/util/imgs/books/livro-alguns-humanos.jpg'
        },
        {
            id: 5,
            title: 'maior que o mundo',
            poster: '/app/util/imgs/books/livro-maior-que-o-mundo.jpg'
        },
        {
            id: 6,
            title: 'manifesto',
            poster: '/app/util/imgs/books/livro-manifesto-comunista.jpg'
        },
        {
            id: 7,
            title: 'marighella',
            poster: '/app/util/imgs/books/livro-marighella.jpg'
        },
        {
            id: 8,
            title: 'o estado',
            poster: '/app/util/imgs/books/livro-o-estado-e-a-revolucao.jpg'
        },
        {
            id: 9,
            title: 'que fazer',
            poster: '/app/util/imgs/books/livro-que-fazer.jpg'
        },
        {
            id: 10,
            title: 'sapiens',
            poster: '/app/util/imgs/books/livro-sapiens.jpg'
        },
        {
            id: 11,
            title: 'fullmetal alchemist',
            poster: '/app/util/imgs/books/manga-fullmetal-alchemist-vol-1.jpg'
        },
        {
            id: 12,
            title: 'fullmetal alchemist 2',
            poster: '/app/util/imgs/books/manga-fullmetal-alchemist-vol-2.jpg'
        }
    ];

    let search = document.querySelector('#searchLE');
    let result = document.querySelector('#result');

    function renderBooks(books) {
        let list = '';

        if (books.length <= 0) {
            list += `<h1 class="text-opacity-25 m-5">Sem livros correnspondentes a sua pesquisa.</h1>`
        } else {
            books.forEach((books, index) => {
                list += `
                <div class="card" style="width: 18rem; height: 39rem;">
                    <img id="book" src="${books.poster}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${books.title}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#book12">
                            Começar a ler
                        </button>
                    </div>
                </div>
                `
            });
        }

        result.innerHTML = list;
    }

    renderBooks(books);
})();