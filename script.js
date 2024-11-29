document.addEventListener('DOMContentLoaded', () => {
    console.log("Página carregada com sucesso!");
});

// Script para controlar a visibilidade do botao
window.addEventListener("scroll", () => {
    const backToTopButton = document.querySelector(".back-to-top");
    if (window.scrollY > 300) {
        backToTopButton.classList.add("visible");
    } else {
        backToTopButton.classList.remove("visible");
    }
});