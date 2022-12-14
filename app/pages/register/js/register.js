// ************************************************************************************

// --------------------------- <| Atributos |> ---------------------------

let name = document.querySelector('#name');

let lasName = document.querySelector('#lastName');

let user = document.querySelector('#user');

let email = document.querySelector('#email');


let password = document.querySelector('#password');

let passwordC = document.querySelector('#passwordC');

// --------------------------- <|  |> ---------------------------

// ==================

// --------------------------- <| Validação via Regex |> ---------------------------

function emailIsValid(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function passwordIsValid(password) {
    let re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
    return re.test(password);
}

// --------------------------- <|  |> ---------------------------

// ==================

// --------------------------- <| Validação de Input |> ---------------------------

let confirmPassword = () => {
    if (password.value != passwordC.value)
        return true;
}

// --------------------------- <|  |> ---------------------------

// ==================

// --------------------------- <| Validação HTML5 |> ---------------------------

(function validate() {
    name.addEventListener('invalid', () => {
        if (name.value == '') {
            name.setCustomValidity('Preencha com o seu Nome!');
            nameValid = false;
        }
        if (name.value <= 2)
            name.setCustomValidity('Nome precisa ter no minimo 3 Caracteres!');
        else {
            name.setCustomValidity('');
            nameValid = true;
        }
    });
    
    lastName.addEventListener('invalid', () => {
        if (lastName.value == '') {
            lastName.setCustomValidity('Preencha com o seu Sobrenome!');
            lastNameValid = false;
        }
        else {
            lastName.setCustomValidity('');
            lastNameValid = true;
        }
    });
    
    email.addEventListener('invalid', () => {
        if (email.value == '')
            email.setCustomValidity('Preencha com email valido!');
        else
            email.setCustomValidity('');
    });

    password.addEventListener('invalid', () => {
        if (password.value == '')
            password.setCustomValidity('Preencha com uma senha valida!');
        else
        password.setCustomValidity('');
    })

    passwordC.addEventListener('invalid', () => {
        if (passwordC.value == '')
            passwordC.setCustomValidity('Preencha com uma senha valida!');
        if (confirmPassword())
            passwordC.setCustomValidity('As senhas não correspondem!');
        
        else
            passwordC.setCustomValidity('');
    })
})();

// --------------------------- <|  |> ---------------------------

// ==================

// --------------------------- <| Função de Cadastro |> ---------------------------

function register() {

    // if (emailIsValid(email.value) && passwordIsValid(password.value))
    //     alert('Funcionando!');
    // else 
    //     alert('Sem Info');

    if (emailIsValid(email.value) && passwordIsValid(password.value)) {
        let listUser = JSON.parse(localStorage.getItem('listUser') || '[]')
        listUser.push({
            nome: name.value,
            sobrenome: lastName.value,
            usuario: user.value,
            email: email.value,
            senha: password.value
        })
    
        localStorage.setItem('listUser', JSON.stringify(listUser))
        
        alert('Cadastrado com sucesso!')
        setInterval(function() {
            location.href = '/app/pages/index/index.html';
        }, 3000)
        
    }
}

// --------------------------- <| |> ---------------------------

// ************************************************************************************