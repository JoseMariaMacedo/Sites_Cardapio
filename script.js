// Aqui você pode adicionar interações em JavaScript, se necessário.
// Por exemplo, um menu de navegação que fica fixo ao rolar a página
// ou um efeito de scroll suave ao clicar nos links de âncora.

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
