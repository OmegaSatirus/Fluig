document.addEventListener("DOMContentLoaded", () => {
    const openModalBtn = document.getElementById("AbreModal");
    const closeModalBtn = document.getElementById("FechaModal");
    const modal = document.getElementById("ModalTermos");

    // Abrir o Modal
    openModalBtn.addEventListener("click", (event) => {
        event.preventDefault();
        modal.classList.add("show");
        modal.style.display = "flex";
    });

    // Fechar o Modal (pelo botão)
    closeModalBtn.addEventListener("click", () => {
        modal.classList.remove("show");
        modal.style.display = "none";
    });

    // Fechar o Modal (clicando fora)
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.remove("show");
            modal.style.display = "none";
        }
    });
});
