// ===================== < Scripts para pagina de Login > =====================

// ---------------- < Atributos da pagina de Login > ----------------

let email = document.querySelector('#emailLE');
let password = document.querySelector('#passwordLE');

// ---------------- < > ----------------

function login() {
    let listUser = [];

    let userValid = {
        nome: '',
        sobrenome: '',
        email: '',
        senha: ''
    }

    listUser = JSON.parse(localStorage.getItem('listUser'));

    listUser.forEach((item) => {
        if (email.value == item.email && password.value == item.senha) {
            
            userValid = {
                nome: item.nome,
                sobrenome: item.sobrenome,
                email: item.email,
                senha: item.senha
            }
        }
    });

    if (email.value == userValid.email && password.value == userValid.senha) {
        alert('Sucesso meu nobre!')
        location.href = '/app/index/index.html'
    } else {
        alert('Você não possui cadastro!')
    }

    // if (email.value == 'abc' && password.value == 'abc')
    //     alert('Funcionando')
}

// ===================== < > =====================