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

let register = document.getElementById('register').disable=true;