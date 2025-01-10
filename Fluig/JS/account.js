window.onload = function () {
  const session = localStorage.getItem("session");

  if (session !== "active") {
    alert("Por favor, faça o login para acessar sua conta.");
    window.location.href = "login.html"; 
    return;
  }

  const email = localStorage.getItem("loggedInUserEmail");

  if (!email) {
    alert("Usuário não encontrado.");
    window.location.href = "login.html";
  }

  const users = JSON.parse(localStorage.getItem("users")) || {};

  const user = users[email];

  if (user) {
    console.log("Dados do usuário encontrados:", user);

    document.getElementById("UserName").innerText = user.name;
    document.getElementById("UserFullName").textContent = user.name;
    document.getElementById("UserEmail").textContent = user.email;
    document.getElementById("UserBirthday").textContent = user.idade;
  } else {
    console.log("Usuário não encontrado.");
    alert("Erro ao carregar os dados do usuário.");
    window.location.href = "login.html";
  }
};
