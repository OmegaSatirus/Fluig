const showPassword = document.querySelector('.ShowPassaword');
const passwordInputs = document.querySelectorAll('input[type="password"]');

showPassword.addEventListener('change', function() {
    passwordInputs.forEach(input => {
        input.type = this.checked ? 'text' : 'password';
    });
});

