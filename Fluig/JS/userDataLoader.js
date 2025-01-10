function checkUserSession() {
    const session = localStorage.getItem('session');
    

    if (session === 'active') {

        const user = JSON.parse(localStorage.getItem('userData'));


        if (user) {
            console.log('Usuário Logado: ', user.name); 
     
        } else {
            console.log('Nenhum usuário encontrado no localStorage');
        }
        window.location.href = 'conta.html';  
    }
}

window.onload = checkUserSession;
