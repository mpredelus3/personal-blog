const themeButton = document.getElementById('theme');

function checkTheme() {
    // we will be checking the theme by getting the text of the button
    const buttonText = themeButton.textContent;

    //if the text is 'dark mode' we will do dark mode
    if (buttonText === 'Dark Mode') {
        document.documentElement.setAttribute('data-theme', 'dark')
        themeButton.textContent = 'Light Mode'
    }
    // if its light mode it will be light mode
    if (buttonText === 'Light Mode') {
        document.documentElement.setAttribute('data-theme', 'light')
        themeButton.textContent = 'Dark Mode'
    } 
}

themeButton.addEventListener('click', checkTheme)