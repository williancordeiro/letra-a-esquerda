// ===================== < Scripts para pagina de Login > =====================

// ---------------- < Atributos da pagina de Login > ----------------

let email = document.querySelector('#email');
let password = document.querySelector('#password');


function bigBook(a) {
    a.style.width = '7rem';
    a.style.rotate = '-21deg'
}

function normalBook(a) {
    a.style.width = '6rem';
    a.style.rotate = '-13deg';
}

// ---------------- < > ----------------

function login() {
    // alert('Botão está funcionando')

    // if (email.value == 'abc@email.com' && password.value == 'abc')
    //     alert('Funcionando!')


    let listUser = [];

    let userValid = {
        nome: '',
        sobrenome: '',
        usuario: '',
        email: '',
        senha: ''
    }

    listUser = JSON.parse(localStorage.getItem('listUser'));

    listUser.forEach((item) => {
        if (email.value == item.email && password.value == item.senha) {
            
            userValid = {
                nome: item.nome,
                sobrenome: item.sobrenome,
                usuario: item.usuario,
                email: item.email,
                senha: item.senha
            }
        }
    });

    if (email.value == userValid.email && password.value == userValid.senha) {
        alert('Sucesso meu nobre!')
        location.href = '/app/pages/index/index.html'
    } else if (email.value == '' && password.value == '') {
        alert('Preencha com seus dados')
    } else {
        alert('Você não possuí cadastro!')
    }
}

// ===================== < > =====================