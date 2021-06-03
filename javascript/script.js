const navToggle = document.querySelector('#toggle-nav');
const navIcon = document.querySelectorAll('.nav-icon');
const nav = document.querySelector('nav ul');

navToggle.addEventListener("click", () => {
    nav.classList.toggle('open');
    navIcon.forEach(icon => {
        icon.classList.toggle('hidden');
    })
});
