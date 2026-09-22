// Select DOM elements
const themeToggleBtn = document.getElementById('themeToggleBtn');
const bodyElement = document.body;

// Listen for button clicks
themeToggleBtn.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body
    bodyElement.classList.toggle('dark-mode');

    // Update button text based on current mode
    if (bodyElement.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Switch to Light Mode';
    } else {
        themeToggleBtn.textContent = 'Switch to Dark Mode';
    }
});
