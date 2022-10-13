main();
function main() {
    
    //Alerta de boas vindas
    alert("Bem-vindo(a) ao Letra à esquerda camarada!")

    recommendatio();
    //cronometro();

    //Função de Recomendação de Leitura
    function recommendatio() {
        let qtd = 0;
        qtd = prompt('Quantos livros você já leu?');

        if (isNaN(qtd) && qtd > 0)
            confirm('Uau! Aqui no LE você encontrará ainda mais conteúdo!');
        if (qtd == 0)
            confirm('É uma pena! Porém aqui no LE você vai encontrar divesos livros para ler!');
    }

    function cronometro() {
        let segundos = 10;

        setTimeout(decrement, 1000);

        function decrement() {
            segundos--;
        }

        document.querySelector("nav.le-navbar").innerHTML =
            `<div>${segundos}</div>`

    }
}