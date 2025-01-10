function forceLogout() {
    localStorage.setItem('session', 'inactive');        

    console.log("Logout efetuado com sucesso!");
    alert("Logout efetuado com sucesso!"); 

    window.location.href = "registro.html"; 
}

window.onload = function() {
    const buttonLogout = document.getElementById("LogoutButton");
    if (buttonLogout) {
        buttonLogout.addEventListener("click", forceLogout);
    }
};
