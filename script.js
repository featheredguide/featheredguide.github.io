const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.nav-links a');

// Toggle the navigation menu on hamburger click
navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('nav-active');
});

// Close the navigation menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mainNav.classList.contains('nav-active')) {
            mainNav.classList.remove('nav-active');
        }
    });
});
