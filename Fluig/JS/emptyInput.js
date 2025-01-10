console.log("Form validation module loaded");

function formValidation() {
    const form = document.getElementById("MainForm");
    const nameInput = document.getElementById("Name");
    const emailInput = document.getElementById("Email");
    const passwordInput = document.getElementById("Password");
    const confirmPasswordInput = document.getElementById("ConfirmPassword");
    const dateInput = document.getElementById("Age");
    const termsCheckbox = document.getElementById("Termos");

    form.addEventListener("submit", (event) => {
        let isValid = true;

        nameInput.setCustomValidity("");
        emailInput.setCustomValidity("");
        passwordInput.setCustomValidity("");
        confirmPasswordInput.setCustomValidity("");
        dateInput.setCustomValidity("");
        termsCheckbox.setCustomValidity("");

        if (nameInput.value.trim() === "") {
            nameInput.setCustomValidity("Por favor, insira um nome.");
            nameInput.reportValidity();
            isValid = false;
        }

        if (emailInput.value.trim() === "") {
            emailInput.setCustomValidity("Por favor, insira um email.");
            emailInput.reportValidity();
            isValid = false;
        }

        if (passwordInput.value.trim() === "") {
            passwordInput.setCustomValidity("Por favor, insira uma senha.");
            passwordInput.reportValidity();
            isValid = false;
        }

        if (confirmPasswordInput.value.trim() === "") {
            confirmPasswordInput.setCustomValidity("Por favor, confirme sua senha.");
            confirmPasswordInput.reportValidity();
            isValid = false;
        }

        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordInput.setCustomValidity("As senhas não coincidem.");
            confirmPasswordInput.reportValidity();
            isValid = false;
        }

        if (dateInput.value.trim() === "") {
            dateInput.setCustomValidity("Por favor, insira uma data de nascimento.");
            dateInput.reportValidity();
            isValid = false;
        }

        if (!termsCheckbox.checked) {
            termsCheckbox.setCustomValidity("Você deve aceitar os Termos e Condições.");
            termsCheckbox.reportValidity();
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
}

window.addEventListener("load", formValidation);
