// Toggle the navigation menu visibility for small screens
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle?.addEventListener('click', () => {
    navLinks.forEach(link => {
        // Toggle between 'block' and 'none' for visibility
        if (link.style.display === 'block') {
            link.style.display = 'none';
        } else {
            link.style.display = 'block';
        }
    });
});
