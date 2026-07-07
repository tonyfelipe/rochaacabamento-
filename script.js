// Efeito suave ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector('.hero');
    hero.style.opacity = 0;
    hero.style.transition = "opacity 1.5s";
    
    setTimeout(() => {
        hero.style.opacity = 1;
    }, 100);
});  