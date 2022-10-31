function login() {
    const email = document.getElementById('emailLE').value;
    const password = document.getElementById('passwordLE').value;

    if (email == 'admin' && password == 'admin') {
        alert('Sucesso');
        location.href = 'index.html'
    }
}