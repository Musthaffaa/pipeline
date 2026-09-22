// Select DOM elements
const themeSelect = document.getElementById('themeSelect');
const bodyElement = document.body;

// Listen for selection changes in the dropdown
themeSelect.addEventListener('change', (event) => {
    const selectedTheme = event.target.value;

    // Clear all existing theme classes from the body
    bodyElement.className = '';

    // If a specific mode is selected (other than default), add it as a class
    if (selectedTheme !== 'default') {
        bodyElement.classList.add(selectedTheme);
    }
});
