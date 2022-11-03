function login() {
    const email = document.getElementById('emailLE').value;
    const password = document.getElementById('passwordLE').value;

    if (emailIsValid(email) && password == 'admin') {
        alert('Sucesso');
        location.href = 'index.html';
    } else {
        alert('Erro! Email ou senha incorretos')
    }
}

let emailIsValid = (email) => {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Script para pagina de registro >

const name = document.forms['inpName'].value;
const lastName = document.forms['inpLastName'].value;
const emailR = document.forms['inpEmail'].value;
const passwordR = document.forms['inpPassword'].value;

function user() {
    
    if (emailIsValid(emailR)) {
        
    }
}

function addUser(user) {
    
}