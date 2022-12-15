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

    let search = document.getElementsByTagName('input');
    let noti = document.getElementsByName('notification');

    function empty() {
        noti.addEventListener('click', () => {
            alert('Notificações limpas');
        })
    }
})();