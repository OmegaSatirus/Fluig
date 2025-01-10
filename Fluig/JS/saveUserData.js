function saveUserData(event) {
    event.preventDefault();

    const name = document.getElementById('Name').value.trim();
    const idade = document.getElementById('Age').value.trim();
    const email = document.getElementById('Email').value.trim();
    const password = document.getElementById('Password').value.trim();
    const confirmPassword = document.getElementById('ConfirmPassword').value.trim();
    const termsAccepted = document.getElementById('Termos').checked;

    // Recupera usuários já registrados
    const users = JSON.parse(localStorage.getItem('users')) || {};

    // Validação: email já registrado
    if (users[email]) {
        alert('Este email já está registrado.');
        return;
    }

    // Validação: campos obrigatórios
    if (!name || !idade || !email || !password || !confirmPassword) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Validação: senha e confirmação de senha
    if (password !== confirmPassword) {
        alert('As senhas não coincidem. Por favor, tente novamente.');
        return;
    }

    // Validação: aceitação dos termos
    if (!termsAccepted) {
        alert('Você deve aceitar os Termos e Condições para prosseguir.');
        return;
    }

    // Salvar os dados do novo usuário
    users[email] = {
        name,
        idade,
        email,
        password,
    };

    localStorage.setItem('users', JSON.stringify(users));

    alert('Registro realizado com sucesso!');
    window.location.href = 'login.html'; 
}
