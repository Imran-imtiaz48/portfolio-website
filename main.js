// Utility function to select elements
const selectElement = (selector) => document.querySelector(selector);
const navLinks = document.querySelectorAll(".nav-link");

// Function to toggle navigation animation
const toggleNavAnimation = () => {
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ""; // Reset animation
        } else {
            link.style.animation = `navLinkAnimate 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
    });
};

// Function to toggle navigation menu
const toggleNavMenu = () => {
    selectElement(".nav-list").classList.toggle("active");
    selectElement(".burger-menu-icon").classList.toggle("toggle");
    toggleNavAnimation();
};

// Event listener for burger menu icon
selectElement(".burger-menu-icon").addEventListener("click", toggleNavMenu);

// Event listeners for navigation links
navLinks.forEach((link) => {
    link.addEventListener("click", toggleNavMenu);
});
