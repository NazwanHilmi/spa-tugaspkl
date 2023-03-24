// Hamburger
const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector('.menu-nav');

menuBar.addEventListener("click", function(){
    menuNav.classList.toggle("menu-active");
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navigation');
    const scrolled = window.scrollY > navbar.offsetTop;

    if (scrolled) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
        $(this).ekkoLightbox({alwaysShowClose: true});
});