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

// let confirmPassword = ()=> {
//     if (passwordR.value != confirmPasswordR.value)
//         return true;
// }

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
let nameValid = false;

let lastNameR = document.querySelector('#inpLastName');
let lastNameValid = false;

let emailR = document.getElementById('inpEmail');

let passwordR = document.querySelector('#inpPassword');

let confirmPasswordR = document.querySelector('#inpConfPassword');

// ====== || ======

// ------------------ <= => ------------------

// --------- <= Validação de campo HTML5 API => ---------
(function validate() {
    nameR.addEventListener('invalid', () => {
        if (nameR.value == '') {
            nameR.setCustomValidity('Preencha com o seu Nome!');
            nameValid = false;
        }
        if (nameR.value <= 2)
            nameR.setCustomValidity('Nome precisa ter no minimo 3 Caracteres!');
        else {
            nameR.setCustomValidity('');
            nameValid = true;
        }
    });
    
    lastNameR.addEventListener('invalid', () => {
        if (lastNameR.value == '') {
            lastNameR.setCustomValidity('Preencha com o seu Sobrenome!');
            lastNameValid = false;
        }
        else {
            lastNameR.setCustomValidity('');
            lastNameValid = true;
        }
    });
    
    emailR.addEventListener('invalid', () => {
        if (emailR.value == '')
            emailR.setCustomValidity('Preencha com email valido!');
        else
            emailR.setCustomValidity('');
    });

    passwordR.addEventListener('invalid', () => {
        if (passwordR.value == '')
            passwordR.setCustomValidity('Preencha com uma senha valida!');
        else
        passwordR.setCustomValidity('');
    })

    confirmPasswordR.addEventListener('invalid', () => {
        if (confirmPasswordR.value == '')
            confirmPasswordR.setCustomValidity('Preencha com uma senha valida!');
        if (passwordR.value != confirmPasswordR.value)
            confirmPasswordR.setCustomValidity('As senhas não correspondem!');
        
        else
            confirmPasswordR.setCustomValidity('');
    })
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

let reLogin = document.querySelector('p');
let input = document.querySelector('input');

// function register() {
//     input.value = 'Salve';
//     if (emailIsValid(emailR.value) && passwordIsValid(passwordR.value)) {
//         alert('Sucesso');
//         setInterval(function() {
//             location.href = '/app/index/index.html';
//         }, 3000);
//     }

//     reLogin.innerHTML = 'Boa meu nobre! ';
// }

function cadastrar() {
    if (emailIsValid(emailR.value) && passwordIsValid(passwordR.value)) {
        let listUser = JSON.parse(localStorage.getItem('listUser') || '[]')
        listUser.push({
            nome: nameR.value,
            sobrenome: lastNameR.value,
            email: emailR.value,
            senha: passwordR.value
        })
    
        localStorage.setItem('listUser', JSON.stringify(listUser))
        
        alert('Cadastrado com sucesso!')
        setInterval(function() {
            location.href = '/app/index/index.html';
        }, 3000)
        
    }
}

// --------------------------- <| |> ---------------------------

function search() {
    let inptSearch = document.querySelector('#searchLE')

    let books = new Array();

    if (localStorage.hasOwnProperty('books')) {
        JSON.parse(localStorage.getItem('books'));
    }

    books.push()
}
// ************************************************************************************