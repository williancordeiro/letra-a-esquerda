function login() {
    const email = document.getElementById('emailLE').value;
    const password = document.getElementById('passwordLE').value;

    if (emailIsValid(email) && passwordIsValid(password)) {
        alert('Sucesso');
        location.href = 'index.html'
    } else if (email == '' || password == '') {
        alert('Insira os dados!');
    } else 
        alert('Email ou Senha Incorretos!')
}

// --------- Script para pagina de registro  --------- >


// Validações de Campos ->

let emailIsValid = (email) => {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function passwordIsValid(password) {
    let re = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/;
    return re.test(password);
}

let confirmPassword = (passwordConfirm)=> {
    if (passwordConfirm === passwordR)
        return true;
}

// ***************

// ------ < Dados para pagina de Registro > ------

let nameR = document.querySelector('#inpName');
let lastNameR = document.querySelector('#inpLastName');
let emailR = document.getElementById('inpEmail');

// ------ < > ------

// --------- <= Validação de campo HTML5 API => ---------
nameR.addEventListener('invalid', () => {
    if (nameR.value == '')
        nameR.setCustomValidity('Preencha com o seu Nome!');
    else
        nameR.setCustomValidity('');
});

lastNameR.addEventListener('invalid', () => {
    if (lastNameR.value == '')
        lastNameR.setCustomValidity('Preencha com o seu Sobrenome!');
    else
        lastNameR.setCustomValidity('');
});

emailR.addEventListener('invalid', () => {
    emailR.setCustomValidity('Preencha com email valido!');
});

// --------- <= => ---------

function register() {
    
}

// ---------------------