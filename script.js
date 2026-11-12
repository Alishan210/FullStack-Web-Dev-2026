// DOM Elements
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');
const htmlElement = document.documentElement;

// 1. Mobile Hamburger Menu Toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Toggle hamburger icon between bars and 'X'
    if (navLinks.classList.contains('active')) {
        themeIcon.classList.remove('fa-bars');
        themeIcon.classList.add('fa-xmark');
    } else {
        themeIcon.classList.add('fa-bars');
        themeIcon.classList.remove('fa-xmark');
    }
});

// Close mobile menu when clicking a navigation link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.querySelector('i').classList.add('fa-bars');
        hamburger.querySelector('i').classList.remove('fa-xmark');
    });
});

// 2. Dark / Light Theme Toggle Engine
// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeToggle.querySelector('i').className = 'fa-solid fa-sun';
    } else {
        themeToggle.querySelector('i').className = 'fa-solid fa-moon';
    }
}