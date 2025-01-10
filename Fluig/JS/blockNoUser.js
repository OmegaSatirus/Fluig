document.addEventListener("DOMContentLoaded", () => {
  const session = localStorage.getItem("session");
  const currentPage = window.location.pathname.split("/").pop();

  if (session !== "active") {
    alert("Por favor, faça o login para acessar essa página.");
    console.log("Usuário não logado, redirecionando para login.");
    window.location.href = "login.html";
  }
});

