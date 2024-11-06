// theme-toggle.js
document.addEventListener('DOMContentLoaded', function() {
    // Create theme toggle button
    const themeToggle = document.createElement('li');
    themeToggle.className = 'nav-item';
    themeToggle.innerHTML = `
        <button class="nav-link" id="theme-toggle" aria-label="Toggle theme">
            <i class="bi bi-moon"></i>
        </button>
    `;

    // Insert the toggle before the GitHub link
    const navbar = document.querySelector('.navbar-nav');
    navbar.insertBefore(themeToggle, navbar.lastChild);

    // Theme switching logic
    const toggle = document.getElementById('theme-toggle');
    const icon = toggle.querySelector('i');
    
    const setTheme = (isDark) => {
        document.documentElement.setAttribute('data-bs-theme', isDark ? 'dark' : 'light');
        icon.className = isDark ? 'bi bi-sun' : 'bi bi-moon';
        localStorage.setItem('quarto-theme', isDark ? 'dark' : 'light');
    };

    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem('quarto-theme') || 'light';
    setTheme(savedTheme === 'dark');

    // Toggle theme on click
    toggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-bs-theme');
        setTheme(currentTheme !== 'dark');
    });
});