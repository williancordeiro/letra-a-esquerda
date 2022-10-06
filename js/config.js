main();
function main() {
    alert("Bem-vindo(a) ao Letra à esquerda camarada!")

    recommendatio();

    function recommendatio() {
        let qtd = 0;
        qtd = prompt('Quantos livros você já leu?');

        if (isNaN(qtd) && qtd > 0)
            confirm('Uau! Aqui no LE você encontrará ainda mais conteúdo!');
        if (qtd == 0)
            confirm('É uma pena! Porém aqui no LE você vai encontrar divesos livros para ler!');
    }
}