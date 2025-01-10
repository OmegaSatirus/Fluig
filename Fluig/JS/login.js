function validateLogin(event) {
    event.preventDefault(); 
    
    const email = document.getElementById('LoginEmail').value;
    const password = document.getElementById('LoginPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || {};

    const user = users[email];

    if (user) {
        if (user.password === password) {
            localStorage.setItem('session', 'active');
            localStorage.setItem('loggedInUserEmail', email);

            console.log('Login bem-sucedido!');
            alert('Login bem-sucedido!');
            
            window.location.href = 'conta.html';
        } else {
            alert('Credenciais inválidas! Tente novamente.');
        }
    } else {
        alert('Nenhum usuário encontrado com este email. Faça o registro primeiro.');
    }
}
