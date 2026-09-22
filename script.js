// Select all theme swatch buttons and the body element
const themeButtons = document.querySelectorAll('.theme-btn');
const bodyElement = document.body;

// Loop through each button and listen for a click
themeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedTheme = button.getAttribute('data-theme');

        // Clear all existing theme classes from the body
        bodyElement.className = '';

        // If it's not the default theme, add the corresponding class
        if (selectedTheme !== 'default') {
            bodyElement.classList.add(selectedTheme);
        }
    });
});
