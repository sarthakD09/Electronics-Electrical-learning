document.querySelectorAll('.view-details').forEach(button => {
    button.addEventListener('click', function() {
        alert('More details coming soon!');
    });
});
// script.js
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
