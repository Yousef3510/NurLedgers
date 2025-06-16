let lastScrollY = window.scrollY;
const navbar = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY < lastScrollY) {
        navbar.style.top = '0';
    } else {
        navbar.style.top = '-100px';
    }
    lastScrollY = window.scrollY;
});


