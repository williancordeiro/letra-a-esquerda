function login() {
    const email = document.getElementById('emailLE').value;
    const password = document.getElementById('passwordLE').value;

    if (emailIsValid(email) && passwordIsValid(password)) {
        alert('Sucesso');
    } else if (email == '' || password == '') {
        alert('erro');
    }
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

function register() {
    if (emailIsValid(emailR.value) && passwordIsValid(passwordR.value)) {
        alert('Sucesso');
    }
}

// ---------------------