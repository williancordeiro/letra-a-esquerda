// --------------------------- <| Script para pagina de login |> --------------------------- >

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

// --------------------------- <| |> ---------------------------

// ************************************************************************************ 

// --------------------------- <| Script para pagina de registro |>  --------------------------- >

// --------- <= Validação de campos com Regex => ---------

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

// --------- <= => ---------

// ------------------ <= Dados para pagina de Registro => ------------------

// ====== |Labels| ======

let lbName = document.querySelector('#lbName');
let lbLastName = document.querySelector('#lbLastName');
let lbEmail = document.querySelector('#lbEmail');
let lbPassword = document.querySelector('#lbPassword');
let lbConfirmPassword = document.querySelector('#inpConfPassword');

// ====== || ======

// ====== |Inputs| ======

let nameR = document.querySelector('#inpName');
let lastNameR = document.querySelector('#inpLastName');
let emailR = document.getElementById('inpEmail');
let passwordR = document.getElementsByName('passwordR');
let confirmPasswordR = document.querySelector('#inpConfPassword');

// ====== || ======

// ------------------ <= => ------------------

// --------- <= Validação de campo HTML5 API => ---------
(function validate() {
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
        if (emailR.value == '')
            emailR.setCustomValidity('Preencha com email valido!');
        else
            emailR.setCustomValidity('');
    });
})();
// --------- <= => ---------

// --------- <= Verificação check-box => ---------

(function optional() {
    let optYes = document.querySelector('#optYes');
    let opNo = document.querySelector('#optNo');

    if (optYes.checked)
        alert('Opção Sim');
    if (opNo.checked)
        alert('OPção Não');

})();

// --------- <= => ---------

function register() {
    alert('Sucesso');
    location.href = 'index.html';
}

// --------------------------- <| |> ---------------------------

// ************************************************************************************
